import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reguser } from './reguser.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VwuserService {

  constructor(private http: HttpClient) { }
  readonly baseURL = environment.viewuser;
  getuser() {
    return this.http.get(this.baseURL) ;
  }
}
