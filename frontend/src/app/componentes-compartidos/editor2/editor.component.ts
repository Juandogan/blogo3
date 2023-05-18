import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '../../ckeditor4/';
import { Revista } from '../../modelos/revista';
import { CrudService } from '../../services/crud.service';


@Component({
  selector: 'app-editor2',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class Editor2Component implements OnInit {


  @Input('data') data : any ;
  @Input('posicion') posicion : any ;

  @Input('art') art:any;
  @Input('id') id:any;




  public loader = true
  public loader1 = false
  public myEditor:any
  public nota:string = "";
  public editorShow=true


   public editorConfig = {

     simpleUpload: {
       // The URL that the images are uploaded to.
       uploadUrl: "http://191.101.18.184:3000/upload",
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

    this.Editor.create( document.querySelector( '.document-editor__editable' ), {

      toolbar: {
        items: [
          'heading',
          // '|',
          // 'fontSize',
          // 'fontFamily',
          // '|',
          // 'fontColor',
          // 'fontBackgroundColor',
          // '|',
           'bold',
          // 'italic',
          // 'underline',
          // 'strikethrough',
          // '|',

          // '|',
          // 'numberedList',
          // 'bulletedList',
          // // '|',
          // 'outdent',
          // 'indent',
          // '|',
          // // 'todoList',
           'link',
          // // 'blockQuote',
          'imageUpload',
          'insertTable',
          'mediaEmbed',
          '|',
          'undo',
          'redo'
        ]
      },

      heading: {
        options: [
            { model: 'paragraph', title: 'Parrafos', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Encabezado', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Titulo1', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h4', title: 'Pie de foto', class: 'ck-heading_heading3' },

        ]
    },

  link: {
            // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
            addTargetToExternalLinks: true,



        },


      simpleUpload: {
      uploadUrl: "http://191.101.18.184:3000/upload2/",

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
    if ( aux  = this.crudService.revista.editorial ){
      console.log('sin cambios')

    }else { console.log('hay cambios')}


  }


  back(){
    this.location.back()
  }


// agregarPublicacion(){

//     this.loader1 = true
//     this.crudService.revista.editorial = this.myEditor.getData()

//       this.crudService.modificarRevista(this.crudService.revista)
//       .subscribe(res => {this.loader = true;
//       this.location.back()
//       });


//     };

agregarPublicacion(){

this.crudService.unRevista = this.data

  this.loader1 = true

 this.crudService.unRevista.editorial =  this.myEditor.getData()


// ACA INVERTIR PARA LIMPIAR% HOJA EN BLACO
       if( this.crudService.unRevista.editorial )
      {
       console.log(this.crudService.unRevista)
      this.crudService.modificarRevista(this.crudService.unRevista)
      .subscribe(res => {this.loader = true;

               this.location.back()


      });
      }
        else  {
          this.crudService.unRevista.editorial = ""
           this.crudService.addRevista(this.crudService.unRevista).subscribe(res => {

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
