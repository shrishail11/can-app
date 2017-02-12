import { Address } from './address.model';
import { Phone } from './phone.model';
import { Location } from './location.model';
import { BaseCollectionObject } from './baseCollectionObject.model';

//Vendor extends the Address Model
export interface Customer {
  name: string;
  address: Address;
  phone: Phone;
  location: Location;
  orders:  [
    {
      order_id: string,
      vendor_id: string
     }
  ]
  
}
