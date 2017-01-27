import { Address } from './address.model';

//Vendor extends the Address Model
export interface Vendor extends Address,Location {
  name: string;
  mobile: number;
}
