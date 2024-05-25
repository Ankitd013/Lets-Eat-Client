import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
emailRegex: string|RegExp;

  constructor(public contactservice:ContactService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.contactservice.postcontact(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.contactservice.selectedUser = {
      _id:'',
      contactname: '',
      contactemail: '',
      contactphone: 0,
      contactmessage:''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
