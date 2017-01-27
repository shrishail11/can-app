import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Vendors } from '../../../both/collections/vendors.collection';
import { Vendor } from '../../../both/models/vendor.model';

import template from './app.component.html';

@Component({
  selector : 'app',
  template
})

export class AppComponent{

  vendors: Observable<Vendor[]>;

  constructor(){
    this.vendors = Vendors.find({}).zone();

  }

}
