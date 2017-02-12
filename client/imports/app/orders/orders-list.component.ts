import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Orders } from '../../../../both/collections/orders.collection';
import { Order } from '../../../../both/models/order.model';

import template from './orders-list.component.html';


@Component({
    selector: 'orders-list',
    template
})

export class OrdersListComponent{

    orderslist : Observable<Order[]>
    ordertype: string;
    constructor(route: ActivatedRoute){
        this.ordertype = route.snapshot.params['type'];
        console.log(this.ordertype);
        this.orderslist = Orders.find({order_type:this.ordertype}).zone(); 
    }
}