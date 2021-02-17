import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  allProducts: any;
  products: any;
  value: any;

  constructor(private loading : AlertService , private router: Router,private product: ProductService) { }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getAllOrders();
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
   this.getAllOrders();
  }

  findInventoryName(event)
  {
    if (event.target.value.length>0) {
      var data = [];
        for (let i = 0; i < this.products.length; i++) {
          const status = this.products[i].status.toLowerCase();
          const order_number = this.products[i].order_number.toLowerCase();
          const order_date = this.products[i].order_date.toLowerCase();
          if (status.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
              data.push(this.products[i]);
          }
          if (order_number.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
            data.push(this.products[i]);
          }
          if (order_date.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
            data.push(this.products[i]);
          }
        }
        this.allProducts = data;
      }
      else {
            this.allProducts=this.products;
          }
  }

  getAllOrders()
  {
      this.loading.present();
      this.product.getAllInventoryOrders().subscribe(
      data => {
        console.log(data.data);
        this.allProducts = data.data;
        this.products = data.data
        this.loading.dismiss();
        if(data.length>0)
        {
          this.value = this.value + data.data.length;
          this.allProducts.push(data.data);
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


  orderDetails(products){
    console.log(products);
    let navigationExtras : NavigationExtras = {
      state :{
        products : products
      }
    }
    this.router.navigate(['/order-details-page'] , navigationExtras);
  }
  
  ngOnInit() {
  }

}
