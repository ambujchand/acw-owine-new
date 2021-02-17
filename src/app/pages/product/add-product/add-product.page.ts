import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  addProductForm = this.formBuilder.group({
    id: [''],
    category_id: ['',[Validators.required]],
    product_id: ['',[Validators.required]],
    image: [''],
    cost: ['',[Validators.required]],
    sale_price: ['',[Validators.required]],
    prouct_desc: [''],
    qty: ['',[Validators.required]],
  });
  categoryProducts: any;
  products: any;
  selectPro: any;
  image: any;
  editdata: any;

  constructor(private loading : AlertService,private formBuilder: FormBuilder,private router: Router,private product: ProductService) { 
        if(this.router.getCurrentNavigation().extras.state){
      let productsData  = this.router.getCurrentNavigation().extras.state.product;
      this.editdata = productsData;
    }
    console.log(this.editdata);
  }


  ionViewWillEnter() {
    this.getCategoryProducts();
    this.addProductForm.controls.image.setValue(this.editdata? this.editdata.image:'');
    this.addProductForm.controls.sale_price.setValue(this.editdata? this.editdata.sale_price:'');
    this.addProductForm.controls.prouct_desc.setValue(this.editdata? this.editdata.product_description:'');
    this.addProductForm.controls.qty.setValue(this.editdata? this.editdata.qty:'');
    this.addProductForm.controls.cost.setValue(this.editdata? this.editdata.unit_price:'');
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

  getCategoryProducts() {
    this.loading.present();
    this.product.getCategoryProducts().subscribe(
    data => {
      console.log(data);
      this.categoryProducts = data.data;
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

  selectProducts(catagory_id){
    console.log(catagory_id)
    for (let i = 0; i < this.categoryProducts.length; i++) {
      if(this.categoryProducts[i].id == catagory_id){
        this.addProductForm.controls.product_id.setValue('');
        this.products = this.categoryProducts[i].products;
        break;
      }
      
    }
    console.log(this.products)
    this.addProductForm.controls.cost.setValue('');
    this.addProductForm.controls.image.setValue('');
    this.addProductForm.controls.prouct_desc.setValue('');
    this.addProductForm.controls.sale_price.setValue('');
    this.addProductForm.controls.qty.setValue('');
    
  }

  selectProduct(product_id){
    this.addProductForm.controls.sale_price.setValue('');
    this.addProductForm.controls.qty.setValue('');
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id == product_id){
        this.selectPro = this.products[i];
        break;
      }
    }
    this.addProductForm.controls.cost.setValue(this.selectPro? this.selectPro.unit_price:'');
    this.addProductForm.controls.image.setValue(this.selectPro? this.selectPro.image:'');
    this.addProductForm.controls.prouct_desc.setValue(this.selectPro? this.selectPro.product_description:'');
    this.image = this.selectPro.image;
    console.log(this.addProductForm.value);
  }

  addProduct(){
    console.log(this.addProductForm.value);
    this.loading.present();
    this.product.addNewProduct(this.addProductForm.value).subscribe(
    data => {
      console.log(data);
      this.loading.dismiss();
      if(data.type == 'success'){
        this.loading.presentToastSuccess(data.msg);
        this.router.navigateByUrl('/dashboard');
      }
      if(data.type == 'error'){
        this.loading.presentToastError(data.msg);
        //this.router.navigateByUrl('/employee-list');
      }
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


  ngOnInit() {
  }

}
