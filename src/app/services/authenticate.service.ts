import { NgFor, NgForOf, NgForOfContext } from '@angular/common';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { stdin } from 'process';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(private storage: Storage) { }

  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
    this.storage.forEach(element => {   
      //console.log(element);
      console.log("ingreso: ",credentials.email);
      console.log("ingreso: ",credentials.password);
      if(element.password!=null && element.email!=null){
        console.log("cache email: ",(element.email));
        console.log("cache pass: ",atob(element.password));
      if ( credentials.email == element.email && credentials.password == atob(element.password)) // && btoa(credentials.password) == "123456" 
      {
        accept("Login Exitoso");
      } else {
        if(credentials.password != element.password && credentials.email==element.email){
        reject("Contraseña incorecta");}
        reject("Usuario NO registrado");
      }
    }
      });      
    });
  }
  loginUserReg(userData: any){
    
  }

  /*loginUser(credentials: any, userData: any){
    return new Promise((accept, reject) =>{
      if ( credentials.email == userData.email && btoa(credentials.password) == userData.password ) 
      {
        accept("Login Exitoso");
      } else {
        reject("Login Fallido");
      }
    });
  }*/

  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}