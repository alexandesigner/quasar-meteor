import 'meteor.bundle' // Get meteor bundler in /node_modules

// Core
import { Meteor } from 'meteor/meteor'

// Packages
import { Accounts } from 'meteor/accounts-base'
import { Tracker } from 'meteor/tracker'

export default async ({ app, router, Vue }) => {
  Vue.prototype.$meteor = Meteor
  Vue.prototype.$meteor.tracker = Tracker
  Vue.prototype.$meteor.accounts = Accounts
}
