import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCustomProductPage } from './add-custom-product.page';

const routes: Routes = [
  {
    path: '',
    component: AddCustomProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCustomProductPageRoutingModule {}
