import { Orders } from '../../../both/collections/orders.collection';
import { Order } from '../../../both/models/order.model';

export function loadOrders(){

    if(Orders.find().cursor.count() === 0) {
       const orders: Order[] = [{
           brand: "Bislery",
            size: 5,
            quantity: 2,
            order_date: 12122015,
            deliver_by: 12122015,
            payment_mode: "cash",
            status: "placed",
            delivered: false,
            delivered_on: 20122015,
            payment_received: false
     
    },
    {
       brand: "Kinley",
            size: 5,
            quantity: 2,
            order_date: 12122015,
            deliver_by: 12122015,
            payment_mode: "cash",
            status: "placed",
            delivered: false,
            delivered_on: 20122015,
            payment_received: false
    }];

    orders.forEach((order: Order) => Orders.insert(order));
  }
}