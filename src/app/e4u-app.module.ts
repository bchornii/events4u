import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { E4uAppComponent } from './e4u-app.component';

@NgModule({
  declarations: [
    E4uAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [E4uAppComponent]
})
export class E4uAppModule { }
