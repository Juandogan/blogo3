import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Location } from '@angular/common';
// import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatSnackBarConfig} from '@angular/material/snack-bar';
import { anunciante } from '../modelos/anunciante';
import { Router } from '@angular/router';
import { Varios } from '../modelos/varios';

@Injectable({
  providedIn: 'root'
})
export class CrudVariosService {

  varios:anunciante[]=[];

  

      public URL ="http://191.101.18.184:3000/varios"
    
      // public URL ="http://localhost:3000/varios"
  

  constructor(private http:HttpClient, private router:Router) {
  

   }

   pedirVarios(){
    return this.http.get<any>(this.URL +'/')
   }

   pedirVario(x){
    return this.http.get<any>(this.URL +'/'+ `/${x}`)
   }

   modify(x:string, varios:Varios){
    console.log(varios)
    return this.http.put<any>(this.URL +'/'+ `/${x}`, varios)
   }



    eliminarVario(x){
    return this.http.delete<any>(this.URL + `/${x}`)
   }

 crearVario(user:anunciante){
     // this.usuario = user.email
    return this.http.post<any>(this.URL + '/', user)
 }

  // signIn(user:anunciante){
  //   // this.usuario = user.email
  //   return this.http.post<any>(this.URL + '/signin', user)
  // }


  // loggedIn():boolean{

  //   return !!localStorage.getItem('token')
  // }

  // getToken():any{
  //   return localStorage.getItem('token')
  // }
  // logOut(){
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('usuario')
  //   this.router.navigate(['administracion/login'])

  // }

}
