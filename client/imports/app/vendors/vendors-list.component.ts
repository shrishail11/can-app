import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import template from './vendors-list.component.html';

import { Vendors } from '../../../../both/collections/vendors.collection';
import { Vendor } from '../../../../both/models/vendor.model';

@Component({
  selector : 'vendor-list',
  template
})

export class VendorsListComponent{

    vendors: Observable<Vendor[]>;

    constructor(){
      this.vendors = Vendors.find({}).zone();

    }
}
