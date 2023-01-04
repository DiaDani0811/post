import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, RequiredValidator, MinLengthValidator, } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api: ApiServiceService) { }

  ngOnInit(): void {
  }
  username: any;
  password: any;
  login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  usercred: any
  submit() {
    // console.log('========>', this.login.value);
    this.api.cred(this.login.value).subscribe(result => {
      this.usercred = result
    })
    this.router.navigateByUrl('layout')

  }
  signup() {
    this.router.navigateByUrl('sign')
  }
}
