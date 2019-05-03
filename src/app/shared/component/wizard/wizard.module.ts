import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { WizardComponent } from './wizard.component';

@NgModule({
  declarations: [
    WizardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule
  ],
  exports: [
    WizardComponent
  ]
})
export class WizardModule { }
