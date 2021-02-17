import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../../product.service';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.page.html',
  styleUrls: ['./invoice-details.page.scss'],
})
export class InvoiceDetailsPage implements OnInit {
  month: any;

  year: any;
  day: number;
  invoices: void;
  
  Allinvoices: any;
  ifLogin: any;

  constructor(private loading : AlertService,private formBuilder: FormBuilder,private router: Router, private invoice : InvoiceService) { 
    this.ifLogin = JSON.parse(localStorage.getItem('user'));
  }

   ionViewWillEnter(){
    this.invoiceDetails('');
   }

  invoiceDetails(event) {
    let d = Date.now();
    console.log(d);
    this.loading.present();
    const postData = new FormData();
    if (event!='') {
    const selectedDate =  event.target.value;
    let date =  selectedDate.slice(0, 10);
      postData.append('selectData',date);
    }else{
      postData.append('selectData','');
    }
    this.invoice.getInvoice(postData).subscribe(
    data => {
      this.invoices = data.data;
      this.Allinvoices = data.data;
      console.log(data);
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

 invoiceGenarate(orderId){
  console.log(orderId);
  let navigationExtras : NavigationExtras = {
    state :{
      orderId : orderId
    }
  }
  this.router.navigate(['/invoice-generate'] , navigationExtras);
}

  ngOnInit() {
  }

}
