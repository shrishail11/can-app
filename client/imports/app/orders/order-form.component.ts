import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';


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

        console.log(this.order);

        this.editForm = this.formBuilder.group({
                    order_id: [this.order.order_id],
                        name: [this.order.customer.name],
                    phone: [this.order.customer.phone],
                    address: [this.order.customer.phone],
                // location: Location;
                    brand: [this.order.order_details.brand],
                    capacity: [this.order.order_details.capacity],
                    quantity: [this.order.order_details.quantity],
                payment_mode: [this.order.payment.payment_mode],
                total_due: [this.order.payment.total_due],
                    
            payment_status: [this.order.status.payment_status],
            delivery_status: [this.order.status.delivery_status],
                order_status: [this.order.status.order_status],
                
                order_date: [this.order.audit.order_date],
                delivery_due: [this.order.audit.delivery_due],
        actual_delivery_date: [this.order.audit.actual_delivery_date],
                delivered_by: [this.order.audit.delivered_by],
                
        });

    }

    updateOrder(): void{
        if(this.editForm.valid){
         
            //Is order delivered ?
            var order_type = this.order.order_type;
            var del_status = <String>this.editForm.controls['delivery_status'].value;
            
            if(del_status === "fulfilled")
            {
                order_type = "fulfilled";
            }

          

        const delivery_status =  <String> this.editForm.controls['delivery_status'].value ;
        const actual_delivery_date = <String> this.editForm.controls['actual_delivery_date'].value;

        MeteorObservable.call('updateOrder',  this.order._id,  order_type,delivery_status,actual_delivery_date).subscribe(() => {
        alert('Update successfully.');
        }, (error) => {
        alert(`Failed to update due to ${error}`);
         });
    
        // this.editForm.reset();
        }
    }
}

