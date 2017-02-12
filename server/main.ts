import { Meteor } from 'meteor/meteor';

import { loadVendors } from './imports/fixtures/vendors';
import { loadHomeItems } from './imports/fixtures/vendorhome';
import { loadOrders } from './imports/fixtures/orders';
import { loadCustomers } from './imports/fixtures/customers';

import '../both/methods/update-order.method';

Meteor.startup(() => {
  loadHomeItems();
  loadVendors();
  loadOrders();
  loadCustomers();
});
