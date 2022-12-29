import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, RequiredValidator,} from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  username :any;
  password : any ;
  login = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('', Validators.required)
  })
  submit()
  {
    console.log('auth', this.login.value);
    this.router.navigateByUrl('home')
  }

  signup()
  {

  }
}
