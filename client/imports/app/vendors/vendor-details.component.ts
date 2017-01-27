import { Component,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';

import { Vendors } from '../../../../both/collections/vendors.collection';
import { Vendor } from '../../../../both/models/vendor.model';
import template from './vendor-details.component.html';

@Component({
  selector : 'vendor-details',
  template
})

export class VendorDetailsComponent implements OnInit,OnDestroy{
  vendorId: string;
  paramsSub: Subscription;
  vendor: Vendor;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(){
      this.paramsSub = this.route.params
        .map( params => params['vendorId'])
        .subscribe(vendorId => {
          this.vendorId = vendorId
          this.vendor = Vendors.findOne(this.vendorId);
        });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
