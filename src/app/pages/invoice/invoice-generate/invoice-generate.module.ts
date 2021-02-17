import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceGeneratePageRoutingModule } from './invoice-generate-routing.module';

import { InvoiceGeneratePage } from './invoice-generate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceGeneratePageRoutingModule
  ],
  declarations: [InvoiceGeneratePage]
})
export class InvoiceGeneratePageModule {}
