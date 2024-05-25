import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../shared/food.service';
import { VwuserService} from '../../shared/vwuser.service';
import { Reguser} from '../../shared/reguser.model';
import { ReguserService } from '../../shared/reguser.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public users:any = [];
  userDetails;
  constructor(private fs: FoodService,private uservice: VwuserService,private userService: ReguserService,) { }
message: string;
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

    this.fs.currentMessage.subscribe(message=>this.message=message);
    this.getRegusers();
  }
  getRegusers() {
    this.uservice.getuser().subscribe((res) => {
    this.users = res as Reguser[];
    });
  }
}
