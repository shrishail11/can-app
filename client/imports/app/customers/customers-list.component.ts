import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Customers } from '../../../../both/collections/customers.collection';
import { Customer } from '../../../../both/models/customer.model';

import { Orders } from '../../../../both/collections/orders.collection';
import { Order } from '../../../../both/models/order.model';


import template from './customers-list.component.html';

@Component({
    selector: 'cust-list',
    template
})

export class CustomersListComponent{

    custlist: Observable<Customer[]>;
    custlistOrder: Observable<Order[]>;
    constructor(){

        this.custlist = Customers.find({}).zone();
        
       // this.custlistOrder = Orders.distinct({"vendor.id": "8w2SxWmW7rZ8vmZMv"});
        var custArray = Orders.find({"vendor.id": "8w2SxWmW7rZ8vmZMv"}).fetch();
        

    }
}