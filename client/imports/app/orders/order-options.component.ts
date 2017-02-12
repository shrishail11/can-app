import { Component } from '@angular/core';

import template from './order-options.component.html';

@Component({
    selector: 'order-options',
    template
})

export class OrderOptionsComponent{

    options: [{
        name: string;
        link: string;
        type: string;
    }]
    
    constructor(){
        this.options=[{
         name:"Fulfilled",
         link:"orders",
         type:"fulfilled"   
        },
        {
         name: "New",
         link:"orders",
         type: "new"
        },
        {
         name: "Cancelled",
         link:"orders",
         type: "cancelled"
        }];
    }

}