import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    NgCircleProgressModule.forRoot({
      "backgroundPadding": 7,
      "radius": 30,
      "space": -8,
      "outerStrokeWidth": 8,
      "outerStrokeColor": "#0ea900",
      "innerStrokeColor": "#b7e4b3",
      "innerStrokeWidth": 6,
      "title": ["progress"],
       "titleFontSize": '20',
       "subtitleFontSize": '20',
      "animateTitle": false,
      "animationDuration": 1000,
      "showTitle": false,
      "subtitleColor": "#000000",
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "responsive": false,
    })
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
