import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.page.html',
  styleUrls: ['./order-tracking.page.scss'],
})
export class OrderTrackingPage implements OnInit {
  orderDetails: any;
  order_id: any;
 constructor(private loading : AlertService , private router: Router,private orders: OrderService) { 
  if(this.router.getCurrentNavigation().extras.state){
    this.order_id = this.router.getCurrentNavigation().extras.state.order_id;
    console.log(this.order_id);
  }
 }

  ionViewWillEnter(){
    this.getOrderDetails();
  }

  getOrderDetails() {
    if (this.order_id!=undefined) {
    this.loading.present();
    let formData = new FormData();
    formData.append('order_id',this.order_id);
    this.orders.getOrderStatus(formData).subscribe(
    data => {
      console.log(data);
      this.orderDetails = data;
      this.loading.dismiss();
    }, onerror => {
    if (onerror.status==0) {
      this.loading.presentToastWarning('check your internet connection.');
      this.loading.dismiss();
    } else if(onerror.status==500) {
    this.loading.presentToastError('Server error.');
    this.loading.dismiss();
    }
    });
  }
  }

  ngOnInit() {
  }

}
