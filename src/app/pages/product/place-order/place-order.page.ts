import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {
  
  placeOrderList: any;
  totalAmount: string;
  placeOrderDetails: any[];

  constructor(private loading : AlertService,private formBuilder: FormBuilder,private router: Router, private product : ProductService) { 
    if(this.router.getCurrentNavigation().extras.state){
      this.placeOrderList =  this.router.getCurrentNavigation().extras.state.placeOrderList
     }
     this.chechOrdelList();
  }

  chechOrdelList(){
    console.log(this.placeOrderList);
    if (this.placeOrderList == undefined || this.placeOrderList == null) {
        this.router.navigateByUrl('order-list');
    } else{
      let totalAmount = 0;
      let details=[];
      for (let i = 0; i < this.placeOrderList.length; i++) {
        totalAmount  += this.placeOrderList[i].order_qty * parseInt(this.placeOrderList[i].unit_price);
        details[i]={
              "product_id": this.placeOrderList[i].id,
              "total_amount": this.placeOrderList[i].unit_price * this.placeOrderList[i].order_qty,
              "qty": this.placeOrderList[i].order_qty,
        };
      }
      this.totalAmount = totalAmount.toFixed(2);
      this.placeOrderDetails = details
      console.log(totalAmount.toFixed(2));
      console.log(details)
    }
  }

  placeOrder(){
      this.loading.present();
      const postData = new FormData();
      postData.append('order_number','ace_wine' + Math.random() * 9999);
      postData.append('required_date','');
      postData.append('sell_tex','');
      postData.append('transact_status','1'); 
      postData.append('total_amount',this.totalAmount);
      postData.append('order_details',JSON.stringify(this.placeOrderDetails));
      this.product.placeOrder(postData).subscribe(
      data => {
        console.log(data);
        this.loading.dismiss();
        if(data.success){
          this.loading.presentToastSuccess(data.success);
          localStorage.removeItem('orderDetails');
          let navigationExtras : NavigationExtras = {
            state :{
              order_id : data.order_id
            }
          }
          this.router.navigate(['/order-tracking'] , navigationExtras);
        }
        if(data.error){
          this.loading.presentToastError(data.error);
        }
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

  // ionViewWillEnter(){
   
  // }
  ngOnInit() {
  }

}
