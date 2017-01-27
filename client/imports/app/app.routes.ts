import { Route } from '@angular/router';
import { VendorsListComponent } from './vendors/vendors-list.component';
import { VendorDetailsComponent } from './vendors/vendor-details.component';
import { VendorHomeComponent } from './home/vendor-home.component';
export const routes: Route[]=[

  {
    path: '',
    component: VendorHomeComponent
  },
  {
    path: 'vendor/:vendorId',
    component: VendorDetailsComponent
  }
];
