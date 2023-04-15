import { Injectable } from '@angular/core';
import { CarouselModel } from '../modelos/userCarousel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GuiaModel } from '../modelos/guia';
@Injectable({
  providedIn: 'root'
})
export class GuiaServiceService {


  guia:GuiaModel[]=[];
  unGuia:GuiaModel




  //public URL ="http://168.197.50.191/api"
  // public URL ="http://localhost:3000/carousel"
  public URL ="http://66.97.44.139/guia"

  usuario=""

  constructor(private http:HttpClient, private router:Router) {
  this.usuario = String(localStorage.getItem('usuario'))

   }

   pedirGuias(){
    return this.http.get<any>(this.URL +'/')

   }

   pedirGuia(x){
    return this.http.get<any>(this.URL +'/'+ `/${x}`)
   }

   modificarGuia(x:string, guia:GuiaModel){
    return this.http.put<any>(this.URL +'/'+ `/${x}`, guia)
   }



    eliminarGuia(x){
    return this.http.delete<any>(this.URL + `/${x}`)
   }

 crearGuia(user:GuiaModel){
     // this.usuario = user.email
    return this.http.post<GuiaModel>(this.URL + '/', user)
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
