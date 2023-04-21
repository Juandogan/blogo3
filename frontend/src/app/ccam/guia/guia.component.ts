import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuiaModel } from '../../modelos/guia';
import { GuiaServiceService } from '../../services/guia-service.service';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent implements OnInit {

  estado=false
  guias:GuiaModel[]
  loader= true
  provincia=""
  constructor(private guiaService:GuiaServiceService, private ruta:ActivatedRoute,) { }

  ngOnInit(): void {
    this.pedirGuias()

    this.ruta.params.subscribe(params=>{this.provincia = params['_id']; })


  }

  pedirGuias(){

    this.guiaService.pedirGuias().subscribe(res=>{

        this.guias = res
        this.guiaService.unGuia = res
        this.loader = false
        this.guias = this.guias.reverse()
        this.guias = this.guias.filter((element, index) => index < this.guias.length - 1);
        this.guias = this.guias.reverse()
        console.log(this.guias,'asas')
        this.loader = false

                                                    }) //fin de suscribe

  }  //fin de pedir guias



  test(prov){

     }



}
