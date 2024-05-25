import { Component, OnInit } from '@angular/core';
import { ReguserService } from '../../shared/reguser.service';
import {OrderService} from '../../shared/order.service';
import { Order } from '../../shared/order.model';

@Component({
  selector: 'app-bookhistory',
  templateUrl: './bookhistory.component.html',
  styleUrls: ['./bookhistory.component.css']
})
export class BookhistoryComponent implements OnInit {
  public userDetails;
  public email = '';
  public orders:any = [];
  constructor(private userService:ReguserService, private orderservice: OrderService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe({
      next: (res) => {
        this.userDetails = res;
        this.email = this.userDetails.email;

         this.getorder();
        // ... Handle the response ...
      },
      error: (err) => {
        // ... Handle the error ...
      },
      complete: () => {
        // ... Handle the completion ...
      }
    });
  }
  getorder() {
     this.orderservice.getuserorder(this.email).subscribe((res) => {
      this.orders = res as Order[];
      });

  }

}
