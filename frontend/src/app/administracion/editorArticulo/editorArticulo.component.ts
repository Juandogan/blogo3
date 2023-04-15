import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulos } from 'src/app/modelos/articulos';
import { CrudService } from 'src/app/services/crud.service';
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
};