<img src="https://cdn.rawgit.com/alexandesigner/quasar-meteor/3edd3fb5/src/assets/quasar-meteor-logo-full.svg" width="300" />

> A [Quasar Framework](https://github.com/quasarframework/quasar) + [Meteor](https://github.com/meteor/meteor) starter kit

<a href="https://meteor.com/"><img src="https://img.shields.io/badge/meteor-1.8.0.1-green.svg"/></a>
<a href="https://quasar-framework.org"><img src="https://img.shields.io/badge/quasar-1.0.beta.9-blue.svg"/></a>

## Commands to start, lint and build

``` bash
# install dependencies
$ npm install

# install meteor client bundler
$ npm run bundler

# before running the application, make sure that the meteor server is running for this
$ npm run api

# lint code
$ npm run lint
```

These commands require you to install the [Quasar CLI](https://github.com/quasarframework/quasar-cli)

```bash
# serve with hot reload at localhost:8081
$ npm run dev

# build for production with minification
$ npm run build
```

##### NOTE: There are two ways to integrate Quasar with the Meteor. One is using Quasar-CLI and another using Meteor-CLI, this repository is using Quasar's integral base with a Meteor API using [Meteor Client Bundler](https://github.com/Urigo/meteor-client-bundler)
