import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulos } from '../../modelos/articulos';
import { CrudService } from '../../services/crud.service';
@Component({
  selector: 'app-editorArticulo',
  templateUrl: './editorArticulo.component.html',
  styleUrls: ['./editorArticulo.component.css']
})
export class EditorArticuloComponent implements OnInit {

nota:any
loader = true
test:Articulos = new Articulos

  constructor(private ruta:ActivatedRoute, public crudService:CrudService) { }


  ngOnInit() {
    window.scroll(0,0)
    this.ruta.data.subscribe((data)=>{
    this.nota = Object.entries(data).map(i => i[1])
    console.log(this.nota[0]?.nota)
    this.crudService.unArticulo = this.nota[0]
    this.loader = false})}

    saltos2(data: string) {
      var aux =  data.split('http://191.101.18.184:3000/').join('https://191.101.18.184:3000/')
      console.log(aux)
     return aux
     
     }
};
