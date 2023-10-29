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
    this.nota[0].nota = this.saltos2(this.nota[0]?.nota)
    this.crudService.unArticulo = this.nota[0]
    
    this.loader = false})}

    saltos2(data: string) {
      
 var data = data.split('https://www.culturademontania.org.ar/').join('https://old.culturademontania.org.ar/')
 data = data.split('https://culturademontania.org.ar/').join('https://old.culturademontania.org.ar/')
 data = data.split('http://www.culturademontania.org.ar/').join('https://old.culturademontania.org.ar/')
 data = data.split('http://191.101.18.184:3000/').join('https://www.culturademontania.org.ar/')
 data = data.split('https://old.culturademontania.org.ar/ccam/').join('https://www.culturademontania.org.ar/ccam/') 



      console.log(data)
     return data
     
     }
};
