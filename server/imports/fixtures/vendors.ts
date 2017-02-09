import { Vendors } from '../../../both/collections/vendors.collection';
import { Vendor } from '../../../both/models/vendor.model';

export function loadVendors() {
  if(Vendors.find().cursor.count() === 0){
    const vendors: Vendor[] = [{
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
  }

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
  }

    }];

    vendors.forEach((vendor: Vendor) => Vendors.insert(vendor));
  }

}
