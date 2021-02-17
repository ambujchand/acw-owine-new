import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-show-catalouge',
  templateUrl: './show-catalouge.page.html',
  styleUrls: ['./show-catalouge.page.scss'],
})
export class ShowCatalougePage implements OnInit {

  allDetails: any;
  ifLogin: any;
  productCategory: any;
  resentPurc: any;
  imageUrl: string;
  allProducts: any;
  constructor( private env : EnvService, private loading : AlertService , private router: Router,private product: ProductService) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));
    this.imageUrl = env.IMG_URL;
  }

  ionViewWillEnter(){
    this.catalogueCategories();
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
     // this.getSellers();
      // if (this.categories.length == this.categories.length) {
      //   event.target.disabled = true;
      // }
      event.target.complete();
    }, 2000);
  }

  
  findCategoryName(event)
  {
    if (event.target.value.length>0) {
      var data = [];
        for (let i = 0; i < this.allProducts.length; i++) {
          const name = this.allProducts[i].name.toLowerCase();
          if (name.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
              data.push(this.allProducts[i]);
          }
        }
        this.productCategory = data;
      }
      else {
            this.productCategory=this.allProducts;
          }
  }

  catalogueCategories(){
      this.loading.present();
      this.product.getProductCatalougeDetails().subscribe(
      data => {
        console.log(data);
        this.loading.dismiss();
        this.productCategory = data.data;
        this.allProducts = data.data;
        // if(data.data.length>0)
        // {
        //   this.value = this.value + data.data.length;
        //   this.alldata.push(data.data);
        // }
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

  catagoryProducts(categoryId){
    console.log(categoryId);
    let navigationExtras : NavigationExtras = {
      state :{
        categoryId : categoryId,
        cataloguePage : 1,
        routerUrl:'/show-catalouge'
      }
    }
    this.router.navigate(['/product-list'] , navigationExtras);
  }

  ngOnInit() {
  }

}
