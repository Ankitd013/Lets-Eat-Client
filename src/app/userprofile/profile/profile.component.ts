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
  public users = [];
  userDetails;
  constructor(private fs: FoodService,private uservice: VwuserService,private userService: ReguserService,) { }
message: string;
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
      },
      err => {
        console.log(err);

      }
    );
    this.fs.currentMessage.subscribe(message=>this.message=message);
    this.getRegusers();
  }
  getRegusers() {
    this.uservice.getuser().subscribe((res) => {
    this.users = res as Reguser[];
    console.log(this.users);
    });
  }
}
