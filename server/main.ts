import { Meteor } from 'meteor/meteor';

import { loadVendors } from './imports/fixtures/vendors';
import { loadHomeItems } from './imports/fixtures/vendorhome';
import { loadOrders } from './imports/fixtures/orders';

Meteor.startup(() => {
  loadHomeItems();
  loadVendors();
  loadOrders();
});
