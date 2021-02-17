import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  addOrderForm = this.formBuilder.group({
    id: [''],
    product_description: [''],
    image: [''],
    product_name: [''],
    qty_per_unit: [''],
    unit_price: [''],
    order_qty: [1],
    sold_qty: [''],
    sold_date: [''],
  });

  formData = {
    order_qty: 1,
    id:null,
    sold_qty: 0,
    sold_date:null,
  };

  // addSoldForm = this.formBuilder.group({
  //   sold_qty: ['',[Validators.required]],
  // });

  productDetails: any;
  sellProductDetails=[];
  rouerUrl: any;

  constructor(private loading : AlertService , private router: Router,private formBuilder: FormBuilder,private product : ProductService) {
    const now = new Date();
    this.formData.sold_date = now.toISOString().slice(0,10);
    if(this.router.getCurrentNavigation().extras.state){
      this.productDetails = this.router.getCurrentNavigation().extras.state.productDetails;
      this.rouerUrl = this.router.getCurrentNavigation().extras.state.routerUrl;
      console.log(this.rouerUrl);
      this.formData.id = this.productDetails? this.productDetails.id:'';
      this.addOrderForm.controls.id.setValue(this.productDetails? this.productDetails.id:'');
      this.addOrderForm.controls.product_description.setValue(this.productDetails? this.productDetails.product_description:'');
      this.addOrderForm.controls.image.setValue(this.productDetails? this.productDetails.image:'');
      this.addOrderForm.controls.product_name.setValue(this.productDetails? this.productDetails.product_name:'');
      this.addOrderForm.controls.qty_per_unit.setValue(this.productDetails? this.productDetails.qty:'');
      this.addOrderForm.controls.unit_price.setValue(this.productDetails? this.productDetails.unit_price:'');
    }
  console.log(this.productDetails);
  this.checkCatId();
  }

  checkCatId() {    
    if (this.productDetails) {
      
    } else {
      this.router.navigateByUrl('/product-list')
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  addQty(){
    this.formData.order_qty += 1;
  }

  removeQty(){
    this.formData.order_qty -= 1;
    
  }

  // addOrder(){
  //   console.log(this.addOrderForm.value);
  // }


  addOrder() {
    this.addOrderForm.controls.order_qty.setValue(this.formData? this.formData.order_qty:'');
    this.addOrderForm.controls.sold_qty.setValue(this.formData? this.formData.sold_qty:'');
    this.addOrderForm.controls.sold_date.setValue(this.formData? this.formData.sold_date:'');
    console.log(this.addOrderForm.value);
    let navigationExtras : NavigationExtras = {
      state :{
        orderDetails : this.addOrderForm.value,
        rouerUrl : this.rouerUrl
      }
    }
    this.router.navigate(['/order-list'] , navigationExtras);
  }

  updateSoldQty(){
    if(this.formData.sold_qty >0)
    {
      this.loading.present();
      this.product.updateSoldQty(this.formData).subscribe(
      data => {
        this.loading.dismiss();
        console.log(data);
        if(data.success){
          this.loading.presentToastSuccess(data.success);
          this.productDetails.qty = data.data;
        }
        if(data.error)
        {
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
    }else{
      this.loading.presentToastWarning('Please Enter Sold Quantity');
    }
  }


  ngOnInit() {
  }

}
