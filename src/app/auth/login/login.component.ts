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

  constructor(private router: Router, private api: ApiServiceService,) { }
  allUserList: any

  ngOnInit(): void {
    this.api.newuserData;

    this.api.getAllNewUser().subscribe(userData =>{
      this.allUserList = userData
      console.log('this.allUserList',this.allUserList);
    } )
    
  }
  username: any;
  password: any;
  login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  msg : string=''
  submit(login: any) {
    console.log('=====>', login);
    for (var userList of this.allUserList) {
      console.log('', userList);
      if (login.username == userList.name && login.password == userList.password) { this.router.navigate(['layout'])}
     
    }
      this.msg = 'Invalid User'
  }
  signup() {
    this.router.navigateByUrl('sign')
  }

}
