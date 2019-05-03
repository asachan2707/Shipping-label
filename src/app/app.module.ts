import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShippingLabelMakerModule } from './features/shipping-label-maker/shipping-label-maker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, { initialState: {} }),
    EffectsModule.forRoot([]),
    ShippingLabelMakerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
