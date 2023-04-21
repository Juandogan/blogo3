import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Location } from '@angular/common';
// import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatSnackBarConfig} from '@angular/material/snack-bar';
import { anunciante } from '../modelos/anunciante';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CrudAnuncioService {

  anunciantes:anunciante[]=[];
  unAnunciante:anunciante

  //public URL ="http://168.197.50.191/api"
  // public URL ="http://localhost:3000/anunciante"
      public URL ="http://191.101.18.184:3000/anunciante"
    

  usuario=""

  constructor(private http:HttpClient, private router:Router) {
  this.usuario = String(localStorage.getItem('usuario'))

   }

   pedirUsuarios(){
    return this.http.get<any>(this.URL +'/')
   }

   pedirUsuario(x){
    return this.http.get<any>(this.URL +'/'+ `/${x}`)
   }

   modify(x:string, anunciante:anunciante){
    console.log(anunciante)
    return this.http.put<any>(this.URL +'/'+ `/${x}`, anunciante)
   }



    eliminarUsuario(x){
    return this.http.delete<any>(this.URL + `/${x}`)
   }

 crearAnuncio(user:anunciante){
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
