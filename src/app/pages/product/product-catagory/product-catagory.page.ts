import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-product-catagory',
  templateUrl: './product-catagory.page.html',
  styleUrls: ['./product-catagory.page.scss'],
})
export class ProductCatagoryPage implements OnInit {
//  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
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
    this.getProductCategory();
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

  getProductCategory(){
      this.loading.present();
      const postData = new FormData();
      postData.append('user_id', this.ifLogin.user.id);
      // postData.append('skip_id', JSON.stringify(this.value));
      this.product.getCategoryProductDetails(postData).subscribe(
      data => {
        console.log(data);
        this.loading.dismiss();
        this.productCategory = data.data.ProductC;
        this.allProducts = data.data.ProductC;
        this.resentPurc = data.data.RecentP;
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
        routerUrl : '/product-catagory',
      }
    }
    this.router.navigate(['/product-list'] , navigationExtras);
  }

  getScrollData(event){

      console.log(event.detail.value);
      console.log(this.resentPurc);
      let resentProductDetails;
      for (let i = 0; i < this.resentPurc.length; i++) {
          if(this.resentPurc[i].id == event.detail.value){
            resentProductDetails = this.resentPurc[i];
            break;
          }
      }
      let navigationExtras : NavigationExtras = {
        state :{
          productDetails : resentProductDetails,
          routerUrl : '/product-catagory',
        }
      }
      this.router.navigate(['/product-details'] , navigationExtras);
    }
  ngOnInit() {
  }

}
