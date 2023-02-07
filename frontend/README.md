# Liquidium

[![GitHub license](https://img.shields.io/github/license/temmiland/liquidium)](https://github.com/temmiland/liquidium/blob/main/LICENSE.md)
[![GitHub issues](https://img.shields.io/github/issues/temmiland/liquidium)](https://github.com/temmiland/liquidium/issues)
[![GitHub forks](https://img.shields.io/github/forks/temmiland/liquidium)](https://github.com/temmiland/liquidium/network)
[![GitHub stars](https://img.shields.io/github/stars/temmiland/liquidium)](https://github.com/temmiland/liquidium/stargazers)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

Liquidium is a powerful wiki tool written in JavaScript with ReactJS with a Spring Backend written in Java.

## Requirements

### Production

* a `x86_64` system
* `Docker` (tested 20.10.18)
* `docker-compose` (tested 2.10.2)

### Development

* `Node` 18 or newer
* configured `oidc` docker instance for authentication (see: TODO)

## Development

### Setup

Start a development server with MirageJS and authentication skip:

```bash
npm install
npm run dev
```

Start a development server with real backend api and authentication service:

```bash
npm install
cp .env.sample .env
nano .env
npm start
```

### Storybook

#### Development

```bash
npm install
npm run storybook
```

#### Production

```bash
npm install
cd dist/storybook
```

### MirageJS

TODO

### cypressJS

TODO

## Known issues

The Liquidium project tracks its issues [here](https://github.com/temmiland/liquidium/issues).

## Changelog

See changelog.md for more information.

## License

Liquidium is licensed under MIT license. See license.md file for more info.
