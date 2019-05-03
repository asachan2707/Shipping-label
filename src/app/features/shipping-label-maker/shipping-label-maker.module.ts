import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShippingLabelMakerComponent } from './shipping-label-maker.component';

import { WizardModule } from '../../shared/component/wizard/wizard.module';

const routes: Routes = [
  { path: '', redirectTo: 'shipping/shipping-label', pathMatch: 'full' },
  { path: 'shipping-label', component: ShippingLabelMakerComponent },
  { path: '**', pathMatch: 'full', component: ShippingLabelMakerComponent }
];

@NgModule({
  declarations: [
    ShippingLabelMakerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WizardModule
  ],
  exports: [
    RouterModule
]
})
export class ShippingLabelMakerModule { }
