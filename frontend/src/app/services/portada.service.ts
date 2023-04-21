import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PortadaModel } from '../modelos/portada';

@Injectable({
  providedIn: 'root'
})
export class PortadaService {

  //portada:PortadaModel[]=[];
  portada = new PortadaModel
  public URL ="http://191.101.18.184:3000/portada"
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

   modify(x:string, portada:PortadaModel){
    return this.http.put<any>(this.URL +'/'+ `/${x}`, portada)
   }



    eliminarUsuario(x){
    return this.http.delete<any>(this.URL + `/${x}`)
   }

 crearAnuncio(portada:PortadaModel){
     // this.usuario = user.email
    return this.http.post<any>(this.URL + '/', portada)
 }
}