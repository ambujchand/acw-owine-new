import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeListPageRoutingModule } from './employee-list-routing.module';

import { EmployeeListPage } from './employee-list.page';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeListPageRoutingModule
  ],
  declarations: [EmployeeListPage]
})
export class EmployeeListPageModule {}
