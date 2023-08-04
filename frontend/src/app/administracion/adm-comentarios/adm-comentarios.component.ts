import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { GuiaServiceService } from '../../services/guia-service.service';

@Component({
  templateUrl: './adm-comentarios.component.html',
  styleUrls: ['./adm-comentarios.component.css'],
})
export class AdmComentariosComponent implements OnInit {
  constructor(private ruta: ActivatedRoute, public crudService: CrudService, private guiaService: GuiaServiceService) {}

  nota: any;
  aux = false;
  pendientes = false
  loader = true
  comentarios = [];
  ngOnInit() {
    this.ruta.data.subscribe((data) => {
      this.loader =false
      this.nota = Object.entries(data).map((i) => i[1]);


      var aux = -1;

          console.log('detes')
       for (var x of this.nota[0]) {
         if (x.contadorComentarios === 'Nuevo') {
           this.comentarios.push(x);
         }

         if(this.comentarios.length === 0 ){
           this.pendientes = true
         }else{this.pendientes = false}

       }


      this.guiaService.pedirGuias().subscribe(res=>{
         var guias = res
         for (var x of guias) {
           if (x.contadorComentarios === 'Nuevo') {
             this.comentarios.push(x);
           }


           if(this.comentarios.length === 0 ){
             this.pendientes = true
           }else{this.pendientes = false}

         }

      })





    });

  }


  cut(x:any){ 
    return x.substring(9)
  }
}
