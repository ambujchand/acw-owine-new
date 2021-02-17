import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from 'src/app/services/env.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ifLogin: any;

  constructor(private http: HttpClient,private env: EnvService) { 
    this.ifLogin = JSON.parse(localStorage.getItem('user'));
  }
  
  getCategoryProductDetails(postData)
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'bar-owner/purchase',postData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  catalogueProducts(postData)
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'bar-owner/catalogueProducts',postData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

    getProductDetails(postData)
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'bar-owner/inventoryProducts',postData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }


  placeOrder(postData)
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'order/store',postData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  getCategoryProducts()
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.get<any>(this.env.API_URL + 'bar-owner/productDetails',{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }
  

  addNewProduct(postData)
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'bar-owner/addProduct',postData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }
  
  addCustomProduct(postData)
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'bar-owner/addCustomProduct',postData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  getCategorDetails()
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.get<any>(this.env.API_URL + 'bar-owner/addProduct',{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }


  getInventoryDetails(postData)
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'bar-owner/showProducts',postData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }


  getCategoryList(){
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
      });
      return this.http.get<any>(this.env.API_URL + 'bar-owner/categories',{ headers: headers })
      .pipe(
        tap(user => {
          return user;
        })
      )
    }

    getAllInventoryOrders(){
      const headers = new HttpHeaders({
        'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
        });
        return this.http.get<any>(this.env.API_URL + 'order/allOrders',{ headers: headers })
        .pipe(
          tap(user => {
            return user;
          })
        )
      }


      deleteProduct(postData)
      {
        const headers = new HttpHeaders({
        'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
        });
        return this.http.post<any>(this.env.API_URL + 'bar-owner/delete-product',postData,{ headers: headers })
        .pipe(
          tap(user => {
            return user;
          })
        )
      }

      getProductCatalougeDetails()
      {
        const headers = new HttpHeaders({
        'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
        });
        return this.http.get<any>(this.env.API_URL + 'bar-owner/catalogueCategories',{ headers: headers })
        .pipe(
          tap(user => {
            return user;
          })
        )
      }

      updateSoldQty(postData)
      {
        const headers = new HttpHeaders({
        'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
        });
        return this.http.post<any>(this.env.API_URL + 'bar-owner/update-qty',postData,{ headers: headers })
        .pipe(
          tap(user => {
            return user;
          })
        )
      }
  

}

