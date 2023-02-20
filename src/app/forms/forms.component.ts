import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  

  constructor( private service : ApiServiceService) { }

  ngOnInit(): void {
  }

  addEmployeeForm = new FormGroup ({  
    name : new FormControl('', Validators.required),
    code : new FormControl('',Validators.required),
    salary : new FormControl('',Validators.required),
    role : new FormControl('',Validators.required)
  })


  empData:any
  addEmpForm(value)
  {
    this.service.addEmp(value).subscribe(data=> { })
    this.addEmployeeForm.reset();
  }
}
