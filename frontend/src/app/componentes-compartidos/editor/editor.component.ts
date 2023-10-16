import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '../../ckeditor4/';
import { Articulos } from '../../modelos/articulos';
import { CrudService } from '../../services/crud.service';

import {  timer  } from 'rxjs';




@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {


  @Input('data') data : any ;
  @Input('posicion') posicion : any ;

  @Input('art') art:any;
  @Input('id') id:any;



  guardado = false
  guardando = false
  public loader = true
  public loader1 = false
  public myEditor:any
  public nota:string = "";
  public editorShow=true


   public editorConfig = {

     simpleUpload: {
       // The URL that the images are uploaded to.
       uploadUrl: "https://culturademontania.org.ar/upload",
          // Headers sent along with the XMLHttpRequest to the upload server.
       headers: {
         'X-CSRF-TOKEN': 'CSFR-Token',
         Authorization: 'Bearer <JSON Web Token>'
       }
     }

   };

     public Editor = ClassicEditor;

     public onReady( editor:any ) {
         editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );}



  constructor(public crudService:CrudService, public location:Location) {


  }

  ngOnInit(): void {
console.log(this.data)
    this.Editor.create( document.querySelector( '.document-editor__editable' ), {

     

      heading: {
        options: [
            { model: 'paragraph', title: 'Parrafos', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Titulo', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Titulo2', class: 'ck-heading_heading1' },    
            { model: 'heading3', view: 'h3', title: 'Subtitulo', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Pie de foto', class: 'ck-heading_heading4' },


        ]
    },

  link: {
            // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
            addTargetToExternalLinks: true,



        },


      simpleUpload: {
      uploadUrl: "https://culturademontania.org.ar/upload2/",

      headers: {
        'X-CSRF-TOKEN': 'CSFR-Token',
        Authorization: 'Bearer <JSON Web Token>'
      }

    }
          } )

          .then( editor => {

      const toolbarContainer = document.querySelector( '.document-editor__toolbar' );
      toolbarContainer.appendChild( editor.ui.view.toolbar.element );
           this.myEditor = editor
      this.myEditor.setData(this.data.nota)

  } )
  .catch( err => {
      console.error( err );
  } );

  }

  comprobarCambios(){
    var aux = this.myEditor.getData()
    if ( aux  = this.crudService.unArticulo.nota ){
      console.log('sin cambios')

    }else { console.log('hay cambios')}


  }


  back(){
    this.location.back()
  }


agregarPublicacion(){



this.loader1 = true
  this.crudService.unArticulo.nota = this.myEditor.getData()
    if( this.id )
    {
     console.log(this.crudService.unArticulo)
    this.crudService.modificarArticulo(this.crudService.unArticulo)
    .subscribe(res => {this.loader = true;

      this.guardando = false
      this.guardado = true
      this.loader1 = false
      timer(3000).subscribe(res=>{this.guardado = false; this.loader=false;

       });

    });
    }
      else  {
       this.crudService.unArticulo.vistas = 0
        this.crudService.addArticulo(this.crudService.unArticulo).subscribe(res => {


          this.loader = true; this.crudService.snack("Guardado!")
          this.location.back()
        })
    }


  };

  scrollCenter(){
    window.scroll(0,165)
  }
  scrollReset(){
    window.scroll(0,0)
  }
}
