import {Meteor} from 'meteor/meteor';

import { Orders } from '../collections/orders.collection';

Meteor.methods({
    updateOrder: function( orderId:  String ,
        ordter_type:  String ,
        delivery_status: String ,
        actual_delivery_date: String ){

        const order = Orders.findOne({orderId});

        Orders.update(orderId,{ $set : {"order_type": ordter_type ,
                                        "status.delivery_status": delivery_status ,
                                       "audit.actual_delivery_date": actual_delivery_date }});
            
    }
});


