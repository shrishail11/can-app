import { Component,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MouseEvent } from "angular2-google-maps/core";

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

// Default center Palo Alto coordinates.
  centerLat: number = 71.4292;
  centerLng: number = -122.1381;
  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    
      this.paramsSub = this.route.params
        .map( params => params['vendorId']
        )
        .subscribe(vendorId => {
          this.vendorId = vendorId
          this.vendor = Vendors.findOne(this.vendorId);
        });
      
  }

  get lat(): number {
    return this.vendor && this.vendor.location.latitude;
    
  }
 
  get lng(): number {
    return this.vendor && this.vendor.location.longitude;
  }
 
  mapClicked($event: MouseEvent) {
    alert("Clicked");
    console.log( $event.coords.lat);
    console.log( $event.coords.lng);
    this.vendor.location.latitude = $event.coords.lat;
    this.vendor.location.longitude = $event.coords.lng;
    
  }
 

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  updateDetails(): void {
    
  }
}
