import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';
import { Camera ,CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-custom-product',
  templateUrl: './add-custom-product.page.html',
  styleUrls: ['./add-custom-product.page.scss'],
})
export class AddCustomProductPage implements OnInit {

  addCustomProductForm = this.formBuilder.group({
    catagory_name: ['',[Validators.required]],
    product_name: ['',[Validators.required]],
    image: [''],
    cost: ['',[Validators.required]],
    sale_price: ['',[Validators.required]],
    product_desc: [''],
  });
  photo: string;
  image: any;

  constructor(private loading : AlertService,private camera: Camera,private formBuilder: FormBuilder,private router: Router,private product: ProductService) { }


  ionViewWillEnter() {
    //this.getCategoryProducts();
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


       // open camera 
       takePhoto() {
        this.camera.getPicture({
            quality: 30,
            allowEdit: true,
            saveToPhotoAlbum:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE 
        }).then((imageData) => {
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          this.photo = base64Image;
          this.image = imageData;
          this.addCustomProductForm.controls.image.setValue(imageData? imageData : '');
        }, (err) => {
          console.log(err);
          this.loading.presentToastWarning(err);
          // Handle error
        });
      }
    
    
         /// select image from PHOTOLIBRARY
         getPhoto() {
          this.camera.getPicture({
            quality: 30,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
          }).then((dataImage) => {
            let base64Image = 'data:image/jpeg;base64,' + dataImage;
            this.photo = base64Image;
            this.image = dataImage;
            this.addCustomProductForm.controls.image.setValue(dataImage? dataImage : '');
          }, (err) => {
            // Handle error
          });
        }
  


  addCustomProduct(){
    console.log(this.addCustomProductForm.value);
    this.loading.present();
    this.product.addCustomProduct(this.addCustomProductForm.value).subscribe(
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
