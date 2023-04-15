import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from 'src/app/ckeditor2/';

import { CrudService } from '../app/services/crud.service';





@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {


  @Input('data') data : any ;
  @Input('art') art:any;
  @Input('id') id:any;

  public loader = true
  public myEditor:any
  public nota:string = "";
  public editorShow=true

  public editorConfig = {

    simpleUpload: {
         uploadUrl: "http://66.97.44.139/upload2",
         headers: {
         'X-CSRF-TOKEN': 'CSFR-Token',
         Authorization: 'Bearer <JSON Web Token>'
       },




     }};

     public Editor = ClassicEditor;
     public onReady( editor:any ) {
         editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );}



  constructor(public crudService:CrudService) { }

  ngOnInit(): void {



    //ACA CREO EL EDITOR UNA INSTANCIA
    this.Editor.create( document.querySelector( '.document-editor__editable' ), {
      // plugins: [ Essentials, Paragraph, Bold, Italic, Alignment ],


      heading: {
          options: [
              { model: 'paragraph', title: 'Parrafos', class: 'ck-heading_paragraph' },
              { model: 'heading1', view: 'h3', title: 'Encabezado', class: 'ck-heading_heading1' },
              { model: 'heading2', view: 'h2', title: 'Titulos', class: 'ck-heading_heading2' },

          ]
      },


       link: {
            // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
            addTargetToExternalLinks: true,
        },


      simpleUpload: {
      uploadUrl: "http://66.97.44.139/upload2",

      headers: {
        'X-CSRF-TOKEN': 'CSFR-Token',
        Authorization: 'Bearer <JSON Web Token>'
      }

    },


          } )

          .then( (editor: { ui: { view: { toolbar: { element: any; }; }; }; }) => {

      const toolbarContainer = document.querySelector( '.document-editor__toolbar' );
      if(toolbarContainer){
      toolbarContainer.appendChild( editor.ui.view.toolbar.element );
      this.myEditor = editor
    }

  } )
  .catch( (err: any) => {
      console.error( err );
  } );

  }

  comprobarCambios(){
    var aux = this.myEditor.getData()
    if ( aux  = this.crudService.unArticulo.nota ){
      console.log('sin cambios')

    }else { console.log('hay cambios')}


  }


agregarPublicacion(){

  this.crudService.unArticulo.nota = this.myEditor.getData()
    // this.crudService.unProducto.fecha = String(this.fachaPublicacion)
    if( this.id )
    {
    this.crudService.modificarArticulo(this.crudService.unArticulo)
    .subscribe(res => {this.loader = true; this.crudService.snack("MODIFICADO!")});
    // window.location.href = 'http://168.197.50.191/gestor'
    }
      else  {
       this.crudService.unArticulo.vistas = 0
      //  this.crudService.unProducto.fecha = String(this.fachaPublicacion)
         this.crudService.addArticulo(this.crudService.unArticulo).subscribe(res => { this.loader = true; this.crudService.snack("Guardado!")
        //  window.location.href = 'http://168.197.50.191/gestor'
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
