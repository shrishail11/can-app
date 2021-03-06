import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { VENDORS_DECLARATIONS } from './vendors';
import { VENDORS_HOME_DECLARATIONS } from './home';
import { ORDERS_DECLARATIONS } from './orders';
import { CUSTOMERS_DECLARATIONS } from './customers';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCwCPMpuvSZcTM_GxGvXqKIk4wV_C3D2T4'
    })
  ],
  declarations: [
    AppComponent,
    ...VENDORS_DECLARATIONS,
    ...VENDORS_HOME_DECLARATIONS,
    ...ORDERS_DECLARATIONS,
    ...CUSTOMERS_DECLARATIONS
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule{}
