import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from 'src/app/services/env.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  ifLogin: any;

  constructor(private http: HttpClient,private env: EnvService) { 
    this.ifLogin = JSON.parse(localStorage.getItem('user'));
  }

  getAllResentOrders(){
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
      });
      return this.http.get<any>(this.env.API_URL + 'order/allProgressOrders',{ headers: headers })
      .pipe(
        tap(user => {
          return user;
        })
      )
    }

    getOrderStatus(formData){
      const headers = new HttpHeaders({
        'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
        });
        return this.http.post<any>(this.env.API_URL + 'order/order-status',formData,{ headers: headers })
        .pipe(
          tap(user => {
            return user;
          })
        )
      }

    
}
