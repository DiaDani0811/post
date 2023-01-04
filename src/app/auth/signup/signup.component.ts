import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, RequiredValidator, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router : Router, private formb : FormBuilder) { }

  ngOnInit(): void {
  }
  signUpForm = this.formb.group({
    firstName : ['',[Validators.required, Validators.min(2)]],
    lastName : [''],
    email : [''],
    password : [''],
    address : this.formb.group({
      doorNo : [''],
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  })
  backToLogin()
  {
    this.router.navigateByUrl('login')
  }
}
