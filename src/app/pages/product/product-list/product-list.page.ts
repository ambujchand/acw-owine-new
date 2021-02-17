import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  categoryId: any;
  allProducts=[];
  value: any;
  products: any;
  cateloguePage: number;
  routerUrl: any;

  constructor(private loading : AlertService , private router: Router,private product: ProductService) {
    if(this.router.getCurrentNavigation().extras.state){
      this.categoryId = this.router.getCurrentNavigation().extras.state.categoryId;
      this.cateloguePage = this.router.getCurrentNavigation().extras.state.cataloguePage;
      this.routerUrl = this.router.getCurrentNavigation().extras.state.routerUrl;
      console.log(this.routerUrl)
     // routerUrl
      console.log(this.categoryId);
        console.log(this.cateloguePage);
    }

  }

  ionViewWillEnter(){
    this.checkCatagoryId();
    if (this.cateloguePage==1) {
      this.getCatelogueProductDetails();
    } else {
      this.getCategoryDetails();
    }
  }

  checkCatagoryId() {
   if (this.categoryId) {
     
   } else {
     this.router.navigateByUrl('/product-catagory');
   }
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getCategoryDetails();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      console.log(event);
      this.getCategoryDetails();
      if (this.products.length == this.products.length) {
        event.target.disabled = true;
      }
      event.target.complete();
    }, 2000);
  }

  findProductName(event)
  {
    console.log(this.allProducts);
    if (event.target.value.length>0) {
      var data = [];
      console.log(this.products);
        for (let i = 0; i < this.products.length; i++) {
          const name = this.products[i].product_name.toLowerCase();
          if (name.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
              data.push(this.products[i]);
          }
        }
        this.allProducts = data;
        console.log(this.allProducts);
      }
      else {
            this.allProducts=this.products;
          }
  }

  getCatelogueProductDetails(){
    if(this.categoryId !=''){
      this.loading.present();
      const postData = new FormData();
      postData.append('category_id', this.categoryId);
      postData.append('skip_id', JSON.stringify(this.value));
      this.product.catalogueProducts(postData).subscribe(
      data => {
        this.allProducts = data.data;
        this.products = data.data
        if(data.length>0)
        {
          this.value = this.value + data.data.length;
          this.allProducts.push(data.data);
        }
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
    }else{
      this.router.navigateByUrl('product-catagory');
    }
  }

  getCategoryDetails()
  {
    if(this.categoryId !=''){
      this.loading.present();
      const postData = new FormData();
      postData.append('category_id', this.categoryId);
      postData.append('skip_id', JSON.stringify(this.value));
      this.product.getProductDetails(postData).subscribe(
      data => {
        this.allProducts = data.data;
        this.products = data.data
        if(data.length>0)
        {
          this.value = this.value + data.data.length;
          this.allProducts.push(data.data);
        }
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
    }else{
      this.router.navigateByUrl('product-catagory');
    }


  }

  productDetails(product)
  {

    console.log(product);
    console.log('ooooo');
    let navigationExtras : NavigationExtras = {
      state :{
        productDetails : product,
        routerUrl : this.routerUrl
      }
    }
    this.router.navigate(['/product-details'] , navigationExtras);
  }

  ngOnInit() {
  }

}
