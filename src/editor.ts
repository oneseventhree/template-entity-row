import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { hasTemplate } from "./helpers/templates";

const LABELS: Record<string, string> = {
  entity: "Entity",
  name: "Name template",
  icon_mode: "Icon type",
  icon: "Icon",
  state: "State template",
  secondary: "Secondary information template",
  secondary_multiline: "Multiline secondary information",
  image: "Image template",
  color: "Icon colour template",
  active: "Icon appearance",
  condition: "Visibility condition template",
  toggle: "Show entity toggle",
  native_icon: "Weather icon style",
  tap_action: "Tap action",
  hold_action: "Hold action",
  double_tap_action: "Double-tap action",
};

type IconMode = "static" | "template";

const templateSelector = () => ({ template: {} });
const textSelector = (multiline = false) => ({
  text: multiline ? { multiline: true } : {},
});

function isTrue(value: unknown): boolean {
  return value === true || String(value).trim().toLowerCase() === "true";
}

class TemplateEntityRowEditor extends LitElement {
  @property({ attribute: false }) hass: any;
  @state() private _config: Record<string, any> = {};
  @state() private _iconMode: IconMode = "static";
  private _iconModeWasChosen = false;
  @state() private _moreOptionsExpanded = false;
  @state() private _interactionsExpanded = false;

  setConfig(config: Record<string, any>): void {
    const next: Record<string, any> = { ...config };
    if (next.condition === true) {
      delete next.condition;
    } else if (next.condition === false) {
      next.condition = "{{ false }}";
    }
    const matchesCurrent =
      JSON.stringify(next) === JSON.stringify(this._config);
    if (!this._iconModeWasChosen || !matchesCurrent) {
      this._iconMode = hasTemplate(next.icon) ? "template" : "static";
      this._iconModeWasChosen = false;
    }
    this._config = next;
  }

  private get _primarySchema(): any[] {
    const entitySelector = hasTemplate(this._config.entity)
      ? templateSelector()
      : { entity: {} };
    const iconSelector = this._iconMode === "template"
      ? templateSelector()
      : { icon: {} };

    return [
      { name: "entity", selector: entitySelector },
      { name: "name", selector: templateSelector() },
      { name: "state", selector: templateSelector() },
      { name: "secondary", selector: templateSelector() },
      {
        name: "icon_mode",
        selector: {
          select: {
            mode: "dropdown",
            options: [
              { value: "static", label: "Static icon" },
              { value: "template", label: "Template icon" },
            ],
          },
        },
      },
      {
        name: "icon",
        selector: iconSelector,
        context: { icon_entity: "entity" },
      },
      { name: "color", selector: templateSelector() },
    ];
  }

  private get _primaryData(): Record<string, any> {
    return {
      ...this._config,
      icon_mode: this._iconMode,
    };
  }

  private get _moreOptionsSchema(): any[] {
    const activeSelector =
      typeof this._config.active === "string"
        ? templateSelector()
        : {
            select: {
              mode: "dropdown",
              options: [
                { value: "automatic", label: "Automatic" },
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ],
            },
          };

    const schema: any[] = [
      { name: "toggle", selector: { boolean: {} } },
    ];

    if (this._showWeatherIconStyle) {
      schema.push({
        name: "native_icon",
        selector: {
          select: {
            mode: "dropdown",
            options: [
              { value: "layered", label: "Layered artwork" },
              { value: "standard", label: "Standard icon" },
            ],
          },
        },
      });
    }

    schema.push(
      { name: "active", selector: activeSelector },
      { name: "condition", selector: templateSelector() },
      { name: "image", selector: templateSelector() },
      {
        name: "secondary_multiline",
        selector:
          typeof this._config.secondary_multiline === "string"
            ? templateSelector()
            : { boolean: {} },
      }
    );

    return schema;
  }

  private get _showWeatherIconStyle(): boolean {
    const entity = this._config.entity;

    return (
      typeof entity === "string" &&
      !hasTemplate(entity) &&
      entity.trim().startsWith("weather.") &&
      !hasTemplate(this._config.native_icon) &&
      !this._hasCustomVisual
    );
  }

  private get _hasCustomVisual(): boolean {
    return [this._config.icon, this._config.image].some(
      (value) => value !== undefined && String(value).trim() !== ""
    );
  }

  private get _hasCustomColor(): boolean {
    return (
      this._config.color !== undefined &&
      String(this._config.color).trim() !== ""
    );
  }

  private get _defaultIconAppearance(): "automatic" | "inactive" {
    return this._hasCustomVisual && !this._hasCustomColor
      ? "inactive"
      : "automatic";
  }

  private get _moreOptionsData(): Record<string, any> {
    const data: Record<string, any> = {
      ...this._config,
      active:
        typeof this._config.active === "string"
          ? this._config.active
          : this._config.active === undefined
          ? this._config.state_color !== undefined
            ? isTrue(this._config.state_color)
              ? "automatic"
              : "inactive"
            : this._defaultIconAppearance
          : this._config.active
            ? "active"
            : "inactive",
    };
    if (this._showWeatherIconStyle) {
      data.native_icon =
        this._config.native_icon === false ? "standard" : "layered";
    }
    return data;
  }

  private get _interactionSchema(): any[] {
    const actionSelector = (key: string) =>
      typeof this._config[key] === "string"
        ? textSelector(true)
        : { ui_action: {} };

    return [
      { name: "tap_action", selector: actionSelector("tap_action") },
      { name: "hold_action", selector: actionSelector("hold_action") },
      {
        name: "double_tap_action",
        selector: actionSelector("double_tap_action"),
      },
    ];
  }

  protected render() {
    if (!this.hass) return html``;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._primaryData}
        .schema=${this._primarySchema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <ha-expansion-panel
        outlined
        .expanded=${this._moreOptionsExpanded}
        @expanded-changed=${this._expandedChanged}
      >
        <div slot="header" class="expansion-header">
          <ha-icon icon="mdi:tune"></ha-icon>
          <span>More options</span>
        </div>
        <div class="more-options-content">
          <ha-form
            .hass=${this.hass}
            .data=${this._moreOptionsData}
            .schema=${this._moreOptionsSchema}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._moreOptionsValueChanged}
          ></ha-form>
          <ha-expansion-panel
            class="nested-panel"
            outlined
            .expanded=${this._interactionsExpanded}
            @expanded-changed=${this._interactionsExpandedChanged}
          >
            <div slot="header" class="expansion-header">
              <ha-icon icon="mdi:gesture-tap"></ha-icon>
              <span>Interactions</span>
            </div>
            <div class="interactions-content">
              <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${this._interactionSchema}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
              ></ha-form>
            </div>
          </ha-expansion-panel>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _computeLabel = (schema: { name: string }): string => {
    if (schema.name === "icon") {
      return this._iconMode === "template" ? "Icon template" : "Static icon";
    }
    if (
      ["active", "condition", "toggle", "secondary_multiline"].includes(
        schema.name
      ) &&
      typeof this._config[schema.name] === "string"
    ) {
      return schema.name === "active"
        ? "Active template"
        : schema.name === "toggle"
          ? "Toggle template"
          : schema.name === "secondary_multiline"
            ? "Multiline secondary template"
            : LABELS[schema.name];
    }
    return LABELS[schema.name] ?? schema.name;
  };

  private _expandedChanged(event: CustomEvent): void {
    this._moreOptionsExpanded = Boolean(
      event.detail?.expanded ?? (event.target as any).expanded
    );
  }

  private _interactionsExpandedChanged(event: CustomEvent): void {
    event.stopPropagation();
    this._interactionsExpanded = Boolean(
      event.detail?.expanded ?? (event.target as any).expanded
    );
  }

  private _moreOptionsValueChanged(event: CustomEvent): void {
    const value = { ...event.detail.value };
    const remove: string[] = [];
    if (this._showWeatherIconStyle) {
      if (value.native_icon === "standard") {
        value.native_icon = false;
      } else if (value.native_icon === "layered") {
        delete value.native_icon;
        remove.push("native_icon");
      }
    }
    if (typeof this._config.active !== "string") {
      if (value.active === "automatic") {
        delete value.active;
        remove.push("active");
        value.state_color = true;
      } else {
        value.active = value.active === "active";
      }
    }
    this._applyValue(value, remove);
  }

  private _valueChanged(event: CustomEvent): void {
    const value = { ...event.detail.value };
    const iconMode = value.icon_mode as IconMode | undefined;
    delete value.icon_mode;

    if (iconMode && iconMode !== this._iconMode) {
      this._iconMode = iconMode;
      this._iconModeWasChosen = true;
      return;
    }

    this._applyValue(value);
  }

  private _applyValue(
    value: Record<string, any>,
    remove: string[] = []
  ): void {
    const config = {
      ...this._config,
      ...value,
      type: "custom:template-entity-row",
    };
    remove.forEach((key) => delete config[key]);
    this._config = config;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config },
        bubbles: true,
        composed: true,
      })
    );
  }

  static styles = css`
    :host {
      box-sizing: border-box;
      display: block;
      max-width: 100%;
      padding-inline-end: 12px;
    }
    ha-form {
      box-sizing: border-box;
      display: block;
      max-width: 100%;
      overflow: visible;
      width: 100%;
    }
    ha-expansion-panel {
      box-sizing: border-box;
      display: block;
      max-width: 100%;
      margin-top: 16px;
    }
    .expansion-header {
      align-items: center;
      display: flex;
      font-weight: 500;
      gap: 12px;
    }
    .more-options-content {
      padding: 0 16px 16px;
    }
    .nested-panel {
      margin-top: 20px;
      --expansion-panel-content-padding: 0;
    }
    .interactions-content {
      padding: 0 0 16px;
    }
  `;
}

if (!customElements.get("template-entity-row-editor")) {
  customElements.define("template-entity-row-editor", TemplateEntityRowEditor);
}

declare global {
  interface HTMLElementTagNameMap {
    "template-entity-row-editor": TemplateEntityRowEditor;
  }
}
