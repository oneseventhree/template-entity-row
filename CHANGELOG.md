# Changelog

## 1.0.1-beta-02

- Place Icon colour template directly below Icon template in the visual editor.

## 1.0.1-beta-01

- Use Home Assistant's standard native icon automatically for ordinary entity
  domains when no custom icon or image is configured.
- Replace the general native-icon switch with a Weather icon style dropdown
  shown only for eligible `weather.*` entities.
- Offer Layered artwork and Standard icon choices while retaining the existing
  `native_icon` YAML setting for backward compatibility.
- Hide the weather-specific choice when a custom icon or image takes priority.

## 1.0.0

- Add a full Home Assistant visual editor while preserving existing YAML
  configurations and unrecognised advanced properties.
- Add multiline editors for entity, name, icon, state, secondary information,
  icon colour, visibility and image templates.
- Add standard Home Assistant action selectors for tap, hold and double-tap
  actions while retaining templated action support.
- Fix templated custom icons, including custom icon sets such as `phu:`, and
  trim template output before rendering the icon.
- Enable native Home Assistant icons by default when no custom icon or image is
  configured.
- Render weather entities with Home Assistant's layered native weather artwork.
- Prevent raw templates from appearing while rows initialise.
- Load each row's template subscriptions concurrently and safely clean up or
  replace subscriptions when configuration changes.
- Add a compact More options panel in the final order: entity toggle, native
  icon, icon appearance, visibility condition and image template.
- Add a separately collapsible Interactions panel inside More options.
- Replace ambiguous active and visibility switches with controls that preserve
  the original automatic, active, inactive and conditional behavior.
- Correct boolean template handling, full-row hiding and double-tap detection.
- Keep editor controls and switch focus outlines within the available width.
- Modernise the TypeScript and Rollup build, remove known dependency
  vulnerabilities and add automated build and HACS validation.
- Add HACS installation and migration guidance, fictional interface mockups,
  configuration defaults and tested YAML examples.
