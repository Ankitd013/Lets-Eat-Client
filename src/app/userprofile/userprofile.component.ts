import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/categoty.model';
import {ReguserService} from '../shared/reguser.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userDetails;
  public category: Category[] = [];
  public id = '';
  constructor(private router: Router, private catservice: CategoryService, private userService: ReguserService,
    private route: ActivatedRoute) { }
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
    this.getCategory();
    // this.id = this.route.snapshot.paramMap.get('id');
  }
  onclick() {
    this.router.navigateByUrl('/profile');
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }
  onFood(catname) {
    this.router.navigate ( [ '/-/food', {id: catname} ] );
  }
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['../userlogin']);
  }
}
