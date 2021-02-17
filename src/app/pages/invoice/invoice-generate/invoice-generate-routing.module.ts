import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceGeneratePage } from './invoice-generate.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceGeneratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceGeneratePageRoutingModule {}
