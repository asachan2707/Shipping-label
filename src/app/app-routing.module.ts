import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingLabelMakerComponent } from './features/shipping-label-maker/shipping-label-maker.component';

const routes: Routes = [
    { path: '', redirectTo: 'shipping', pathMatch: 'full' },
    { path: 'shipping', component: ShippingLabelMakerComponent },
    { path: '**', component: ShippingLabelMakerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
