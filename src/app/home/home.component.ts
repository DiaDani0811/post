import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiServiceService) { }

  ngOnInit(): void {
  }

  getData:any;
  getuser(){
  this.service.getAllData().subscribe(res=>{
    this.getData= res;
  })
  }
}
