import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../services/crud.service'
import { Articulos } from '../../modelos/articulos';
@Component({
  selector: 'app-articulo-relacionado',
  templateUrl: './articulo-relacionado.component.html',
  styleUrls: ['./articulo-relacionado.component.css']
})
export class ArticuloRelacionadoComponent implements OnInit {

  articulos: Articulos[] = []

  articuloBusqueda: Articulos[] = []


  @Input('data') nota : any ;
  @Input('estado') estado : boolean ;
  
  constructor(public crudService:CrudService) { }

  ngOnInit(): void {

console.log('articuloRelacionado',this.nota)
  }


  cut(value:any){
    if(value){
    var corte = value.slice(2)
    return corte
  }else

 return value;


};

}
