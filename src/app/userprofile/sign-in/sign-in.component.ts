import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Reguser} from '../../shared/reguser.model';
import {ReguserService } from '../../shared/reguser.service';

@Component({
  selector: 'userapp-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
  public objects = [];
  constructor(private userService: ReguserService,private router : Router) { }

  model = {
    email :'',
    password:'',
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  public adminrole = [];
  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('');
  }


  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/-/home');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }


}
