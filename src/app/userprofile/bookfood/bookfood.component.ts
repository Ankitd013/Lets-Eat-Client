import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ReguserService } from '../../shared/reguser.service';
import { FoodService } from '../../shared/food.service';
import {OrderService} from '../../shared/order.service';
import { Food } from '../../shared/food.model';
import {DatePipe} from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookfood',
  templateUrl: './bookfood.component.html',
  styleUrls: ['./bookfood.component.css']
})
export class BookfoodComponent implements OnInit {
  userDetails;
  public id:any = '';
  public selectedFood = new Food("","","",0,"","",0);
  myDate = new Date();
  public mydate;
  constructor(private route: ActivatedRoute, private fservice: FoodService , private userService: ReguserService ,
    private orderService: OrderService, private datepipe: DatePipe , private router: Router) {
      this.mydate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    }

  ngOnInit() {
    this.userService.getUserProfile().subscribe({
      next: (res) => {
        this.userDetails = res;
        // ... Handle the response ...
      },
      error: (err) => {
        // ... Handle the error ...
      },
      complete: () => {
        // ... Handle the completion ...
      }
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.getfood(this.id);
  }
  getfood(id) {
    this.fservice.getfoodid(id).subscribe({
      next: (res) => {
        this.selectedFood = res as Food;
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
  onSubmit(form: NgForm) {
    form.value.price = form.value.fprice * form.value.quan;
    form.value.date = this.mydate;
    
    this.orderService.insertOrder(form.value).subscribe({
      next: (res) => {
        console.log('Success', res)
        // ... Handle the response ...
      },
      error: (err) => {
        // ... Handle the error ...
      },
      complete: () => {
        // ... Handle the completion ...
      }
    });

      alert('Your Booking is Confirmed');
      this.router.navigateByUrl('/-/bookinghistory');
  }

}
