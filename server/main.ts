import { Meteor } from 'meteor/meteor';

import { loadVendors } from './imports/fixtures/vendors';
import { loadHomeItems } from './imports/fixtures/vendorhome';

Meteor.startup(() => {
  loadHomeItems();
  loadVendors();
});
