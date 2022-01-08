<img src="https://cdn.rawgit.com/alexandesigner/quasar-meteor/3edd3fb5/src/assets/quasar-meteor-logo-full.svg" width="300" />

> A [Quasar Framework](https://github.com/quasarframework/quasar) + [Meteor](https://github.com/meteor/meteor) starter kit

<a href="https://meteor.com/"><img src="https://img.shields.io/badge/meteor-1.8.1-green"/></a>
<a href="https://quasar.dev/"><img src="https://img.shields.io/badge/quasar-2.4.3-blue"/></a>

## Get Started

``` bash
# Install dependencies
npm install

# Install meteor client bundler
npm run generate:bundler
```

#####  This will generate a ``meteor.bundle.js`` file in ``/node_modules``, make sure it really exists before running the application.
## Run API in Meteor

``` bash
# Run application at localhost:4000
npm run api
```

## Commands to run/build Application

```bash
# Serve with hot reload at localhost:3000
npm run dev

# Build for production with minification
npm run build

# Lint code
npm run lint
```

##### NOTE: There are two ways to integrate Quasar with the Meteor. One is using Quasar-CLI and another using Meteor-CLI, this repository is using Quasar's integral base with a Meteor API using [Meteor Client Bundler](https://github.com/Urigo/meteor-client-bundler)
