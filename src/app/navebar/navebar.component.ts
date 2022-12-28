import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


// import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.scss']
})
export class NavebarComponent implements OnInit {

  constructor() { }
  items: MenuItem[] =[]
  ngOnInit(): void {
    this.items = [
      {
          label: 'home',
          icon : 'pi pi-home',
          routerLink : 'home',

      },
      {
          label: 'table',
          icon: 'pi pi-fw pi-file',
          routerLink : 'table',
      },
      {
        label : 'forms',
        icon : 'pi pi-microsoft',
        routerLink : 'forms'
      }
  ];

  }

}
