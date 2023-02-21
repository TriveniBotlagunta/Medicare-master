import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  signupForm: any;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "firstName": new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      "lastName": new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      "emailId": new FormControl('', [Validators.email, Validators.required]),
      "newPassword": new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
      "confirmPassword": new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
      "mobileNumber": new FormControl('',  [ Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    });
  }


  submitData() {
    console.log(this.signupForm.value);

  }

  get firstname() { return this.signupForm.get('firstName'); }
  get lastname() { return this.signupForm.get('lastName'); }
  get emailid() { return this.signupForm.get('emailId'); }
  get newpassword() { return this.signupForm.get('newPassword'); }
  get confirmpassword() { return this.signupForm.get('confirmPassword'); }
  get mobilenumber() { return this.signupForm.get('mobileNumber'); }

}



