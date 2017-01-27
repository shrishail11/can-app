import { MongoObservable } from 'meteor-rxjs';
import { HomeItem } from '../models/homeitem.model';

export const HomeItems = new MongoObservable.Collection<HomeItem>('home_items');
