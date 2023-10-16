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
  public URL ="https://www.culturademontania.org.ar/portada"
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