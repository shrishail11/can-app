import { Vendors } from '../../../both/collections/vendors.collection';
import { Vendor } from '../../../both/models/vendor.model';

export function loadVendors() {
  if(Vendors.find().cursor.count() === 0){
    const vendors: Vendor[] = [{
      name: 'test1',
      mobile: 2235655,
      a_line_1: 'test1',
      a_line_2: 'test1',
      a_line_3: 'test1',
      a_street: 'test1',
      a_city: 'test1',
      a_state: 'test1',
      a_country: 'test1',
      a_zip: 11111,
      latt : '12121',
      long : '232323'
    },
    {
      name: 'test2',
      mobile: 256458,
      a_line_1: 'test1',
      a_line_2: 'test1',
      a_line_3: 'test1',
      a_street: 'test1',
      a_city: 'test1',
      a_state: 'test1',
      a_country: 'test1',
      a_zip: 11111,
      latt : '12121',
      long : '232323'
    }];

    vendors.forEach((vendor: Vendor) => Vendors.insert(vendor));
  }

}
