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

const textSelector = (multiline = false) => ({
  text: multiline ? { multiline: true } : {},
});

class TemplateEntityRowEditor extends LitElement {
  @property({ attribute: false }) hass: any;
  @state() private _config: Record<string, any> = {};

  setConfig(config: Record<string, any>): void {
    this._config = { ...config };
  }

  private get _schema(): any[] {
    const entitySelector = hasTemplate(this._config.entity)
      ? textSelector(true)
      : { entity: {} };
    const actionSelector = (key: string) =>
      typeof this._config[key] === "string"
        ? textSelector(true)
        : { ui_action: {} };
    const booleanOrTemplateSelector = (key: string) =>
      typeof this._config[key] === "string"
        ? textSelector(true)
        : { boolean: {} };

    return [
      { name: "entity", selector: entitySelector },
      { name: "name", selector: textSelector(true) },
      { name: "icon", selector: textSelector(true) },
      { name: "state", selector: textSelector(true) },
      { name: "secondary", selector: textSelector(true) },
      { name: "image", selector: textSelector(true) },
      { name: "color", selector: textSelector(true) },
      { name: "active", selector: booleanOrTemplateSelector("active") },
      {
        name: "condition",
        selector: booleanOrTemplateSelector("condition"),
      },
      { name: "toggle", selector: booleanOrTemplateSelector("toggle") },
      { name: "native_icon", selector: { boolean: {} } },
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
        .schema=${this._schema}
        .computeLabel=${(schema: { name: string }) =>
          LABELS[schema.name] ?? schema.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <p>
        Fields containing Jinja templates remain editable as multiline text.
        Standard actions use Home Assistant's action editor.
      </p>
    `;
  }

  private _valueChanged(event: CustomEvent): void {
    const config = {
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
    p {
      color: var(--secondary-text-color);
      font-size: 0.875rem;
      line-height: 1.4;
      margin: 16px 0 0;
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
