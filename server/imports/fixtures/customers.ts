import { Customers } from '../../../both/collections/customers.collection';
import { Customer } from '../../../both/models/customer.model';

export function loadCustomers() {
  if(Customers.find().cursor.count() === 0){
    const customers: Customer[] = [{
      name: "tes",
      address: {
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
  },
  orders: [
    {
       order_id: "23adf",
      vendor_id: "23adf",
    }
  ]

    },{
      name: "tes",
      address:  {
          street: "string",
        city: "string",
        state: "string",
        country: "string",
        zip: 21212
      },phone: {
          phone: 2323,
          mobile: 2323
        },
  location: {
      latitude : 22.2,
      longitude : 23.23
  },
  orders: [
    {
       order_id: "23adf",
       vendor_id: "23adf",
    }
  ]

    }];

    customers.forEach((customer: Customer) => Customers.insert(customer));
  }

}
