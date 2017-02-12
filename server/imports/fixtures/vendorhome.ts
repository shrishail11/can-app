import { HomeItems } from '../../../both/collections/homeitems.collection';
import { HomeItem } from '../../../both/models/homeitem.model';

export function loadHomeItems(){
  if(HomeItems.find().cursor.count() === 0){
    const homeItems: HomeItem[] = [{
      name: 'My Details',
      route_name: 'vendor'
    },{
      name: 'My Orders',
      route_name: 'orders'
    },{
      name: 'My Customers',
      route_name: 'customers'
    }];

    homeItems.forEach((homeItem: HomeItem) => HomeItems.insert(homeItem));
    
  }

}
