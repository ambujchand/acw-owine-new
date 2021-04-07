import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { reduce } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage implements OnInit {
  allEmployees = [];
  employee: any;
  employeeId: any;
  value: any;

  constructor(private loading: AlertService, private router: Router, private empservices: EmployeeService, public alertController: AlertController) {
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getEmployees();
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

  ionViewWillEnter() {
    this.getEmployees();
  }


  findEmployeeName(event) {
    console.log(this.allEmployees);
    if (event.target.value.length > 0) {
      var data = [];
      console.log(this.employee);
      for (let i = 0; i < this.employee.length; i++) {
        const name = this.employee[i].name.toLowerCase();
        if (name.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
          data.push(this.employee[i]);
        }
      }
      this.allEmployees = data;
      console.log(this.allEmployees);
    }
    else {
      this.allEmployees = this.employee;
    }
  }

  getEmployees() {
    this.loading.present();
    const postData = new FormData();
    postData.append('skip_id', JSON.stringify(this.value));
    this.empservices.getEmployeeDetails(postData).subscribe(
      data => {
        console.log(data);
        this.employeeId = data.data;
        this.employee = data.data
        this.allEmployees = data.data
        if (data.length > 0) {
          this.value = this.value + data.data.length;
          this.allEmployees.push(data.data);
        }
        this.loading.dismiss();
      }, onerror => {
        if (onerror.status == 0) {
          this.loading.presentToastWarning('check your internet connection.');
          this.loading.dismiss();
        } else if (onerror.status == 500) {
          this.loading.presentToastError('Server error.');
          this.loading.dismiss();
        }
      });
  }

  editEmployee(empDetails) {
    console.log(empDetails);
    let navigationExtras: NavigationExtras = {
      state: {
        empDetails: empDetails
      }
    }
    this.router.navigate(['/create-employee'], navigationExtras);
  }


  async deleteEmployee(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are You Sure',
      message: '<small>Do you want to delete this ?</small>',
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
            this.empservices.deleteEmployee(updateData).subscribe(
              data => {
                console.log(data);
                this.loading.dismiss();
                this.loading.presentToastSuccess(data.success);
                this.getEmployees();
                // this.router.navigateByUrl('/employee-list');
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
        }
      ]
    });

    await alert.present();
  }


  createEmployee() {
    this.router.navigateByUrl('/create-employee');
  }

  ngOnInit() {
  }

}
