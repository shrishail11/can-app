import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Orders } from '../../../../both/collections/orders.collection';
import { Order } from '../../../../both/models/order.model';

import template from './order-form.component.html';

@Component({
    selector: 'order-edit',
    template
})

export class OrderEditFormComponent{

    editForm: FormGroup;
    orderId: string;
    paramsSub: Subscription; 
    order: Order;

   // order: Order;
    constructor(
        private formBuilder: FormBuilder, 
        private roter: ActivatedRoute ){
        //Get the order in context
    

    }

    ngOnInit(){
        this.paramsSub = this.roter.params
        .map(params => params['orderId'])
        .subscribe(orderId => {
            this.orderId = orderId
            this.order = Orders.findOne(this.orderId)
        });

        this.editForm = this.formBuilder.group({
           brand: [this.order.brand],
           /*  size: number,
            quantity: number,
            order_date: number,
            deliver_by: number,
            payment_mode: string, */
            status: [this.order.status],
            delivered: [this.order.delivered],
            delivered_on: [this.order.delivered_on],
            payment_received: [this.order.payment_received]

        });

    }

    updateOrder(): void{
        if(this.editForm.valid){
            Orders.update(this.order._id,this.editForm.value);
            this.editForm.reset();
        }
    }
}