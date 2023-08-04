import { Location } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { CrudService } from '../../services/crud.service';
import { GuiaServiceService } from '../../services/guia-service.service';

@Component({
  templateUrl: './comentarios-editor.component.html',
  styleUrls: ['./comentarios-editor.component.css'],
})
export class ComentariosEditorComponent implements OnInit {
  loader = false
  articulos: any;
  comentarios: any;
  route:any
  estadoAux:any
  constructor(
    private guiaService: GuiaServiceService,
    private crudService: CrudService,
    private location: Location,
    private ruta:ActivatedRoute

  ) {

   this.route = ruta.snapshot
  }


   ngOnInit(): void {

 var id = this.route.paramMap.get('_id')




    this.ruta.data.subscribe((data) => {
      this.articulos = Object.entries(data).map((i) => i[1]);
      console.log('asillega', this.articulos[0]);

      if(this.articulos[0]== null ) {
this.guiaService.pedirGuia(id).subscribe(res=>{
    this.articulos = res
    this.estadoAux = 2
  var aux = this.articulos.comentarios;
  if (aux) {
    this.comentarios = aux.split('<div>');
      this.comentarios = this.comentarios
      console.log(this.comentarios)

  } else {
    this.comentarios = [];

  }
})




      }






      var aux = this.articulos[0]?.comentarios;
      this.estadoAux = 1
      if (aux) {
        this.comentarios = aux.split('<div>');
          this.comentarios = this.comentarios.reverse()

      } else {
        this.comentarios = [];

      }
    });
  }

  //FUNCIONES
  borrar(x, y) {
    console.log(y);

    x.splice(y, 1);
    console.log(x);
  }

  back() {
    this.location.back();
  }

  guardar(x) {
    var aux = '';
    var aux2 = [];

    for (var z of x) {
      if (z !== '') {
        console.log('z', z);
        aux = aux + '<div>' + z;
        console.log(aux);
      }
    }

    //  x.split('<>').join('<hr>');

    // console.log(aux2?.toString())
    console.log(aux2);

    if(this.estadoAux === 1 ){

      console.log('guarda en articulos')

    this.articulos[0].comentarios = aux;
    this.articulos[0].contadorComentarios = '';
    this.crudService.modificarArticulo(this.articulos[0]).subscribe((res) => {
      this.crudService.snack('Confirmado!');
      console.log('Confirmado!')
      this.location.back();});

    } else{
      console.log('guarda en guioa')

      this.articulos.comentarios = aux;
      this.articulos.contadorComentarios = '';
      this.guiaService.modificarGuia(this.articulos._id, this.articulos).subscribe((res) => {
        this.crudService.snack('Confirmado!');
        console.log('Confirmado!')
        this.location.back();});





    }









  }
}
