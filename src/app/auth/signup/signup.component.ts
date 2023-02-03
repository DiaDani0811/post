import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, RequiredValidator, FormBuilder, MaxLengthValidator, MaxValidator} from '@angular/forms';
import { Router } from '@angular/router';
import { clear } from 'console';
import { min } from 'rxjs';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router : Router,
              private formb : FormBuilder,
              private api : ApiServiceService) { }

  ngOnInit(): void {
      }

  submit(){}
  backToLogin()
  {
    this.router.navigateByUrl('login')
  }

  newUser :any = {};
  regUser : any=[];
  errmsg=''
  signUp(form:any)
  {
    
    if(this.newUser.password == this.newUser.conPassword){
      this.api.newuserData(this.newUser).subscribe(data => {
        this.regUser.push(this.newUser)
      })
      this.errmsg = 'Account created successfully'
      this.router.navigateByUrl('login')
    }
    else{
      this.errmsg = 'password and confirm password does not match'
      window.alert(this.errmsg)
    }
  form.reset()
  }
}
