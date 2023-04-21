import { Injectable } from '@angular/core';
import { Articulos } from '../modelos/articulos';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSnackBarConfig} from '@angular/material/snack-bar';
import { Revista } from '../modelos/revista';

 //import * as moment from 'moment'
//import { of } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class CrudService {


   readonly URL_API  = "http://191.101.18.184:3000/ccam";
   
  // readonly URL_AP3  = "http://localhost:3000/revista";
  // readonly URL_API2  = "http://localhost:3000/upload";

  //readonly URL_API  = "http://66.97.44.139/ccam";
  readonly URL_AP3  = "http://191.101.18.184:3000/revista";
  readonly URL_API2  = "http://191.101.18.184:3000/upload";
  readonly URL_API4  = "http://191.101.18.184:3000/categorias";
  


  Articulos:Articulos[]=[];
  unArticulo:Articulos
  revista:Revista
  unRevista:Revista
  loading=true;
  cambioPantalla = true;


  constructor(private http:HttpClient,  private location:Location, private snackBar:MatSnackBar) {
     let config = new MatSnackBarConfig();
      config.panelClass = 'text-align:center';
    this.unArticulo = new Articulos();
    this.revista = new Revista()


  }



  cancel():void {
    this.location.back(); // <-- go back to previous location on cancel
    }


  //CRUD
   uploadFile(formData:any){
  console.log('Bandera', formData)
   return this.http.post('http://191.101.18.184:3000/upload', formData)   // en produccion poner '/upload' por this.URL_API2
  // en desarrollo poner - this.URL_API2  - por '/upload '
    }


  getArticulos() {
     return this.http.get(this.URL_API);

  };

  //borrado atenti
  getRevista() {
      return this.http.get(this.URL_AP3);

  };

   getOneArticulo(_id){
    return this.http.get(this.URL_API + `/${_id}`);
  };

  getCategorias(_id){
    return this.http.get(this.URL_API4 + `/${_id}`);
  };

  getOneRevista(_id:any){
    return this.http.get(this.URL_AP3 + `/${_id}`);
  };

  getUltimaRevista(){
    return this.http.get(this.URL_AP3);
  };

  addArticulo(articulo:Articulos) {

    return this.http.post(this.URL_API, articulo);


  };
  addRevista(revista:Revista) {

    return this.http.post(this.URL_AP3, revista);


  };

  modificarArticulo(articulo:Articulos) {
    return this.http.put(this.URL_API + `/${articulo._id}` , articulo);

  };


  modificarRevista(revista:Revista) {
    console.log(revista._id)
    return this.http.put(this.URL_AP3 + `/${revista._id}` , revista);

  };



  deleteArticulo(_id:string) {
    return this.http.delete(this.URL_API + `/${_id}`);

  };

  deleteRevista(_id:string) {
    return this.http.delete(this.URL_AP3 + `/${_id}`);

  };

  cut(value:any){
    var corte = value.slice(8)

   return corte
 };



snack(value:any){

 this.snackBar.open(value,'',{duration:2000, horizontalPosition:'center', verticalPosition:'bottom'})
    // alert(value)

}

 };




  // uploadFile(formData){
  //   return this.http.post(this.URL_API2, formData)
  //   // se deja solo '/upload' en produccion

  // }



//FIN DE CLASE GENERAL
