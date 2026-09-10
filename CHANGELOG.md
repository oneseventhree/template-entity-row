# Changelog

## 2.0.0-beta.10

- Move Show entity toggle to the top of More options, above the native icon
  control.
- Move the less frequently used Image template into More options after Icon
  appearance.

## 2.0.0-beta.9

- Put Interactions in its own collapsed expansion panel inside More options so
  action controls remain hidden until explicitly opened.

## 2.0.0-beta.8

- Replace the manual Show row switch with the original optional visibility
  condition template. An empty condition always shows the row.
- Move native icon, icon appearance, visibility, entity toggle and all
  interaction controls into one More options section that is collapsed by
  default.

## 2.0.0-beta.7

- Make the visibility control default to on so its displayed state matches the
  original behavior of an omitted `condition`.
- Replace the inaccurate active switch with Automatic, Active and Inactive
  choices because the original option has three distinct states.
- Clarify the remaining boolean editor labels: Show row, Show entity toggle
  and Use native Home Assistant icon.
- Preserve template editors and template-specific labels when active,
  condition or toggle contain Jinja.

## 2.0.0-beta.6

- Keep boolean editor controls within the available editor width so active
  switches and focus outlines are not clipped at the right edge.
- Enable native Home Assistant icons by default and place the control directly
  below the icon colour template so the editor follows the icon configuration
  flow.

## 2.0.0-beta.5

- Render weather entities with Home Assistant's layered native weather artwork
  when `native_icon` is enabled.
- Use Home Assistant\'s template editor for all template fields.
- Move tap, hold and double-tap actions into a compact Interactions section
  that is collapsed by default.

## 2.0.0-beta.4

- Fix `native_icon` so it uses Home Assistant's state-aware icon together with
  the standard entity-row state colouring.

## 2.0.0-beta.3

- Add a visual dashboard editor through `getConfigElement()`.
- Fix templated custom icons, including custom icon sets such as `phu:`.
- Add optional native Home Assistant icon rendering with `native_icon`.
- Re-subscribe templates safely when configuration changes and clean them up when a row is removed.
- Fix double-click action detection and boolean template handling.
- Hide the complete row when `condition` evaluates to false.
- Modernize the TypeScript and Rollup build.
- Add an automated GitHub build check.
- Add HACS repository validation.
- Hide the legacy default branch from HACS version selection.
- Prevent raw Jinja templates from appearing while rows initialize.
- Subscribe to each row's templates concurrently to reduce dashboard load time.
