import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  showSubmenu: boolean = false;
  productInventory: boolean = false;
  ifLogin: any;
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));

    if (this.ifLogin!=null) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.router.navigateByUrl('/');
    }
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }
  productInvMenu():void{
    this.productInventory = !this.productInventory
  }

  logout(){
    localStorage.removeItem('orderDetails');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }
  ngOnInit() {
  }
}
