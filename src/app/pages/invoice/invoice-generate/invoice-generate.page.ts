import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-generate',
  templateUrl: './invoice-generate.page.html',
  styleUrls: ['./invoice-generate.page.scss'],
})
export class InvoiceGeneratePage implements OnInit {
  orderId: any;
  invoiceDetail: any;
  barDetails: any;
  subtotal = 0;
  textAmount = 0;
  grandTotal = 0;

  constructor(private loading : AlertService , private router: Router , private invoice : InvoiceService) { 
    if(this.router.getCurrentNavigation().extras.state)
    {
      this.orderId = this.router.getCurrentNavigation().extras.state.orderId;
    }
    console.log(this.orderId);
    this.getInvoiceDetails();

  }

  ionViewWillEnter(){
  }

  getInvoiceDetails(){
    this.loading.present();
    const postData = new FormData();
    postData.append('id',this.orderId);
    this.invoice.invoiceGenerateDetails(postData).subscribe(
    data => {
      this.invoiceDetail = data.invoiceDetails;
      this.barDetails = data.barDetails;
      for (let i = 0; i < this.invoiceDetail.details.length; i++) {
        this.subtotal += parseInt(this.invoiceDetail.details[i].pivot.total_amount);
        this.textAmount += (this.subtotal*0)/100;
      }
      this.grandTotal = this.subtotal + this.textAmount;
      console.log(this.subtotal);
      console.log(this.textAmount);
      console.log(this.grandTotal);
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

  ngOnInit() {
  }

}
