# Changelog

## 2.0.0-beta.1

- Add a visual dashboard editor through `getConfigElement()`.
- Fix templated custom icons, including custom icon sets such as `phu:`.
- Add optional native Home Assistant icon rendering with `native_icon`.
- Re-subscribe templates safely when configuration changes and clean them up when a row is removed.
- Fix double-click action detection and boolean template handling.
- Hide the complete row when `condition` evaluates to false.
- Modernize the TypeScript and Rollup build.
- Add an automated GitHub build check.
