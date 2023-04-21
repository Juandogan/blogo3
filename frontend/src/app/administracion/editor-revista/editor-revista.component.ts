import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor  from '@ckeditor/ckeditor5-angular';
import { Articulos } from '../../modelos/articulos';
import { CrudService } from '../../services/crud.service';
@Component({
  selector: 'app-editor-revista',
  templateUrl: './editor-revista.component.html',
  styleUrls: ['./editor-revista.component.css']
})
export class EditorRevistaComponent implements OnInit {
  public Editor= ClassicEditor ;
  nota:any
  loader = true
  test:Articulos = new Articulos

    constructor(private ruta:ActivatedRoute, public crudService:CrudService) { }


    ngOnInit() {

      this.ruta.data.subscribe((data)=>{
      this.nota = Object.entries(data).map(i => i[1])
      console.log('******',this.nota[0].editorial)
      this.test = this.nota[0]?.editorial
      this.loader = false})}
  };
