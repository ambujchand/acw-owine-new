import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-current-inventory',
  templateUrl: './current-inventory.page.html',
  styleUrls: ['./current-inventory.page.scss'],
})
export class CurrentInventoryPage implements OnInit {
  products: any;
  allProducts: any;
  value: any;
  categoryId: any;
  ifLogin: any;

  constructor(private loading : AlertService , private router: Router,private product: ProductService,public alertController: AlertController) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));

    if(this.router.getCurrentNavigation().extras.state)
    {
      this.categoryId = this.router.getCurrentNavigation().extras.state.categoryId
    }    
  }
 
   doRefresh(event) {
     console.log('Begin async operation');
     this.getfindInventoryDetails();
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
       if (this.products.length == this.products.length) {
         event.target.disabled = true;
       }
       event.target.complete();
     }, 2000);
   }

   ionViewWillEnter(){
    this.getfindInventoryDetails();
   }
 
   findInventoryName(event)
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
 
   getfindInventoryDetails()
   {
       this.loading.present();
       console.log(this.categoryId);
       const postData = new FormData();
       if (this.categoryId==undefined) {
          postData.append('category_id','');
       } else {
          postData.append('category_id',this.categoryId);
       }
       this.product.getInventoryDetails(postData).subscribe(
       data => {
         console.log(data);
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
   }
 
   productDetails(product)
   {
     console.log(product);
     console.log('ooooo');
     let navigationExtras : NavigationExtras = {
       state :{
         productDetails : product,
         routerUrl : '/current-inventory',
       }
     }
     this.router.navigate(['/product-details'] , navigationExtras);
   }

   addProduct(){
     this.router.navigateByUrl('/add-product');
   }

   editProduct(product){
    console.log(product);
    let navigationExtras : NavigationExtras = {
      state :{
        product : product
      }
    }
    this.router.navigate(['/add-product'] , navigationExtras);
   }

   async deleteProduct(id){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are You Sure',
      message: '<small>You Want To Delete This ?</small>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'success',
        }, {
          text: 'Ok',
          handler: () => {
              this.loading.present();
              const updateData = new FormData();
              updateData.append('id', id);
              this.product.deleteProduct(updateData).subscribe(
              data => {
                console.log(data);
                this.loading.dismiss();
                this.loading.presentToastSuccess(data.success);
                this.getfindInventoryDetails();
               // this.router.navigateByUrl('/employee-list');
              }, onerror => {
              if (onerror.status==0) {
                this.loading.presentToastWarning('check your internet connection.');
                this.loading.dismiss();
              } else if(onerror.status==500) {
              this.loading.dismiss();
              this.loading.presentToastError('Server error.');
              }
              });
           }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
