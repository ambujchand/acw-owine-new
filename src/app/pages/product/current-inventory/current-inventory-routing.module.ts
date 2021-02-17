import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentInventoryPage } from './current-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentInventoryPageRoutingModule {}
