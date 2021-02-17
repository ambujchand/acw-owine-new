import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from 'src/app/services/env.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  ifLogin: any;

  constructor(private http: HttpClient,private env: EnvService) { 
    this.ifLogin = JSON.parse(localStorage.getItem('user'));
  }



  getDetails():Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.get<any>(this.env.API_URL + 'bar-owner/barDashboard',{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }
}
