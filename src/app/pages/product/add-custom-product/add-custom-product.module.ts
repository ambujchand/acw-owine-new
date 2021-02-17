import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCustomProductPageRoutingModule } from './add-custom-product-routing.module';

import { AddCustomProductPage } from './add-custom-product.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddCustomProductPageRoutingModule
  ],
  declarations: [AddCustomProductPage]
})
export class AddCustomProductPageModule {}
