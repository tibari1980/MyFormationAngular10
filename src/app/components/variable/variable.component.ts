import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {
  //déclaration string
  fullName:string;
  lastName:string;
  //déclaration boolean
  isActive:boolean;
  isBlanc:boolean;
  //déclaration number;
   age :number;
   listNumbers: number[]=[1,20,40,70,20];
   listEtatCivile:string[]=['homme','femme'];
   constructor() { 
    this.fullName="ZEROUAL";
    this.lastName="Tibari";  
    this.isActive=true;
    this.isBlanc=false;
    this.age=40;
  }

  ngOnInit(): void {
  }

}
