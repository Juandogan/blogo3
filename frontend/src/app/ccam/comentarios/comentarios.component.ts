import { Component, OnInit,Input } from '@angular/core';
import { Articulos } from '../../modelos/articulos';
import { CrudService } from '../../services/crud.service';
import * as moment from 'moment';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { GuiaServiceService } from '../../services/guia-service.service';
import { GuiaModel } from '../../modelos/guia';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
  animations: [
    trigger(
      'inOutAnimation', [
        transition(':enter', [
          style({ opacity: 0}),
          animate('1200ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('1200ms', style({opacity: 0}))
        ])
      ]
    )
  ]


})

export class ComentariosComponent implements OnInit {


  comentario =""
  nombre =""
  email = ""
  articulos: Articulos[] = []
  guias: GuiaModel[] = []
  formulario = false
  btnComentar = true
  mensaje = false
  verMas = false

  loading = false

  @Input('data') nota : any ;
  @Input('tipo') tipo : any ;

  comentarios:any
  constructor(public crudService:CrudService, private guiaService:GuiaServiceService) { }

  ngOnInit(): void {


    var aux = this.nota.comentarios



    if( aux ){
      this.comentarios = aux.split("<hr>").reverse()
       } else {
      this.comentarios = []
     }



  }


  enviar(){   const hoy = Date.now();

 var post =   moment(hoy).format("YYYY-MM-DD hh:mm") + ' ' + this.nombre  + ': ' + this.comentario


  }



  agregarPublicacion(){



if(this.tipo ==="articulo"){



    if(this.nombre ==="" || this.comentario === "" || this.email === "" ){
       this.crudService.snack('Faltan datos')
       return
       }

else{

this.formulario=false;
const hoy = Date.now();
if(this.nota.comentarios === undefined || this.nota.comentarios ===null){
  var post = moment(hoy).format("DD/MM/YY hh:mm") + ' ' +'<b>'+ this.nombre  +'</b>'+ ': ' + '<br>' + this.comentario + '<hr>'
} else {
var post =  this.nota.comentarios + '<div>' + moment(hoy).format("DD/MM/YY hh:mm") + '</div>' + ' ' + '<b>'+ this.nombre  +'</b>'+ ': ' + '<br>'
 + this.comentario + '<hr>'
}


    this.nota.correos = this.nota.correos + this.email + " - "
    this.nota.comentarios = post
    this.nota.contadorComentarios = 'Nuevo'
    //this.nota.comentarios =""  //borrar comentarios
    
    this.loading = true
    this.crudService.modificarArticulo(this.nota).subscribe(res =>
    {this.comentario = "" ;this.nombre =""; this.email=""
               this.comentario = this.nota
                  this.loading = false
                  this.crudService.snack('Mensaje enviado')
                  var aux = this.nota.comentarios
                  if( aux  ){
                    this.comentarios = aux.split("<hr>").reverse()
                    console.log(this.comentarios,'dale')
                    this.comentario = ""
                  } else {

                    return
                  }

                });

    };
  }else{


    if(this.nombre ==="" || this.comentario === "" || this.email === "" ){
      this.crudService.snack('Faltan datos')
      return
      }

else{

this.formulario=false;
const hoy = Date.now();
if(this.nota.comentarios === undefined || this.nota.comentarios ===null){

 var post = moment(hoy).format("DD/MM/YY hh:mm") + ' ' +'<b>'+ this.nombre  +'</b>'+ ': ' + '<br>' + this.comentario + '<hr>'
} else {
var post =  this.nota.comentarios + '<div>' + moment(hoy).format("DD/MM/YY hh:mm") + '</div>' + ' ' + '<b>'+ this.nombre  +'</b>'+ ': ' + '<br>'
+ this.comentario + '<hr>'
}


   this.nota.correos = this.nota.correos + this.email + " - "
   this.nota.comentarios = post
   this.nota.contadorComentarios = 'Nuevo'
   //this.nota.comentarios =""  //borrar comentarios
   this.loading = true
   this.guiaService.modificarGuia(this.nota._id, this.nota).subscribe(res =>
   {this.comentario = "" ;this.nombre =""; this.email=""
              this.comentario = this.nota
                 this.loading = false
                 console.log("**********************",res)
                 this.crudService.snack('Mensaje enviado')
                 var aux = this.nota.comentarios
                 if( aux  ){
                   this.comentarios = aux.split("<hr>").reverse()
                   console.log(this.comentarios,'dale')
                   this.comentario = ""
                 } else {

                   return
                 }

               });

   };
 }


  //sino del tipo de comentarios para ver donde lo graba
}





}


//fin de if por articulo



