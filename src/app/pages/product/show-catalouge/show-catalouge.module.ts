import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowCatalougePageRoutingModule } from './show-catalouge-routing.module';

import { ShowCatalougePage } from './show-catalouge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowCatalougePageRoutingModule
  ],
  declarations: [ShowCatalougePage]
})
export class ShowCatalougePageModule {}
