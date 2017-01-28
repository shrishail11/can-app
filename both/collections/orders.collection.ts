import {MongoObservable } from 'meteor-rxjs';
import { Order } from '../models/order.model';

export const Orders = new MongoObservable.Collection<Order>('orders');
