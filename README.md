# template-entity-row

[![Build](https://github.com/oneseventhree/template-entity-row/actions/workflows/build.yml/badge.svg?branch=development)](https://github.com/oneseventhree/template-entity-row/actions/workflows/build.yml)
[![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://www.hacs.xyz/docs/faq/custom_repositories/)

Display Jinja templates in a Home Assistant Entities card row.

This is a maintained fork of Thomas Lovén's original
[`lovelace-template-entity-row`](https://github.com/thomasloven/lovelace-template-entity-row),
distributed under the original MIT licence.

## Features

- Templates for the entity, icon, name, state, secondary information, image,
  colour, active state, visibility, toggle and actions
- Visual editor inside the Entities card editor
- Standard Home Assistant action editor for non-templated actions
- Support for native Home Assistant icons, including coloured weather icons
- Automatic cleanup of template subscriptions
- Existing `custom:template-entity-row` YAML remains compatible

## Installation

Until this fork is added to the default HACS repositories, add
`https://github.com/oneseventhree/template-entity-row` as a custom repository
with the category **Dashboard**.

Do not load this fork and the original project at the same time. Both register
the same custom element.

For manual installation, download `template-entity-row.js`, place it in your
Home Assistant `www` directory and add it as a JavaScript module resource:

```yaml
resources:
  - url: /local/template-entity-row.js
    type: module
```

## Usage

`template-entity-row` is an entity row and must be placed inside an Entities
card.

```yaml
type: entities
entities:
  - type: custom:template-entity-row
    entity: binary_sensor.sliding_door_sensor_contact
    state: >-
      {{ 'Open' if is_state(config.entity, 'on') else 'Closed' }}
    icon: >-
      {{ 'phu:sliding-window-door-open' if is_state(config.entity, 'on') else 'phu:sliding-window-door-close' }}
```

## Visual editor

Open an Entities card in Home Assistant's visual editor and edit an existing
`custom:template-entity-row` row. Jinja fields are shown as multiline inputs.
Standard action objects use Home Assistant's action editor. Templated actions
remain editable as text.

The editor preserves configuration properties it does not recognise, so
switching between the visual and YAML editors does not discard advanced
settings.

## Options

| Option | Description |
| --- | --- |
| `entity` | Entity used for default values and actions |
| `icon` | Icon or icon template |
| `name` | Name or name template |
| `state` | State text or state template |
| `secondary` | Secondary text or template |
| `image` | Entity-picture URL or template |
| `color` | Icon colour or template |
| `active` | Boolean or template controlling active icon state |
| `condition` | Boolean or template controlling row visibility |
| `toggle` | Boolean or template that replaces the state with a toggle |
| `native_icon` | Use Home Assistant's native state icon when `icon` and `image` are unset |
| `tap_action` | Standard action object or templated action configuration |
| `hold_action` | Standard action object or templated action configuration |
| `double_tap_action` | Standard action object or templated action configuration |

All display options accept Home Assistant Jinja templates. Templates receive:

- `config`: the original row configuration
- `user`: the current user's name
- `browser`: the browser-mod browser ID when available
- `hash`: the current URL hash

## Native icons

Set `native_icon: true` without `icon` or `image` to use Home Assistant's
native state-aware icon renderer:

```yaml
type: custom:template-entity-row
entity: weather.home
native_icon: true
```

## Actions

Standard Home Assistant actions work normally:

```yaml
type: custom:template-entity-row
entity: light.bed_light
tap_action:
  action: toggle
hold_action:
  action: more-info
double_tap_action:
  action: more-info
```

Templated actions must render a valid action configuration:

```yaml
type: custom:template-entity-row
entity: input_boolean.test
tap_action: >-
  {'action': '{{ "toggle" if is_state(config.entity, "on") else "more-info" }}'}
```

## Development

```bash
npm install
npm run check
npm run build
```

The production bundle is written to `template-entity-row.js`.
