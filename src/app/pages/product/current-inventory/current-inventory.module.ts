import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentInventoryPageRoutingModule } from './current-inventory-routing.module';

import { CurrentInventoryPage } from './current-inventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentInventoryPageRoutingModule
  ],
  declarations: [CurrentInventoryPage]
})
export class CurrentInventoryPageModule {}
