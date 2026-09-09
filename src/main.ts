import { LitElement, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import pjson from "../package.json";
import "./editor";
import { bindActionHandler } from "./helpers/action";
import { getHass } from "./helpers/hass";
import { hasTemplate, subscribeTemplate } from "./helpers/templates";

const OPTIONS = [
  "icon",
  "active",
  "name",
  "secondary",
  "state",
  "condition",
  "image",
  "entity",
  "native_icon",
  "color",
  "toggle",
  "tap_action",
  "hold_action",
  "double_tap_action",
] as const;

const TRIMMED_OPTIONS = new Set([
  "icon",
  "entity",
  "image",
  "color",
  "active",
  "condition",
  "native_icon",
  "toggle",
]);

const LOCALIZE_PATTERN = /_\([^)]*\)/g;

function translate(hass: any, value: string): string {
  return value.replace(LOCALIZE_PATTERN, (key) => {
    const params = key.substring(2, key.length - 1).split(/\s*,\s*/);
    return hass.localize(...params) || key;
  });
}

function isTrue(value: unknown): boolean {
  return value === true || String(value).trim().toLowerCase() === "true";
}

function normaliseValue(key: string, value: unknown, hass: any): unknown {
  if (typeof value !== "string") return value;
  const translated = translate(hass, value);
  return TRIMMED_OPTIONS.has(key) ? translated.trim() : translated;
}

class TemplateEntityRow extends LitElement {
  @property({ attribute: false }) hass: any;
  @state() private _sourceConfig: Record<string, any> = {};
  @state() private _renderedConfig: Record<string, any> = {};
  @property({ type: Boolean, reflect: true }) hidden = false;

  private _subscriptions: Array<() => Promise<void>> = [];
  private _bindGeneration = 0;
  private _actionHandler?: (event: Event) => void;

  static async getConfigElement(): Promise<HTMLElement> {
    await customElements.whenDefined("template-entity-row-editor");
    return document.createElement("template-entity-row-editor");
  }

  setConfig(config: Record<string, any>): void {
    if (!config || typeof config !== "object") {
      throw new Error("Invalid template-entity-row configuration");
    }
    this._sourceConfig = { ...config };
    this._renderedConfig = { ...config };
    void this._bindTemplates();
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (Object.keys(this._sourceConfig).length && !this._subscriptions.length) {
      void this._bindTemplates();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    void this._clearSubscriptions();
  }

  protected updated(changed: Map<PropertyKey, unknown>): void {
    if (changed.has("_renderedConfig")) {
      const condition = this._renderedConfig.condition;
      this.hidden = condition !== undefined && !isTrue(condition);
    }
    this._bindActionElements();
  }

  protected async firstUpdated(): Promise<void> {
    const genericRow = this.shadowRoot?.querySelector(
      "#staging hui-generic-entity-row"
    ) as any;
    if (!genericRow) return;
    await genericRow.updateComplete;
    this._actionHandler = genericRow._handleAction?.bind(genericRow);
  }

  private async _clearSubscriptions(): Promise<void> {
    const subscriptions = this._subscriptions.splice(0);
    await Promise.allSettled(subscriptions.map((unsubscribe) => unsubscribe()));
  }

  private async _bindTemplates(): Promise<void> {
    const generation = ++this._bindGeneration;
    await this._clearSubscriptions();
    const hs = await getHass();
    if (generation !== this._bindGeneration) return;

    for (const key of OPTIONS) {
      const source = this._sourceConfig[key];
      if (!hasTemplate(source)) {
        if (typeof source === "string") {
          this._setRenderedValue(key, normaliseValue(key, source, hs));
        }
        continue;
      }

      const unsubscribe = await subscribeTemplate(
        source,
        { config: this._sourceConfig },
        (value) => {
          if (generation !== this._bindGeneration) return;
          this._setRenderedValue(key, normaliseValue(key, value, hs));
        }
      );
      if (generation !== this._bindGeneration) {
        await unsubscribe();
      } else {
        this._subscriptions.push(unsubscribe);
      }
    }
  }

  private _setRenderedValue(key: string, value: unknown): void {
    this._renderedConfig = { ...this._renderedConfig, [key]: value };
  }

  private _handleAction = (event: Event): void => {
    this._actionHandler?.(event);
  };

  private _bindActionElements(): void {
    const config = this._renderedConfig;
    if (
      !config.entity &&
      !config.tap_action &&
      !config.hold_action &&
      !config.double_tap_action
    ) {
      return;
    }
    const options = {
      hasHold: config.hold_action !== undefined,
      hasDoubleClick: config.double_tap_action !== undefined,
    };
    bindActionHandler(this.shadowRoot?.querySelector(".icon") ?? null, options);
    bindActionHandler(this.shadowRoot?.querySelector(".info") ?? null, options);
  }

  protected render() {
    if (!this.hass || !this._renderedConfig) return nothing;

    const config = this._renderedConfig;
    const base = this.hass.states?.[config.entity];
    const entity = base
      ? {
          ...base,
          attributes: { ...base.attributes },
        }
      : {
          entity_id: "binary_sensor.template_entity_row",
          attributes: { icon: "no:icon", friendly_name: "" },
          state: "off",
        };

    const icon =
      config.icon !== undefined ? config.icon || "no:icon" : undefined;
    const name =
      config.name ?? entity.attributes?.friendly_name ?? entity.entity_id;
    const state = config.state ?? base?.state;
    const active = isTrue(config.active);
    const stateColor = config.active === undefined ? true : active;

    if (active) {
      entity.attributes.brightness = 255;
      entity.state = "on";
    } else if (config.active !== undefined) {
      entity.state = "off";
    }

    const showToggle = isTrue(config.toggle) && Boolean(config.entity);
    const useNativeIcon =
      isTrue(config.native_icon) &&
      config.icon === undefined &&
      config.image === undefined;
    const hasAction = Boolean(
      config.entity ||
        config.tap_action ||
        config.hold_action ||
        config.double_tap_action
    );
    return html`
      <div id="wrapper">
        ${useNativeIcon
          ? html`
              <ha-state-icon
                .hass=${this.hass}
                .stateObj=${entity}
                @action=${this._handleAction}
                class=${classMap({ icon: true, pointer: hasAction })}
                .stateColor=${stateColor}
              ></ha-state-icon>
            `
          : html`
              <state-badge
                .hass=${this.hass}
                .stateObj=${entity}
                @action=${this._handleAction}
                .overrideIcon=${icon}
                .overrideImage=${config.image}
                .color=${config.color}
                class=${classMap({ icon: true, pointer: hasAction })}
                .stateColor=${stateColor}
              ></state-badge>
            `}
        <div
          class=${classMap({ info: true, pointer: hasAction })}
          @action=${this._handleAction}
        >
          ${name}
          ${config.secondary !== undefined
            ? html`<div class="secondary">${config.secondary}</div>`
            : nothing}
        </div>
        <div class="state">
          ${showToggle
            ? html`
                <ha-entity-toggle .hass=${this.hass} .stateObj=${entity}>
                </ha-entity-toggle>
              `
            : state}
        </div>
      </div>
      <div id="staging">
        <hui-generic-entity-row .hass=${this.hass} .config=${config}>
        </hui-generic-entity-row>
      </div>
    `;
  }

  static styles = [
    (customElements.get("hui-generic-entity-row") as any)?.styles,
    css`
      :host {
        display: block;
      }
      :host([hidden]) {
        display: none !important;
      }
      #wrapper {
        display: flex;
        align-items: center;
        flex-direction: row;
        min-height: 40px;
      }
      .icon {
        flex: 0 0 40px;
      }
      .info {
        flex: 1 1 30%;
        min-width: 0;
        padding-inline: 16px 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .secondary {
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .state {
        text-align: var(--float-end, right);
      }
      .pointer {
        cursor: pointer;
      }
      #staging {
        display: none;
      }
    `,
  ];
}

if (!customElements.get("template-entity-row")) {
  customElements.define("template-entity-row", TemplateEntityRow);
  console.info(
    `%cTEMPLATE-ENTITY-ROW ${pjson.version} IS INSTALLED`,
    "color: green; font-weight: bold"
  );
}

declare global {
  interface HTMLElementTagNameMap {
    "template-entity-row": TemplateEntityRow;
  }
}
