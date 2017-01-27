import { Meteor } from 'meteor/meteor';

import { loadVendors } from './imports/fixtures/vendors';

Meteor.startup(() => {
  loadVendors();
});
