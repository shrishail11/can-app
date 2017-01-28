import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HomeItems } from '../../../../both/collections/homeitems.collection';
import { HomeItem } from '../../../../both/models/homeitem.model';


import template from './vendor-home.component.html';

@Component({
  selector: 'vendor-home',
  template
})

export class VendorHomeComponent{

  public homeitemname : string;
  public homeitemlink: string;
  homeItems: Observable<HomeItem[]>;

  constructor(){
    this.homeItems = HomeItems.find({}).zone();
    this.homeitemname = '/vendor';
    this.homeitemlink = '/vendor';
  }
}
