import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { VENDORS_DECLARATIONS } from './vendors';
import { VENDORS_HOME_DECLARATIONS } from './home';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...VENDORS_DECLARATIONS,
    ...VENDORS_HOME_DECLARATIONS
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule{}
