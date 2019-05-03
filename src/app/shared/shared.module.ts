import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardModule } from './component/wizard/wizard.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WizardModule
  ],
  exports: [
    WizardModule
  ]
})
export class SharedModule { }
