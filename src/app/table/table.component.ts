import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private service : ApiServiceService) { }

  ngOnInit(): void {
    this.getuser()
  }


  getData:any;
  getuser(){
  this.service.getAllData().subscribe(res=>{
    this.getData= res;
  })
  }

  displayedColumns: string[] = ['name', 'code', 'salary', 'role'];

}


