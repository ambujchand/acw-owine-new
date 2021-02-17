import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  details: any;
  products: any;

  constructor(private loading : AlertService , private router: Router,private product: ProductService) {
    if(this.router.getCurrentNavigation().extras.state){
      this.details =  this.router.getCurrentNavigation().extras.state.products;
      let dataDetails =  this.router.getCurrentNavigation().extras.state.products;
      this.products = dataDetails.details;
      console.log(this.products);
     }
   }


   findOrderDetailsName(event)
   {
     if (event.target.value.length>0) {
       var data = [];
         for (let i = 0; i < this.details.details.length; i++) {
           const name = this.details.details[i].product_name.toLowerCase();
           if (name.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
               data.push(this.details.details[i]);
           }
         }
         this.details.details = data;
         console.log(data);
       }
       else {
             this.details.details = this.products;
            console.log(this.products);
           }
   }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      console.log(event);
      //this.getfindInventoryDetails();
      // if (this.products.length == this.products.length) {
      //   event.target.disabled = true;
      // }
      event.target.complete();
    }, 2000);
  }

  ionViewWillEnter(){
  // this.getAllOrders();
  }
  ngOnInit() {
  }

}
