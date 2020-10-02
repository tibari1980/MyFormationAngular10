import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   title:string="ANGULAR 10 BY TIBARI"
  constructor() { }

  ngOnInit(): void {
  }

}
