import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEmployeePageRoutingModule } from './create-employee-routing.module';

import { CreateEmployeePage } from './create-employee.page';
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
    CreateEmployeePageRoutingModule
  ],
  declarations: [CreateEmployeePage]
})
export class CreateEmployeePageModule {}
