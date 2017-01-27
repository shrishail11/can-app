//import { Address } from './address.model';
//import { Location } from './location.model';
import { BaseCollectionObject } from './baseCollectionObject.model';

//Vendor extends the Address Model
export interface Vendor extends BaseCollectionObject{
  name: string;
  mobile: number;
}
