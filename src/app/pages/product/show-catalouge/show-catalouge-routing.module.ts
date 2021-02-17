import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowCatalougePage } from './show-catalouge.page';

const routes: Routes = [
  {
    path: '',
    component: ShowCatalougePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowCatalougePageRoutingModule {}
