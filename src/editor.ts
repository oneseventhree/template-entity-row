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
  active: "Active template",
  condition: "Visibility condition template",
  toggle: "Toggle template",
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
  @state() private _interactionsExpanded = false;

  setConfig(config: Record<string, any>): void {
    this._config = { ...config };
  }

  private get _mainSchema(): any[] {
    const entitySelector = hasTemplate(this._config.entity)
      ? templateSelector()
      : { entity: {} };
    const booleanOrTemplateSelector = (key: string) =>
      typeof this._config[key] === "string"
        ? templateSelector()
        : { boolean: {} };

    return [
      { name: "entity", selector: entitySelector },
      { name: "name", selector: templateSelector() },
      { name: "icon", selector: templateSelector() },
      { name: "state", selector: templateSelector() },
      { name: "secondary", selector: templateSelector() },
      { name: "image", selector: templateSelector() },
      { name: "color", selector: templateSelector() },
      { name: "active", selector: booleanOrTemplateSelector("active") },
      {
        name: "condition",
        selector: booleanOrTemplateSelector("condition"),
      },
      { name: "toggle", selector: booleanOrTemplateSelector("toggle") },
      { name: "native_icon", selector: { boolean: {} } },
    ];
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
        .schema=${this._mainSchema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <ha-expansion-panel
        outlined
        .expanded=${this._interactionsExpanded}
        @expanded-changed=${this._expandedChanged}
      >
        <div slot="header" class="expansion-header">
          <ha-icon icon="mdi:gesture-tap"></ha-icon>
          <span>Interactions</span>
        </div>
        <div class="interaction-content">
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${this._interactionSchema}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _computeLabel = (schema: { name: string }): string =>
    LABELS[schema.name] ?? schema.name;

  private _expandedChanged(event: CustomEvent): void {
    this._interactionsExpanded = Boolean(
      event.detail?.expanded ?? (event.target as any).expanded
    );
  }

  private _valueChanged(event: CustomEvent): void {
    const config = {
      ...this._config,
      ...event.detail.value,
      type: "custom:template-entity-row",
    };
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
      display: block;
    }
    ha-form {
      display: block;
    }
    ha-expansion-panel {
      display: block;
      margin-top: 16px;
    }
    .expansion-header {
      align-items: center;
      display: flex;
      font-weight: 500;
      gap: 12px;
    }
    .interaction-content {
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
