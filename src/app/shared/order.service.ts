import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Order} from './order.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  readonly baseURL = environment.order;
  getorders() {
    return this.http.get(this.baseURL) ;
  }

  getuserorder(cemail: string) {
    return this.http.get('http://localhost:3000/userorder' + `/${cemail}`);
  }

  insertOrder( order: Order) {
    return this.http.post(this.baseURL, order);
  }
}
