import { BaseCollectionObject } from './baseCollectionObject.model';

export interface Order extends BaseCollectionObject{
    brand: string,
    size: number,
    quantity: number,
    order_date: number,
    deliver_by: number,
    payment_mode: string,
    status: string,
    delivered: boolean,
    delivered_on: number,
    payment_received: boolean

}