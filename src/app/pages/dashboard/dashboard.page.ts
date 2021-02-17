import { Component, OnInit,AfterViewInit ,ViewChild,OnDestroy} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { DashboardService } from './dashboard.service';
import { BackButtonEvent } from '@ionic/core';
import { Platform } from '@ionic/angular'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit{

  //categories = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  ifLogin: any;
  inventory: any;
  latestOrde: any;
  totalPurchage: any;
  user: any;
  backButtonSubscription: any;
  constructor(private platform: Platform ,private loading : AlertService,private router: Router ,private dashboars : DashboardService,public alertController: AlertController) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));

    //////////////////Exit App //////////////////////////////////////////////////////////
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      if(this.router.url == '/dashboard'){
        if(window.confirm('do you want to exit app ? ')){
          navigator['app'].exitApp();
        }
      }
    });

   }
   doRefresh(event) {
    console.log('Begin async operation');
    this.getDetaild();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    setTimeout(() => {
      //this.getDetaild();
      console.log('Done');
      console.log(event);
     // this.getSellers();
      // if (this.categories.length == this.categories.length) {
      //   event.target.disabled = true;
      // }
      event.target.complete();
    }, 2000);
  }
   ionViewWillEnter(){
    this.getDetaild();
   }

  getDetaild(){
   // this.loading.present();
   this.loading.dismiss();
    this.dashboars.getDetails().subscribe(
    data => {
      this.loading.dismiss();
      this.inventory = data.data.Inventory
      this.latestOrde = data.data.LatestOrder
      this.totalPurchage = data.data.TotalPurchage
      this.user = data.data.user
      console.log(data.data);
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


  invoiceDetails(){
    this.router.navigateByUrl('invoice-details');
  }

  getScrollData(event)
  {
    console.log(event.detail.value);
      let userData = null;
    for (let i = 0; i < this.user.length; i++) {
      if(this.user[i].id == event.detail.value){
        userData = this.user[i];
        break;
      }
    }
    console.log(userData);
    this.showUserDetails(userData)
  }


  async showUserDetails(userData) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: '<strong>Employee id : </strong>'+ userData.id +'<br><strong>Employee name </strong>' + userData.name
                +'<br><strong>Employee Phone </strong>' + userData.mobile +'<br><strong>Employee Email </strong>' + userData.email,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'info',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
      ]
    });

    await alert.present();
  }


  placeOrder(){
    this.router.navigateByUrl('/product-catagory');
  }

  createEmployee(){
    this.router.navigateByUrl('/employee-list');
  }

  showOrderTeacking(order_id){
    let navigationExtras : NavigationExtras = {
      state :{
        order_id : order_id
      }
    }
    this.router.navigate(['/order-tracking'] , navigationExtras);
  }

  ngOnInit() {
  }

}
