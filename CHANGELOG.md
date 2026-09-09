# Changelog

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
