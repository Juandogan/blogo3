import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../services/crud.service'
import { Articulos } from '../../modelos/articulos';

@Component({
  selector: 'app-lateral-intercalado',
  templateUrl: './lateral-intercalado.component.html',
  styleUrls: ['./lateral-intercalado.component.css']
})
export class LateralIntercaladoComponent implements OnInit {
  articulos: Articulos[] = []

  articuloBusqueda: Articulos[] = []


  @Input('data') nota : any ;
  @Input('anuncios') anuncios: any;;
  @Input('estado') estado : boolean ;

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    console.log('badenra',this.nota)

  }


  cut(value:any){

    return value


};

}
