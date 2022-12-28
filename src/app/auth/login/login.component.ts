import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, RequiredValidator,} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value1:any
  login = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('', Validators.required)
  })
  submit()
  {
  console.log('username', this.login.value);
  }
}
