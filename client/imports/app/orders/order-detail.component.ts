import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Orders } from '../../../../both/collections/orders.collection';
import { Order } from '../../../../both/models/order.model';

import template from './order-detail.component.html';

@Component({
    selector: 'order-details',
    template
})

export class OrderDetailComponent{

    order: Order;
    orderId: string;
    paramsSub: Subscription;
    orderedit: boolean;

    constructor(private route: ActivatedRoute){
        this.paramsSub = this.route.params
        .map(params => params['orderId'])
        .subscribe(orderId =>{
            this.orderId = orderId
            this.order = Orders.findOne(this.orderId)
        });

        if(this.order.order_type == 'new')
            this.orderedit = true;
        else
            this.orderedit = false;
        
    }

}