# Changelog

## 1.0.1-beta-01

- Audit all 119 issues from the original repository and exclude feature
  requests, unsupported native controls, configuration questions and reports
  already fixed in the maintained version.
- Replace the private hidden-row action handler with Home Assistant's current
  `hass-action` event contract for reliable tap, hold and double-tap actions.
- Fix templated hold actions on touch devices and double-tap handling reported
  in upstream issues #67 and #125.
- Respect explicit `state_color: true` and `state_color: false` settings while
  retaining state-aware icons by default, covering upstream issues #123, #126
  and #136.
- Notify the Entities card whenever a conditional row becomes visible or
  hidden, preventing the blank gaps reported in upstream issue #138.
- Remove the load-time dependency on private `hui-generic-entity-row` styles,
  preventing the early-load failure reported in upstream issues #64 and #108.
- Make template subscription failures independent and cancel pending work when
  a row is disconnected.

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
- Add a Weather icon style dropdown for eligible `weather.*` entities, with
  Layered artwork and Standard icon choices.
- Retain the existing `native_icon` YAML setting for backward compatibility and
  hide the weather-specific choice when a custom icon or image takes priority.
- Prevent raw templates from appearing while rows initialise.
- Load each row's template subscriptions concurrently and safely clean up or
  replace subscriptions when configuration changes.
- Add a compact More options panel in the final order: entity toggle, native
  icon, icon appearance, visibility condition and image template.
- Add a separately collapsible Interactions panel inside More options.
- Keep Icon template and Icon colour template together below Secondary
  information template in the visual editor.
- Replace ambiguous active and visibility switches with controls that preserve
  the original automatic, active, inactive and conditional behavior.
- Correct boolean template handling, full-row hiding and double-tap detection.
- Keep editor controls and switch focus outlines within the available width.
- Modernise the TypeScript and Rollup build, remove known dependency
  vulnerabilities and add automated build and HACS validation.
- Add HACS installation and migration guidance, fictional interface mockups,
  configuration defaults and tested YAML examples.
