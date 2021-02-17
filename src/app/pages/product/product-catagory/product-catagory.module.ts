import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCatagoryPageRoutingModule } from './product-catagory-routing.module';

import { ProductCatagoryPage } from './product-catagory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCatagoryPageRoutingModule
  ],
  declarations: [ProductCatagoryPage]
})
export class ProductCatagoryPageModule {}
