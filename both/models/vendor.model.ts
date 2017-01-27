import { Address } from './address.model';

//Vendor extends the Address Model
export interface Vendor extends Address{
  name: string;
  mobile: number;
}
