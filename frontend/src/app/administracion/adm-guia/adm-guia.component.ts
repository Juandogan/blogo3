import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulos } from '../../modelos/articulos';
import { CrudService } from '../../services/crud.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Clipboard } from '@angular/cdk/clipboard';
import {Location} from '@angular/common';
import { Revista } from '../../modelos/revista';
import { GuiaServiceService } from '../../services/guia-service.service';
import { GuiaModel } from '../../modelos/guia';

@Component({
  selector: 'app-adm-guia',
  templateUrl: './adm-guia.component.html',
  styleUrls: ['./adm-guia.component.css']
})
export class AdmGuiaComponent implements OnInit {


  fechaCreacion:any
  fechaModificacion:any
  //variables para abrir y cerrar los inputs
 inputActivo= true
 inputActivo2= true
 inputActivo3= true
 inputActivo4= true
 inputActivo5= true
 inputActivo6= true
 inputActivo7= true
 inputActivo8= true
 openInputBuscar:Boolean = true;
 openInput:Boolean = true;
 openInput2:Boolean = true;
 openInput3:Boolean = true;
 openInput4:Boolean = true;
 openInput5:Boolean = true;
 openInput6:Boolean = true;
   //VARIABLES

   estadoFiltros : string =""

   //LOADERS
   loading = false;
   loader = true;
   aux=1
   table=true
   loadingGuardar:Boolean = false
   loadingSubir:Boolean = true
   SubirEstado:Boolean = true

 //data y buscadores
   articulos: GuiaModel[] = []
   articuloBusqueda:any
   busqueda="";
   nuevo=false;
   vistas : number = 0;
   fecha	  = ""
   fechaMod = new Date();
   password = false;
   password1 = "";
   public uploadedFiles: Array<File> = [];
   activo=true; //estilo
   cambioPantalla = true;
   loader2 = true;
   cantArt:number = 0;
   filterPost=""
   posicion= 0
   loading2:boolean = false;
   loading3:boolean = false;
   loading4:boolean = false;
   loading5:boolean = false;
   archivoShow:boolean = false;
   nota1:any
   cambioPantalla1=false;
   tituloShow=false;
   subtituloShow=false;
   descripcionShow=false;
   imagenShow=false;
   tituloImagenShow = false;
   ocultar=true;
   ocultar2=true;
   inputDisable = true
   comentarios=""

   //inputs estos estan en NGMODEL en el html de cada input
   resultadoTitulo=""
   resultadoTitulo2=""
   resultadoTitulo3=""
   resultadoTitulo4=""
   resultadoTitulo5=""
   resultadoTitulo6=""
   resultadoTitulo7=""
   resultadoTitulo8=""


 //JSON
 id:string = ""
 _id:string= "";
 titulo:string = "";
 tituloAlt:string = "";
 subtitulo:string = "";
 imagen1:string;
 nota:string = "";
 autor:string = "";
 hash:string = "";
 categoria:string = "";
 fotografia:string = "";
 edicionFotografia:string = "";
 imagen2=""
 imagen3=""
 likes = 0



 fechaPublicacion =new Date();
 art1:string =""
 art2:string =""
 art3:string =""
 art4:string =""
 art5:string =""
 art6:string =""
 art7:string =""
 art8:string =""

 resultadoID=""
 resultadoID2=""
 resultadoID3=""
 resultadoID4=""
 resultadoID5=""
 resultadoID6=""
 resultadoID7=""
 resultadoID8=""

 resultadoCategoria:string =""
 resultadoCategoria2:string =""
 resultadoCategoria3:string =""
 resultadoCategoria4:string =""
 resultadoCategoria5:string =""
 resultadoCategoria6:string =""
 resultadoCategoria7:string =""
 resultadoCategoria8:string =""
 resultadoImagen:string =""
 resultadoImagen2:string =""
 resultadoImagen3:string =""
 resultadoImagen4:string =""
 resultadoImagen5:string =""
 resultadoImagen6:string =""
 resultadoImagen7:string =""
 resultadoImagen8:string =""








   constructor(  private clipboard: Clipboard,
    public crudService: GuiaServiceService,
    public crudService1: CrudService,


    private ruta: ActivatedRoute,
    public location:Location) { }

   ngOnInit(): void {
     this.fecha = String(new Date())



 this.pedirArticulos();


   }



   copyToClipboard(value:any): void {
    // Se copia el texto del input al portapapeles
    this.clipboard.copy(value);

  }
   reload(){
     location.reload()
   }

   nuevaEdicion(){
     this.crudService.unGuia = new GuiaModel
     console.log(this.crudService.unGuia)
     this.resultadoTitulo=""
     this.resultadoTitulo2=""
     this.resultadoTitulo3=""
     this.resultadoTitulo4=""
     this.resultadoTitulo5=""
     this.resultadoTitulo6=""
     this.resultadoTitulo7=""
     this.resultadoTitulo8=""

   //JSON
   this.id = ""
   this._id= "";
   this.titulo = "";
   this.tituloAlt  = "";
   this.subtitulo  = "";
   this.imagen1 ;
   this.nota  = "";
   this.autor  = "";
   this.hash  = "";
   this.categoria  = "";
   this.fotografia  = "";
   this.edicionFotografia  = "";
   this.imagen2=""
   this.imagen3=""
   this.likes = 0



   this.fechaPublicacion =new Date();
   this.art1   =""
   this.art2   =""
   this.art3   =""
   this.art4   =""
   this.art5   =""
   this.art6   =""
   this.art7   =""
   this.art8   =""

   this.resultadoID=""
   this.resultadoID2=""
   this.resultadoID3=""
   this.resultadoID4=""
   this.resultadoID5=""
   this.resultadoID6=""
   this.resultadoID7=""
   this.resultadoID8=""

   this.resultadoCategoria   =""
   this.resultadoCategoria2   =""
   this.resultadoCategoria3   =""
   this.resultadoCategoria4   =""
   this.resultadoCategoria5   =""
   this.resultadoCategoria6   =""
   this.resultadoCategoria7   =""
   this.resultadoCategoria8   =""
   this.resultadoImagen   =""
   this.resultadoImagen2   =""
   this.resultadoImagen3   =""
   this.resultadoImagen4   =""
   this.resultadoImagen5   =""
   this.resultadoImagen6   =""
   this.resultadoImagen7   =""
   this.resultadoImagen8   =""



   }

   back(){
    this.location.back()

  }

  test(){
    this.crudService1.snack('sadsdsd')
  }

   cargarEdit(x){
         this.crudService.pedirGuia(x).subscribe(res=>{this.articuloBusqueda = res as Articulos[]

       if(this.articuloBusqueda.length > 2){
        //  this.crudService.snack('No se encontro');
             return
          }
          else{
           this.crudService.unGuia._id = this.articuloBusqueda._id
                //actualizar todas las variables del arreglo


          }



     })

   }

   reset(){
     this.resultadoTitulo =""

   }

   reset2(){
     this.resultadoTitulo2 =""

   }
   reset3(){
     this.resultadoTitulo3 =""

   }
   reset4(){
     this.resultadoTitulo4 =""

   }
   reset5(){
     this.resultadoTitulo5 =""

   }
   reset6(){
     this.resultadoTitulo6 =""

   }
   reset7(){
     this.resultadoTitulo7 =""

   }
   reset8(){
     this.resultadoTitulo8 =""

   }

   editar(){



       }

       editar2(){



             }

             editar3(){



                   }
                   editar4(){



                         }
                         editar5(){



                               }
                               editar6(){}


                                     editar7(){


                                           }
                                           editar8(){



                                                 }


   pedirUnArticulo(){

     this.crudService.pedirGuia(this.busqueda)


     .subscribe(res=>{this.articuloBusqueda = res as Articulos[]


       if(this.articuloBusqueda.length > 2){

        //  this.crudService.snack('No se encontro');
         //
        return
       }
       this.crudService.unGuia._id = this.articuloBusqueda._id



         if(this.aux === 1 ){
          this.resultadoTitulo = this.articuloBusqueda?.titulo
          // this.crudService.unGuia.resultadoID = this.articuloBusqueda?._id
          // this.crudService.unArticulo.resultadoCategoria = this.articuloBusqueda?.subtitulo
          // this.crudService.unArticulo.resultadoImagen = this.articuloBusqueda?.imagen1
          // this.crudService.unArticulo.art1 = this.resultadoTitulo

          this.busqueda = ""
          this.aux = 2

          return
          }



         if(this.aux === 2){
           this.resultadoTitulo2 = this.articuloBusqueda?.titulo
          //  this.crudService.unArticulo.resultadoID2 = this.articuloBusqueda?._id
          //  this.crudService.unArticulo.resultadoCategoria2 = this.articuloBusqueda?.subtitulo
          //  this.crudService.unArticulo.resultadoImagen2 = this.articuloBusqueda?.imagen1
          //  this.crudService.unArticulo.art2 = this.resultadoTitulo2
            this.busqueda = ""
           this.aux=3
           return
           }


         if(this.aux === 3){
           this.resultadoTitulo3 = this.articuloBusqueda?.titulo

            this.busqueda = ""
                    this.aux=4
                   return }


         if(this.aux === 4){
           this.resultadoTitulo4 = this.articuloBusqueda?.titulo

           this.busqueda = ""
            this.aux=5
            return
           }

            if(this.aux === 5){

              this.busqueda = ""
              this.aux = 6
             return  }

              if(this.aux === 6){

                this.busqueda = ""
                this.aux = 7
               return }




      })


   }

   pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
     this.crudService.pedirGuias().subscribe(res =>{

     this.articulos = res as GuiaModel[] ; // guardo resultados de la peticion en variable productos.
         this.loader2 = false
      this.cantArt = this.articulos.length
   this.articulos = this.articulos.reverse()
     this.articulos = this.articulos.filter((element, index) => index < this.articulos.length - 1);


     console.log(this.articulos)

     for (let i = 0 ; i  < this.articulos.length; i++ ){
        //  this.vistas = this.vistas + this.articulos[i].vistas
     }
       console.log(this.vistas)

       });//fin de subscribe
     } //fin de pedirProductos


     eliminarArticulo(id:any){
      this.loader= false
       this.crudService.eliminarGuia(id).subscribe(res =>{
        //  this.crudService.snack(res);
         this.loader = true ;
       })

       }


 onUpload(){
   let formData = new FormData();

    for (let i = 0 ; i  < this.uploadedFiles.length; i++ ){

    formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)

    }
    this.crudService1.uploadFile(formData).subscribe(res => {
     console.log("formdata", formData)
       var link = Object.values(res)
      console.log(link,"linkN")

     this.crudService.unGuia.imagen = String(link) ;
     this.imagen1  = String(link) ;
     this.loadingSubir = true


    })

  };


 fnOcultar(){
   this.ocultar2=true
   this.loading3=false
   this.imagenShow=true
 };

  onFileChange(e){
   this.SubirEstado = false;
   this.uploadedFiles = e.target.files;
 };






      seleccionado(x:number){

       this.aux = x

      }


      agregarPublicacion(){
       this.loadingGuardar = true
       this.crudService.unGuia.titulo = this.titulo;
       this.crudService.unGuia.subtitulo = this.subtitulo


         if( this.crudService.unGuia?._id)
         {
               this.crudService.modificarGuia(this.crudService.unGuia._id, this.crudService.unGuia)
         .subscribe(res => {
           this.loadingGuardar= false

          //  this.crudService.snack('Modificado!x')
          });
           // this.reload()

       }
         else  {
          //actualizar todas las variavles de:
           // this.crudService.unArticulo.categoria = "revista"
           this.crudService.unGuia.vistas = 0
           this.crudService.crearGuia(this.crudService.unGuia)
           .subscribe(res => {
           this.loadingGuardar= false
           // this.reload()
             })
       }

       };



 }
