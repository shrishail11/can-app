import { HomeItems } from '../../../both/collections/homeitems.collection';
import { HomeItem } from '../../../both/models/homeitem.model';

export function loadHomeItems(){
  if(HomeItems.find().cursor.count() === 0){
    const homeItems: HomeItem[] = [{
      name: 'My Details',
      route_name: 'vendor'
    }];

    homeItems.forEach((homeItem: HomeItem) => HomeItems.insert(homeItem));

  }

}
