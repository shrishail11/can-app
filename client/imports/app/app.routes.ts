import { Route } from '@angular/router';
import { VendorsListComponent } from './vendors/vendors-list.component';
import { VendorDetailsComponent } from './vendors/vendor-details.component';
import { VendorHomeComponent } from './home/vendor-home.component';
import { OrdersListComponent } from './orders/orders-list.component';
import { VendorFormComponent } from './vendors/vendor-form.component';
import { OrderEditFormComponent } from './orders/order-form.component';
import { OrderDetailComponent } from './orders/order-detail.component';
import { CustomersListComponent } from './customers/customers-list.component';
import { OrderOptionsComponent } from './orders/order-options.component';

export const routes: Route[]=[

  {
    path: '',
    component: VendorHomeComponent
  },
  {
    path: 'vendor/:vendorId',
    component: VendorDetailsComponent
  },
  {
    path: 'update/:vendorId',
    component: VendorFormComponent
  },
  {
    path: 'orderopts/:vendorId',
    component: OrderOptionsComponent
  },
  {
    path: 'orders/:vendorId/:type',
    component: OrdersListComponent
  }, 
  {
    path: 'vieworder/:orderId',
    component: OrderDetailComponent
  },
  {
    path: 'editorder/:orderId',
    component: OrderEditFormComponent
  },
  {
    path: 'customers/:vendorId',
    component: CustomersListComponent
  }
];
