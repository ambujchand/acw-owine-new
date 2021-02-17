import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController, Platform } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['',[Validators.required]],
    password: ['',Validators.required],
  });
  userDetails: any;
  ifLogin: any;
  loginStatus :any;
  buttonColor1 : any;
  buttonColor2 : any;

  constructor(private formBuilder: FormBuilder,private loading : AlertService,private router: Router ,private loginService : LoginService,private platform: Platform,private routerOutlet: IonRouterOutlet,public modalController: ModalController) {
      this.ifLogin = JSON.parse(localStorage.getItem('user'));
      this.loginStatus = 'Login as Bar Owner';
      this.buttonColor1 = 'buttonStyle3';
      this.buttonColor2 = 'buttonStyle2';
     }

  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ionViewWillEnter() {
    if (this.ifLogin!=null) 
    {
      this.router.navigateByUrl('/dashboard');

    }
  }

  login(){
    this.loading.present();
  this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
  data => {
    this.userDetails = data;
    //console.log(data.user);
    this.loading.dismiss();
    if(this.userDetails.user){
      localStorage.setItem('user', JSON.stringify({ user : this.userDetails.user,token_type : this.userDetails.token_type, access_token : this.userDetails.access_token}));
      this.loading.dismiss();
      window.location.reload();
      this.router.navigateByUrl('/dashboard');
    }
    if(this.userDetails.error)
    {
      this.loading.dismiss();
      this.loading.presentToastWarning(this.userDetails.error);
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

  loginEmployee(){
    this.loginStatus = 'Login as Employee';
    this.buttonColor2 = 'buttonStyle3';
    this.buttonColor1 = 'buttonStyle2';
  }

  loginOwner(){
    this.loginStatus = 'Login as Bar Owner';
    this.buttonColor1 = 'buttonStyle3';
    this.buttonColor2 = 'buttonStyle2';
  }

  ngOnInit() {
  }

}
