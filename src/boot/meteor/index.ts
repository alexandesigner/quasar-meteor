/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'meteor.bundle'; // Get meteor bundler in /node_modules
import { boot } from 'quasar/wrappers';

// Core
// @ts-ignore
import { Meteor } from 'meteor/meteor';

// Packages
// @ts-ignore
import { Accounts } from 'meteor/accounts-base';
// @ts-ignore
import { Tracker } from 'meteor/tracker';

// @ts-ignore
export default boot(({ app }) => {
  app.config.globalProperties.$meteor = Meteor;
  app.config.globalProperties.$meteor.tracker = Tracker;
  app.config.globalProperties.$meteor.$accounts = Accounts;
});
