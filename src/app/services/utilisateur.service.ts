import { Utilisateur } from './../models/utilisateur';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { utils } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  _url:string='';
  constructor(private _http:HttpClient) { }

  save(user:Utilisateur){
    return this._http.post<any>(this._url,Utilisateur);
  }
}
