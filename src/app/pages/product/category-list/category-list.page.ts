import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  allProducts: any;
  categories: any[];

  constructor(private loading : AlertService , private router: Router,private product: ProductService) {
  }

  ionViewWillEnter(){
    this.categoryList();
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
        this.categories = data;
      }
      else {
            this.categories=this.allProducts;
          }
  }

  categoryList(){
      this.loading.present();
      this.product.getCategoryList().subscribe(
      data => {
        console.log(data);
        this.loading.dismiss();
        this.categories = data.data;
        this.allProducts = data.data;
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

  inventoryCatagory(categoryId){
    console.log(categoryId);
    let navigationExtras : NavigationExtras = {
      state :{
        categoryId : categoryId
      }
    }
    this.router.navigate(['/current-inventory'] , navigationExtras);
  }

  // getScrollData(event){

  //     console.log(event.detail.value);
  //     console.log(this.resentPurc);
  //     let resentProductDetails;
  //     for (let i = 0; i < this.resentPurc.length; i++) {
  //         if(this.resentPurc[i].id == event.detail.value){
  //           resentProductDetails = this.resentPurc[i];
  //           break;
  //         }
  //     }
  //     let navigationExtras : NavigationExtras = {
  //       state :{
  //         productDetails : resentProductDetails
  //       }
  //     }
  //     this.router.navigate(['/product-details'] , navigationExtras);
  //   }
  ngOnInit() {
  }

}
