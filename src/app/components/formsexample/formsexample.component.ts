import { UtilisateurService } from './../../services/utilisateur.service';
import { Utilisateur } from './../../models/utilisateur';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formsexample',
  templateUrl: './formsexample.component.html',
  styleUrls: ['./formsexample.component.css']
})
export class FormsexampleComponent implements OnInit {

   languages=['Angular 10','React','Node Js','Spring boot'];
   userModel:Utilisateur={};
   languageHasError=true;
  constructor(private _utilisateurService:UtilisateurService) {}

  valdidateLanguage(value){
    if(value==='default'){
      this.languageHasError=true;
    }else{
      this.languageHasError=false;
    }
  }

  
  
  ngOnInit(): void {
  }

  
  onSubmit(){
    console.log(this.userModel);

    this._utilisateurService.save(this.userModel)
    .subscribe(
      data=>console.log('Successfuly !',data),
      error=>console.log('Error !',error)
    )
  }
}
