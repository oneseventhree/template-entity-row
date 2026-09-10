import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { hasTemplate } from "./helpers/templates";

const LABELS: Record<string, string> = {
  entity: "Entity",
  name: "Name template",
  icon: "Icon template",
  state: "State template",
  secondary: "Secondary information template",
  image: "Image template",
  color: "Icon colour template",
  active: "Icon appearance",
  condition: "Visibility condition template",
  toggle: "Show entity toggle",
  native_icon: "Use native Home Assistant icon",
  tap_action: "Tap action",
  hold_action: "Hold action",
  double_tap_action: "Double-tap action",
};

const templateSelector = () => ({ template: {} });
const textSelector = (multiline = false) => ({
  text: multiline ? { multiline: true } : {},
});

class TemplateEntityRowEditor extends LitElement {
  @property({ attribute: false }) hass: any;
  @state() private _config: Record<string, any> = {};
  @state() private _moreOptionsExpanded = false;
  @state() private _interactionsExpanded = false;

  setConfig(config: Record<string, any>): void {
    const next: Record<string, any> = { native_icon: true, ...config };
    if (next.condition === true) {
      delete next.condition;
    } else if (next.condition === false) {
      next.condition = "{{ false }}";
    }
    this._config = next;
  }

  private get _primarySchema(): any[] {
    const entitySelector = hasTemplate(this._config.entity)
      ? templateSelector()
      : { entity: {} };

    return [
      { name: "entity", selector: entitySelector },
      { name: "name", selector: templateSelector() },
      { name: "icon", selector: templateSelector() },
      { name: "state", selector: templateSelector() },
      { name: "secondary", selector: templateSelector() },
      { name: "color", selector: templateSelector() },
    ];
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

    return [
      { name: "toggle", selector: { boolean: {} } },
      { name: "native_icon", selector: { boolean: {} } },
      { name: "active", selector: activeSelector },
      { name: "condition", selector: templateSelector() },
      { name: "image", selector: templateSelector() },
    ];
  }

  private get _moreOptionsData(): Record<string, any> {
    if (typeof this._config.active === "string") {
      return this._config;
    }
    return {
      ...this._config,
      active:
        this._config.active === undefined
          ? "automatic"
          : this._config.active
            ? "active"
            : "inactive",
    };
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
        .data=${this._config}
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
    if (
      ["active", "condition", "toggle"].includes(schema.name) &&
      typeof this._config[schema.name] === "string"
    ) {
      return schema.name === "active"
        ? "Active template"
        : schema.name === "toggle"
          ? "Toggle template"
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
    if (typeof this._config.active !== "string") {
      if (value.active === "automatic") {
        delete value.active;
        remove.push("active");
      } else {
        value.active = value.active === "active";
      }
    }
    this._applyValue(value, remove);
  }

  private _valueChanged(event: CustomEvent): void {
    this._applyValue(event.detail.value);
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
    }
    .interactions-content {
      padding: 0 16px 16px;
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
