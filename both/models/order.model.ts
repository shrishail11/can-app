import { BaseCollectionObject } from './baseCollectionObject.model';
import { Address } from './address.model';
import { Phone } from './phone.model';
import { Location } from './location.model';
export interface Order extends BaseCollectionObject{
    order_id: number;
    order_type: string;
    customer: {
        id: string;
        name: string;
        phone: Phone;
        address: Address;
        location: Location;
    }
    vendor: {
        id: string;
        name: string;
        phone: Phone;
        address: Address;
        location: Location;
    }

    order_details: {
        brand: string;
        capacity: number;
        quantity: number;
    }
    payment: {
        payment_mode: string;
        total_due: number;
    }
    status: {
        payment_status: string; //Pending,Received
        delivery_status: string; //
        order_status: string; //Placed,Cancelled,Fulfilled,Pending Delivery, Pending Payment
    }
    audit: {
        order_date: number;
        delivery_due: number;
        actual_delivery_date: number;
        delivered_by:string; //person name
    }
 }