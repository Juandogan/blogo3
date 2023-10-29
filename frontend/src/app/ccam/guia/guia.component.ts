import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuiaModel } from '../../modelos/guia';
import { GuiaServiceService } from '../../services/guia-service.service';
import { CrudService } from 'src/app/services/crud.service';
import { UpperCasePipe } from '@angular/common';

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
  articulos:any

  constructor(private guiaService:GuiaServiceService, private ruta:ActivatedRoute, private crudService:CrudService) { }

  ngOnInit(): void {
    this.pedirGuias()
    

    this.ruta.params.subscribe(params=>{this.provincia = params['_id'];
  console.log(this.provincia)
  this.pedirProvincia( this.quitarAcentos(  this.provincia.toUpperCase())) 
   })


  }

  pedirProvincia(id:any){
    console.log(id)
    this.crudService.getProvincia(id).subscribe(res=>{
      this.articulos = res
      console.log(res)
    })
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

     quitarAcentos(str: string): string {
      // Definir un mapa de caracteres acentuados y sus equivalentes sin acento
      const acentosMap: { [key: string]: string } = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'ü': 'u',
        'ñ': 'n',
        'Á': 'A',
        'É': 'E',
        'Í': 'I',
        'Ó': 'O',
        'Ú': 'U',
        'Ü': 'U',
        'Ñ': 'N'
      };
    
      // Utilizar una expresión regular para buscar y reemplazar los caracteres acentuados
      return str.replace(/[áéíóúüñÁÉÍÓÚÜÑ]/g, match => acentosMap[match] || match);
    }
    

    

}
