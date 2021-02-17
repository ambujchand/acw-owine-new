import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCatagoryPage } from './product-catagory.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCatagoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCatagoryPageRoutingModule {}
