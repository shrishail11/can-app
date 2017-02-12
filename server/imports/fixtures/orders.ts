import { Orders } from '../../../both/collections/orders.collection';
import { Order } from '../../../both/models/order.model';

export function loadOrders(){

    if(Orders.find().cursor.count() === 0) {
       const orders: Order[] = [
         {
            order_id: 232,
            order_type: "new",
            customer: {
                name: "Raj Aryan",
                address:  {
                      street: "string",
                      city: "string",
                      state: "string",
                      country: "string",
                      zip: 21212
                  },
                phone: {
                      phone: 2323,
                      mobile: 2323
                    },
              location: {
                  latitude : 22.2,
                  longitude : 23.23
              }
            },
            vendor: {
              id: "8w2SxWmW7rZ8vmZMv",
              name: "TEST VENDOR"
              },
             order_details: { 
                brand: "Bislery",
                capacity: 2,
                quantity: 1
            },
            payment:{
                payment_mode: "COD",
                total_due: 32
            },
            status:{
                payment_status: "Pending",
                delivery_status: "Pending",
                order_status: "Placed"
            },
            audit:{
                order_date: 223,
                delivery_due: 232,
                actual_delivery_date: 223,
                delivered_by:"rdafd"
                
            },
          },
          {
          
            order_id: 232,
            order_type: "fulfilled",
            customer: {
                id: "8w2SxWmW7rZ8vmZMv",
                name: "Raj Aryan",
                address:  {
                      street: "string",
                      city: "string",
                      state: "string",
                      country: "string",
                      zip: 21212
                  },
                phone: {
                      phone: 2323,
                      mobile: 2323
                    },
              location: {
                  latitude : 22.2,
                  longitude : 23.23
              }
            },
            vendor: {
               id: "8w2SxWmW7rZ8vmZMv",
              name: "TEST VENDOR",
               address:  {
                      street: "string",
                      city: "string",
                      state: "string",
                      country: "string",
                      zip: 21212
                  },
                phone: {
                      phone: 2323,
                      mobile: 2323
                    },
              location: {
                  latitude : 22.2,
                  longitude : 23.23
              }
              },
             order_details: { 
                brand: "Bislery",
                capacity: 2,
                quantity: 1
            },
            payment:{
                payment_mode: "COD",
                total_due: 32
            },
            status:{
                payment_status: "Pending",
                delivery_status: "Pending",
                order_status: "Placed"
            },
            audit:{
                order_date: 223,
                delivery_due: 232,
                actual_delivery_date: 223,
                delivered_by:"rdafd"
                
            },
          },
          {
          
            order_id: 2434332,
            order_type: "new",
            customer: {
                 id: "8w2SxWmW7rZ8vmZMv",
                name: "Raj Aryan",
                address:  {
                      street: "string",
                      city: "string",
                      state: "string",
                      country: "string",
                      zip: 21212
                  },
                phone: {
                      phone: 2323,
                      mobile: 2323
                    },
              location: {
                  latitude : 22.2,
                  longitude : 23.23
              }
            },
            vendor: {
               id: "8w2SxWmW7rZ8vmZMv",
              name: "TEST VENDOR",
               address:  {
                      street: "string",
                      city: "string",
                      state: "string",
                      country: "string",
                      zip: 21212
                  },
                phone: {
                      phone: 2323,
                      mobile: 2323
                    },
              location: {
                  latitude : 22.2,
                  longitude : 23.23
              }
              },
             order_details: { 
                brand: "Bislery",
                capacity: 2,
                quantity: 1
            },
            payment:{
                payment_mode: "COD",
                total_due: 32
            },
            status:{
                payment_status: "Pending",
                delivery_status: "Pending",
                order_status: "Placed"
            },
            audit:{
                order_date: 223,
                delivery_due: 232,
                actual_delivery_date: 223,
                delivered_by:"rdafd"
                
            },
    }];

    orders.forEach((order: Order) => Orders.insert(order));
  }
}