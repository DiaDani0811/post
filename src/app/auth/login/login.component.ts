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
  userList:any
  ngOnInit(): void {
    
    this.api.getAllNewUser().subscribe(data=>{
      this.userList = data
      console.log('=========>', this.userList);
    })
  }


  username: any;
  password: any;
  login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  msg : string=''
  Count : boolean= false;
  submit(lValue) {
   for (let data of this.userList)
   {
    if( data.name == lValue.username &&  data.password == lValue.password)
    {
      this.router.navigate(['layout'])
    }
   }
   this.msg='Invalid Credentials';
   
  }
  signup() {
    
    this.router.navigateByUrl('sign')
  }

}
