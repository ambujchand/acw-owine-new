import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular'
import {FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  allList:any;
  newData: any;
  order_qty:any
  routerUrl: any;

  constructor(private loading : AlertService,private formBuilder: FormBuilder,private router: Router) {
    //localStorage.removeItem('orderDetails');
   // dataUrl:'/product-catagory',
    if(this.router.getCurrentNavigation().extras.state){
     this.newData =  this.router.getCurrentNavigation().extras.state.orderDetails;
     this.routerUrl =  this.router.getCurrentNavigation().extras.state.rouerUrl;
     console.log(this.routerUrl);
     let ifData = JSON.parse(localStorage.getItem('orderDetails'))
     let data;
      if(ifData == null){
        data = [];
      }
      else{
        data = JSON.parse(localStorage.getItem('orderDetails'))
      }
        data.push(this.newData);
        localStorage.setItem("orderDetails", JSON.stringify(data));
    }
    this.allList = JSON.parse(localStorage.getItem('orderDetails'));
    console.log(this.allList);
   }

   ionViewWillEnter(){
    this.checkOrderList();
   }

   changeQty(value , id){
    for (let i = 0; i <this.allList.length; i++) {
      if(this.allList[i].id == id){
        console.log(this.allList[i].id);
        this.allList[i].order_qty = value;
        break;
      }
    }
    localStorage.setItem("orderDetails", JSON.stringify(this.allList));
   }



   addQty(id){
    for (let i = 0; i <this.allList.length; i++) {
      if(this.allList[i].id == id){
        console.log(this.allList[i].id);
        this.allList[i].order_qty = parseInt(this.allList[i].order_qty) + 1;
        break;
      }
    }
    localStorage.setItem("orderDetails", JSON.stringify(this.allList));
  }

  removeQty(id){
    for (let i = 0; i <this.allList.length; i++) {
      if(this.allList[i].id == id){
        console.log(this.allList[i].id);
        this.allList[i].order_qty -= 1;
        break;
      }
    }
    localStorage.setItem("orderDetails", JSON.stringify(this.allList));
    
  }

   checkOrderList(){
    if(this.allList==null || this.allList==''){
      console.log('kkkkkkkkk')
      this.router.navigateByUrl('product-catagory');
    }
   }

   addProduct()
   {
      this.router.navigateByUrl(this.routerUrl);
   }

   deleteOrderList(remove_id){
     let exProduct;
     exProduct = JSON.parse(localStorage.getItem('orderDetails'))
     console.log(exProduct);
     for (let i = 0; i <exProduct.length; i++) {
       if(exProduct[i].id == remove_id){
          exProduct.splice(i, 1);
          console.log(exProduct);
          localStorage.setItem("orderDetails", JSON.stringify(exProduct));
          break;
       }
     }
     this.allList = JSON.parse(localStorage.getItem('orderDetails'));
   }

   orderCheckoutPage(){
    let navigationExtras : NavigationExtras = {
      state :{
        placeOrderList : this.allList
      }
    }
    this.router.navigate(['/place-order'] , navigationExtras);
  }
  
  ngOnInit() {
  }

}
