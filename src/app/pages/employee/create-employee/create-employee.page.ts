import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { EmployeeService } from '../employee.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {

  addEmployeeForm = this.formBuilder.group({
    id: [""],
    name: ['', [Validators.required, Validators.minLength(2)]],
    username: [''],
    password: [''],
    confirm_password: [''],
    mobile: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(10)]],
    email: ['', [Validators.required]],
    image: [''],
    location: [''],
  });
  ifLogin: any;
  photo: string;
  image: any;
  employeeDetails: any;
  constructor(public modalController: ModalController, private camera: Camera, private loading: AlertService, private formBuilder: FormBuilder, private router: Router, private employee: EmployeeService) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));

    if (this.router.getCurrentNavigation().extras.state) {
      this.employeeDetails = this.router.getCurrentNavigation().extras.state.empDetails;
      console.log(this.employeeDetails);
      this.photo = this.employeeDetails ? this.employeeDetails.image : '';
      this.addEmployeeForm.controls.id.setValue(this.employeeDetails ? this.employeeDetails.id : '');
      this.addEmployeeForm.controls.name.setValue(this.employeeDetails ? this.employeeDetails.name : '');
      this.addEmployeeForm.controls.mobile.setValue(this.employeeDetails ? this.employeeDetails.mobile : '');
      this.addEmployeeForm.controls.email.setValue(this.employeeDetails ? this.employeeDetails.email : '');
      //this.addEmployeeForm.controls.image.setValue(this.employeeDetails? this.employeeDetails.image:'');
      this.addEmployeeForm.controls.location.setValue(this.employeeDetails ? this.employeeDetails.location : '');
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  addEmployee() {
    this.loading.present();
    console.log(this.addEmployeeForm.value);
    this.employee.addEmployee(this.addEmployeeForm.value).subscribe(
      data => {
        console.log(data);
        this.loading.dismiss();
        if (data.type == 'success') {
          this.loading.dismiss();
          this.loading.presentToastSuccess(data.msg);
          this.router.navigateByUrl('/employee-list');
        }
        if (data.type == 'error') {
          this.loading.dismiss();
          this.loading.presentToastError(data.msg);
          //this.router.navigateByUrl('/employee-list');
        }


      }, onerror => {
        if (onerror.status == 0) {
          this.loading.presentToastWarning('check your internet connection.');
          this.loading.dismiss();
        } else if (onerror.status == 500) {
          this.loading.dismiss();
          this.loading.presentToastError('Server error.');
        }
      });
  }

  // open camera 
  takePhoto() {
    this.camera.getPicture({
      quality: 30,
      allowEdit: true,
      saveToPhotoAlbum: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo = base64Image;
      this.image = imageData;
      this.addEmployeeForm.controls.image.setValue(imageData ? imageData : '');
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
      this.addEmployeeForm.controls.image.setValue(dataImage ? dataImage : '');
    }, (err) => {
      // Handle error
    });
  }

  ngOnInit() {
  }

}
