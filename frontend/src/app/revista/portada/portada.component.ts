import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  @Input('nro') nro : any ;
  @Input('data') data : any ;
 numero=0
 link=""
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
   this.numero = this.nro + 137
   this.link = this.data.imgPortada
   console.log('desde portada',this.data)
  }

  cut(value:any){
    var corte = value.slice(2)

   return corte
 }; 

hola(){
  this.crudService.snack('')
}


}
