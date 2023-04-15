import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulos } from 'src/app/modelos/articulos';
import { CrudService } from 'src/app/services/crud.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Clipboard } from '@angular/cdk/clipboard';
import {Location} from '@angular/common';
import { Revista } from 'src/app/modelos/revista';

import {  timer  } from 'rxjs';

@Component({
  templateUrl: './adm-revista.component.html',
  styleUrls: ['./adm-revista.component.css']
})
export class AdmRevistaComponent implements OnInit {
  // public Editor = ClassicEditor;
  guardando = false
  guardado = false
  borrado = false
  borrando = false
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
   articulos: Revista[] = []
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

 autor1:string =""
 autor2:string =""
 autor3:string =""
 autor4:string =""
 autor5:string =""
 autor6:string =""
autor7:string =""
autor8:string =""








   constructor(  private clipboard: Clipboard,
    public crudService: CrudService,
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
     this.crudService.unArticulo = new Articulos
     console.log(this.crudService.unArticulo)
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

   this.autor1=""
   this.autor2=""
   this.autor3=""
   this.autor4=""
   this.autor5=""
   this.autor6=""
   this.autor7=""
   this.autor8=""


   }

   back(){
    this.location.back()
  }

   cargarEdit(x){
         this.crudService.getOneArticulo(x).subscribe(res=>{this.articuloBusqueda = res as Articulos[]

       if(this.articuloBusqueda.length > 2){
         this.crudService.snack('No se encontro');
             return
          }
          else{
           this.crudService.unArticulo.comentarios= this.comentarios
           this.crudService.unArticulo._id = this.articuloBusqueda._id
           this.crudService.unArticulo.fecha = String(this.fechaPublicacion)
           this.crudService.unArticulo.titulo = this.titulo;
           this.crudService.unArticulo.subtitulo = this.subtitulo
           this.crudService.unArticulo._id = this.articuloBusqueda._id
           this.categoria = this.articuloBusqueda.categoria
           this._id = this.articuloBusqueda._id
           this.titulo =  this.articuloBusqueda.titulo
           this.subtitulo =  this.articuloBusqueda.subtitulo
           this.resultadoTitulo = this.articuloBusqueda?.art1
           this.resultadoTitulo2 = this.articuloBusqueda?.art2
           this.resultadoTitulo3 = this.articuloBusqueda?.art3
           this.resultadoTitulo4 = this.articuloBusqueda?.art4
           this.resultadoTitulo5 = this.articuloBusqueda?.art5
           this.resultadoTitulo6 = this.articuloBusqueda?.art6
           this.resultadoTitulo7 = this.articuloBusqueda?.art7
           this.resultadoTitulo8 = this.articuloBusqueda?.art8
            this.autor1 = this.articuloBusqueda?.autor1
            this.autor2 = this.articuloBusqueda?.autor2
            this.autor3 = this.articuloBusqueda?.autor3
            this.autor4 = this.articuloBusqueda?.autor4
            this.autor5 = this.articuloBusqueda?.autor5
            this.autor6 = this.articuloBusqueda?.autor6
            this.autor7 = this.articuloBusqueda?.autor7
            this.autor8 = this.articuloBusqueda?.autor8



           this.crudService.unArticulo.autor = this.articuloBusqueda?.autor
           this.autor =this.articuloBusqueda?.autor

           this.imagen1 = this.articuloBusqueda?.imagen1
           this.crudService.unArticulo.imagen1 = this.articuloBusqueda?.imagen1

           this.imagen2 = this.articuloBusqueda?.imagen2
           this.crudService.unArticulo.imagen2 = this.articuloBusqueda?.imagen2

           this.imagen3 = this.articuloBusqueda?.imagen3
           this.crudService.unArticulo.imagen3 = this.articuloBusqueda?.imagen3



           this.nuevo=true;
           this.table = false


           this.crudService.unArticulo.art1 = this.articuloBusqueda?.art1
           this.crudService.unArticulo.art2 = this.articuloBusqueda?.art2
           this.crudService.unArticulo.art3 = this.articuloBusqueda?.art3
           this.crudService.unArticulo.art4 = this.articuloBusqueda?.art4
           this.crudService.unArticulo.art5 = this.articuloBusqueda?.art5
           this.crudService.unArticulo.art6 = this.articuloBusqueda?.art6
           this.crudService.unArticulo.art7 = this.articuloBusqueda?.art7
           this.crudService.unArticulo.art8 = this.articuloBusqueda?.art8

           this.crudService.unArticulo.fechaMod = String(this.fechaMod)

            this.crudService.unArticulo.resultadoCategoria = this.articuloBusqueda?.resultadoCategoria
            this.crudService.unArticulo.resultadoCategoria2 = this.articuloBusqueda?.resultadoCategoria2
            this.crudService.unArticulo.resultadoCategoria3 = this.articuloBusqueda?.resultadoCategoria3
            this.crudService.unArticulo.resultadoCategoria4 = this.articuloBusqueda?.resultadoCategoria4
            this.crudService.unArticulo.resultadoCategoria5 = this.articuloBusqueda?.resultadoCategoria5
            this.crudService.unArticulo.resultadoCategoria6 = this.articuloBusqueda?.resultadoCategoria6
            //this.crudService.unArticulo.resultadoCategoria7 = this.articuloBusqueda?.resultadoCategoria7
            //this.crudService.unArticulo.resultadoCategoria8 = this.articuloBusqueda?.resultadoCategoria8

            this.crudService.unArticulo.resultadoID = this.articuloBusqueda?.resultadoID
            this.crudService.unArticulo.resultadoID2 = this.articuloBusqueda?.resultadoID2
            this.crudService.unArticulo.resultadoID3 = this.articuloBusqueda?.resultadoID3
            this.crudService.unArticulo.resultadoID4 = this.articuloBusqueda?.resultadoID4
            this.crudService.unArticulo.resultadoID5 = this.articuloBusqueda?.resultadoID5
            this.crudService.unArticulo.resultadoID6 = this.articuloBusqueda?.resultadoID6
    //        this.crudService.unArticulo.resultadoID7 = this.articuloBusqueda?.resultadoID7
     //       this.crudService.unArticulo.resultadoID8 = this.articuloBusqueda?.resultadoID8

            this.crudService.unArticulo.resultadoImagen = this.articuloBusqueda?.resultadoImagen
            this.crudService.unArticulo.resultadoImagen2 = this.articuloBusqueda?.resultadoImagen2
            this.crudService.unArticulo.resultadoImagen3 = this.articuloBusqueda?.resultadoImagen3
            this.crudService.unArticulo.resultadoImagen4 = this.articuloBusqueda?.resultadoImagen4
            this.crudService.unArticulo.resultadoImagen5 = this.articuloBusqueda?.resultadoImagen5
            this.crudService.unArticulo.resultadoImagen6 = this.articuloBusqueda?.resultadoImagen6
       //     this.crudService.unArticulo.resultadoImagen7 = this.articuloBusqueda?.resultadoImagen7
        //    this.crudService.unArticulo.resultadoImagen8 = this.articuloBusqueda?.resultadoImagen8

        this.crudService.unArticulo.autor1 = this.articuloBusqueda?.autor1
        this.crudService.unArticulo.autor2 = this.articuloBusqueda?.autor2
        this.crudService.unArticulo.autor3 = this.articuloBusqueda?.autor3
        this.crudService.unArticulo.autor4 = this.articuloBusqueda?.autor4
        this.crudService.unArticulo.autor5 = this.articuloBusqueda?.autor5
        this.crudService.unArticulo.autor6 = this.articuloBusqueda?.autor6
        this.crudService.unArticulo.autor7 = this.articuloBusqueda?.autor7
        this.crudService.unArticulo.autor8 = this.articuloBusqueda?.autor8
        


           this.crudService.unArticulo.categoria = "revista"
                         this.crudService.unArticulo._id  = this._id




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

   this.inputActivo = !this.inputActivo
      if (this.inputActivo === false ){

        }

      if(this.inputActivo === true){
       this.crudService.unArticulo.art1 = this.resultadoTitulo
               }



       }

       editar2(){

         this.inputActivo2 = !this.inputActivo2
            if (this.inputActivo2 === false ){

              }

           else{
             this.crudService.unArticulo.art2 = this.resultadoTitulo2

               }

             }

             editar3(){

               this.inputActivo3 = !this.inputActivo3
                  if (this.inputActivo3 === false ){

                    }

                 else{
                   this.crudService.unArticulo.art3 = this.resultadoTitulo3
                     }

                   }
                   editar4(){

                     this.inputActivo4 = !this.inputActivo4
                        if (this.inputActivo4 === false ){

                          }

                       else{
                         this.crudService.unArticulo.art4 = this.resultadoTitulo4
                           }

                         }
                         editar5(){

                           this.inputActivo5 = !this.inputActivo5
                              if (this.inputActivo5 === false ){

                                }

                             else{
                                this.crudService.unArticulo.art5 = this.resultadoTitulo5
                                 }

                               }
                               editar6(){

                                 this.inputActivo6 = !this.inputActivo6
                                    if (this.inputActivo6 === false ){

                                      }

                                   else{
                                     this.crudService.unArticulo.art6 = this.resultadoTitulo6
                                       }

                                     }
                                     editar7(){

                                       this.inputActivo7 = !this.inputActivo7
                                          if (this.inputActivo7 === false ){

                                            }

                                         else{
                                           this.crudService.unArticulo.art7 = this.resultadoTitulo7
                                             }

                                           }
                                           editar8(){

                                             this.inputActivo8 = !this.inputActivo8
                                                if (this.inputActivo8 === false ){

                                                  }

                                               else{
                                                 this.crudService.unArticulo.art8 = this.resultadoTitulo8
                                                   }

                                                 }


   pedirUnArticulo(){


     this.crudService.getOneArticulo(this.busqueda)


     .subscribe(res=>{this.articuloBusqueda = res as Articulos[]


       if(this.articuloBusqueda.length > 2){

         this.crudService.snack('No se encontro');
         //
        return
       }
       this.crudService.unArticulo._id = this.articuloBusqueda._id



         if(this.aux === 1 ){
          this.resultadoTitulo = this.articuloBusqueda?.titulo
          this.crudService.unArticulo.resultadoID = this.articuloBusqueda?._id
          this.crudService.unArticulo.resultadoCategoria = this.articuloBusqueda?.subtitulo
          this.crudService.unArticulo.resultadoImagen = this.articuloBusqueda?.imagen1
          this.crudService.unArticulo.art1 = this.resultadoTitulo
          this.crudService.unArticulo.autor1 = this.autor1         
          this.busqueda = ""
          this.aux = 2
          console.log(this.crudService.unArticulo.autor1,'dael')

          return
          }



         if(this.aux === 2){
           this.resultadoTitulo2 = this.articuloBusqueda?.titulo
           this.crudService.unArticulo.resultadoID2 = this.articuloBusqueda?._id
           this.crudService.unArticulo.resultadoCategoria2 = this.articuloBusqueda?.subtitulo
           this.crudService.unArticulo.resultadoImagen2 = this.articuloBusqueda?.imagen1
           this.crudService.unArticulo.art2 = this.resultadoTitulo2
           this.crudService.unArticulo.autor2 = this.autor2
            this.busqueda = ""
           this.aux=3
           return
           }


         if(this.aux === 3){
           this.resultadoTitulo3 = this.articuloBusqueda?.titulo
           this.crudService.unArticulo.resultadoID3 = this.articuloBusqueda?._id
           this.crudService.unArticulo.resultadoCategoria3 = this.articuloBusqueda?.subtitulo
           this.crudService.unArticulo.resultadoImagen3 = this.articuloBusqueda?.imagen1
           this.crudService.unArticulo.art3 = this.resultadoTitulo3
           this.crudService.unArticulo.autor3 = this.autor3
            this.busqueda = ""
                    this.aux=4
                   return }


         if(this.aux === 4){
           this.resultadoTitulo4 = this.articuloBusqueda?.titulo
           this.crudService.unArticulo.resultadoID4 = this.articuloBusqueda?._id
           this.crudService.unArticulo.resultadoCategoria4 = this.articuloBusqueda?.subtitulo
           this.crudService.unArticulo.resultadoImagen4 = this.articuloBusqueda?.imagen1

           this.crudService.unArticulo.nota = this.articuloBusqueda?.nota
           this.crudService.unArticulo.art4 = this.resultadoTitulo4
           this.crudService.unArticulo.autor4 = this.autor4
           this.busqueda = ""
            this.aux=5
            return
           }

            if(this.aux === 5){
             this.crudService.unArticulo.resultadoID5 = this.articuloBusqueda?._id
             this.resultadoTitulo5 = this.articuloBusqueda?.titulo
             this.crudService.unArticulo.resultadoCategoria5 = this.articuloBusqueda?.subtitulo
             this.crudService.unArticulo.resultadoImagen5 = this.articuloBusqueda?.imagen1
             this.crudService.unArticulo.art5 = this.resultadoTitulo5
             this.crudService.unArticulo.autor5 = this.autor5
              this.busqueda = ""
              this.aux = 6
             return  }

              if(this.aux === 6){
               this.crudService.unArticulo.resultadoID6 = this.articuloBusqueda?._id
               this.resultadoTitulo6 = this.articuloBusqueda?.titulo
               this.crudService.unArticulo.resultadoCategoria6 = this.articuloBusqueda?.subtitulo
               this.crudService.unArticulo.resultadoImagen6 = this.articuloBusqueda?.imagen1
               this.crudService.unArticulo.art6 = this.resultadoTitulo6
               this.crudService.unArticulo.autor6 = this.autor6
                this.busqueda = ""
                this.aux = 7
               return }
              //  if(this.aux === 7){
              //    this.crudService.unArticulo.resultadoID7 = this.articuloBusqueda?._id
              //    this.resultadoTitulo7 = this.articuloBusqueda?.titulo
              //    this.crudService.unArticulo.resultadoCategoria7 = this.articuloBusqueda?.subtitulo
              //    this.crudService.unArticulo.resultadoImagen7 = this.articuloBusqueda?.imagen1
              //    this.crudService.unArticulo.art7 = this.resultadoTitulo7
              //     this.busqueda = ""
              //     this.aux = 8
              //    return }
              //    if(this.aux === 8){
              //      this.crudService.unArticulo.resultadoID8 = this.articuloBusqueda?._id
              //      this.resultadoTitulo8 = this.articuloBusqueda?.titulo
              //      this.crudService.unArticulo.resultadoCategoria8 = this.articuloBusqueda?.subtitulo
              //      this.crudService.unArticulo.resultadoImagen8 = this.articuloBusqueda?.imagen1
              //      this.crudService.unArticulo.art8 = this.resultadoTitulo8
              //       this.busqueda = ""


              //      return
              //    }

                   this.crudService.unArticulo.autor = this.autor
                   this.crudService.unArticulo.imagen1 = this.imagen1
                   this.crudService.unArticulo.imagen2 = this.imagen2
                   this.crudService.unArticulo.imagen3 = this.imagen3


      })


   }

   pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
     this.crudService.getRevista().subscribe(res =>{
      console.log(res)
     this.articulos = res as  Revista[]; // guardo resultados de la peticion en variable productos.
         this.loader2 = false
      this.cantArt = this.articulos.length
   this.articulos = this.articulos.reverse()
     this.articulos = this.articulos.filter((element, index) => index < this.articulos.length - 1);


     console.log(this.articulos)

     for (let i = 0 ; i  < this.articulos.length; i++ ){
         this.vistas = this.vistas + this.articulos[i].vistas
     }
       console.log(this.vistas)

       });//fin de subscribe
     } //fin de pedirProductos


     eliminarArticulo(id:any){
      this.loader= false
       this.crudService.deleteRevista(id).subscribe(res =>{
         this.loader = false
         this.borrando = false
         this.borrado =  true

         location.reload()


          })

       }


 onUpload(){
   let formData = new FormData();

    for (let i = 0 ; i  < this.uploadedFiles.length; i++ ){

    formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)

    }
    this.crudService.uploadFile(formData).subscribe(res => {
     console.log("formdata", formData)
       var link = Object.values(res)
      console.log(link,"linkN")

     this.crudService.unArticulo.imagen1 = String(link) ;
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
       this.crudService.unArticulo.fecha = String(this.fechaPublicacion)
       this.crudService.unArticulo.titulo = this.titulo;
        this.crudService.unArticulo.subtitulo = this.subtitulo
        this.crudService.unArticulo.autor = this.autor
        this.crudService.unArticulo.imagen1 = this.imagen1
        this.crudService.unArticulo.imagen2 = this.imagen2
        this.crudService.unArticulo.imagen3 = this.imagen3

       // this.crudService.unArticulo.art1 = this.resultadoTitulo
       // this.crudService.unArticulo.art2 = this.resultadoTitulo2
       // this.crudService.unArticulo.art3 = this.resultadoTitulo3
       // this.crudService.unArticulo.art4 = this.resultadoTitulo4
       // this.crudService.unArticulo.art5 = this.resultadoTitulo5
       // this.crudService.unArticulo.art6 = this.resultadoTitulo6
       // this.crudService.unArticulo.art7 = this.resultadoTitulo7
       // this.crudService.unArticulo.art8 = this.resultadoTitulo8
       // this.crudService.unArticulo.fechaMod = String(this.fechaMod)


       //  this.crudService.unArticulo.resultadoID = this.resultadoID
       //  this.crudService.unArticulo.resultadoID2 = this.resultadoID2
       //  this.crudService.unArticulo.resultadoID3 = this.resultadoID3
       //  this.crudService.unArticulo.resultadoID4 = this.resultadoID4
       //  this.crudService.unArticulo.resultadoID5 = this.resultadoID5
       //  this.crudService.unArticulo.resultadoID6 = this.resultadoID6
       //  this.crudService.unArticulo.resultadoID7 = this.resultadoID7
       //  this.crudService.unArticulo.resultadoID8 = this.resultadoID8

       //  this.crudService.unArticulo.resultadoImagen = this.resultadoImagen
       //  this.crudService.unArticulo.resultadoImagen2 = this.resultadoImagen2
       //  this.crudService.unArticulo.resultadoImagen3 = this.resultadoImagen3
       //  this.crudService.unArticulo.resultadoImagen4 = this.resultadoImagen4
       //  this.crudService.unArticulo.resultadoImagen5 = this.resultadoImagen5
       //  this.crudService.unArticulo.resultadoImagen6 = this.resultadoImagen6
       //  this.crudService.unArticulo.resultadoImagen7 = this.resultadoImagen7
       //  this.crudService.unArticulo.resultadoImagen8 = this.resultadoImagen8

       this.crudService.unArticulo.categoria = "revista"
       this.crudService.unArticulo._id  = this._id





         if( this.crudService.unArticulo?._id)
         {

               this.crudService.modificarArticulo(this.crudService.unArticulo)
         .subscribe(res => {
           this.loadingGuardar= false
           console.log('modifica esto:', this.crudService.unArticulo.art7)
           this.crudService.snack('Modificado!x')});
           // this.reload()

       }
         else  {
           this.crudService.unArticulo.fecha =  String(this.fechaPublicacion);
           this.crudService.unArticulo.categoria = "revista" // guado Revista paa filtrar
           this.crudService.unArticulo.titulo = this.titulo;
                      this.crudService.unArticulo.subtitulo = this.subtitulo

       this.crudService.unArticulo.fechaMod = String(this.fechaPublicacion)
       this.crudService.unArticulo.autor = this.articuloBusqueda?.autor
       this.crudService.unArticulo.imagen1 = this.articuloBusqueda?.imagen1
       this.crudService.unArticulo.imagen2 = this.articuloBusqueda?.imagen2
       this.crudService.unArticulo.imagen3 = this.articuloBusqueda?.imagen3
       console.log('por aca',this.crudService.unArticulo.imagen3)
       // this.crudService.unArticulo.fecha = String(this.fechaPublicacion)
       // this.crudService.unArticulo.titulo = this.titulo;
       // this.crudService.unArticulo.subtitulo = this.subtitulo
       // this.crudService.unArticulo.art1 = this.resultadoTitulo
       // this.crudService.unArticulo.art2 = this.resultadoTitulo2
       // this.crudService.unArticulo.art3 = this.resultadoTitulo3
       // this.crudService.unArticulo.art4 = this.resultadoTitulo4
       // this.crudService.unArticulo.art5 = this.resultadoTitulo5
       // this.crudService.unArticulo.art6 = this.resultadoTitulo6
       // this.crudService.unArticulo.art7 = this.resultadoTitulo7
       // this.crudService.unArticulo.art8 = this.resultadoTitulo8
       // this.crudService.unArticulo.fechaMod = String(this.fechaMod)

       //  this.crudService.unArticulo.resultadoCategoria = this.resultadoCategoria
       //  this.crudService.unArticulo.resultadoCategoria2 = this.resultadoCategoria2
       //  this.crudService.unArticulo.resultadoCategoria3 = this.resultadoCategoria3
       //  this.crudService.unArticulo.resultadoCategoria4 = this.resultadoCategoria4
       //  this.crudService.unArticulo.resultadoCategoria5 = this.resultadoCategoria5
       //  this.crudService.unArticulo.resultadoCategoria6 = this.resultadoCategoria6
       //  this.crudService.unArticulo.resultadoCategoria7 = this.resultadoCategoria7
       //  this.crudService.unArticulo.resultadoCategoria8 = this.resultadoCategoria8

       //  this.crudService.unArticulo.resultadoID = this.resultadoID
       //  this.crudService.unArticulo.resultadoID2 = this.resultadoID2
       //  this.crudService.unArticulo.resultadoID3 = this.resultadoID3
       //  this.crudService.unArticulo.resultadoID4 = this.resultadoID4
       //  this.crudService.unArticulo.resultadoID5 = this.resultadoID5
       //  this.crudService.unArticulo.resultadoID6 = this.resultadoID6
       //  this.crudService.unArticulo.resultadoID7 = this.resultadoID7
       //  this.crudService.unArticulo.resultadoID8 = this.resultadoID8

       //  this.crudService.unArticulo.resultadoImagen = this.resultadoImagen
       //  this.crudService.unArticulo.resultadoImagen2 = this.resultadoImagen2
       //  this.crudService.unArticulo.resultadoImagen3 = this.resultadoImagen3
       //  this.crudService.unArticulo.resultadoImagen4 = this.resultadoImagen4
       //  this.crudService.unArticulo.resultadoImagen5 = this.resultadoImagen5
       //  this.crudService.unArticulo.resultadoImagen6 = this.resultadoImagen6
 //        this.crudService.unArticulo.resultadoImagen7 = this.resultadoImagen7
   //     this.crudService.unArticulo.resultadoImagen8 = this.resultadoImagen8

                     this.crudService.unArticulo.categoria = "revista"
                     this.crudService.unArticulo._id  = this._id
                     this.crudService.unArticulo.autor = this.articuloBusqueda?.autor
                     this.crudService.unArticulo.imagen1 = this.articuloBusqueda?.imagen1
                     this.crudService.unArticulo.imagen2 = this.imagen2
                     this.crudService.unArticulo.imagen3 = this.imagen3
                     // console.log('antes de agregar', this.crudService.unArticulo.imagen2 )

                    //  console.log('7 ty 8 ', this.crudService.unArticulo.resultadoID7)
                    //  console.log('7 ty 8 ', this.crudService.unArticulo.resultadoID8)

                    //  console.log('7 ty 8 ', this.crudService.unArticulo.resultadoCategoria7)
                    //  console.log('7 ty 8 ', this.crudService.unArticulo.resultadoCategoria8)

 console.log(this.crudService.unArticulo)

           this.crudService.addArticulo(this.crudService.unArticulo)
           .subscribe(res => { this.crudService.snack('creado');
           this.loadingGuardar= false
           // this.reload()
             })
       }

       };



 }
