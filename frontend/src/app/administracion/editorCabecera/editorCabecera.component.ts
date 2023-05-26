
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulos } from '../../modelos/articulos';
import { CrudService } from '../../services/crud.service';
import {  timer  } from 'rxjs';
@Component({
  selector: 'app-editorCabecera',
  templateUrl: './editorCabecera.component.html',
  styleUrls: ['./editorCabecera.component.css']
})
export class EditorCabeceraComponent implements OnInit {



  test:Articulos = new Articulos


  fechaPublicacion = new Date()

  //variables de la busqueda de articulos relacionados
  openInputBuscar:Boolean = true;
  public busqueda:string ="";
  public articuloBusqueda: any
  loaderModal = false
  aux:Number = 1

  aux2= false
  //variables de la busqueda de articulos relacionados
  fecha =""
  nota:any
  activo = false
  loader = false
  guardado = false
  guardando= false
  bt1Borrar= false
  bt2Borrar= false
  bt3Borrar= false
  bt4Borrar= false
  bt5Borrar= false
  bt6Borrar= false
  bt7Borrar= false
  bt8Borrar= false
  bt9Borrar= false
  bt10Borrar= false
  bt11Borrar= false
  bt12Borrar= false
  btnGuardar = false

  bt1Editar= false
  bt2Editar= false
  bt3Editar= false
  bt4Editar= false
  bt5Editar= false
  bt6Editar= false
  bt7Editar= false
  bt8Editar= false
  bt9Editar= false
  bt10Editar= false
  bt11Editar= false
  bt12Editar= false

  bt1Buscar= false
  bt2Buscar= false
  bt3Buscar= false
  bt4Buscar= false
  bt5Buscar= false
  bt6Buscar= false

  bt7Buscar= false
  bt8Buscar= false
  bt9Buscar= false
  bt10Buscar= false
  bt11Buscar= false
  bt12Buscar= false

  loadingGuardar:Boolean = false
  loadingSubir:Boolean = true
  SubirEstado:Boolean = true

  loading2:boolean = false;
  loading3:boolean = false;
  loading4:boolean = false;
  loading5:boolean = false;
  
  loading6:boolean = false;
  loading7:boolean = false;
  loading8:boolean = false;
  loading9:boolean = false;
  archivoShow:boolean = false;

  ficha=false

  openInput:Boolean = true;
  openInput2:Boolean = true;
  openInput3:Boolean = true;
  openInput4:Boolean = true;
  openInput5:Boolean = true;
  openInput6:Boolean = true;
  openInput7:Boolean = true;
  openInput8:Boolean = true;
  openInput9:Boolean = true;
  openInput10:Boolean = true;
  openInput11:Boolean = true;
  openInput12:Boolean = true;

  resultadoTitulo:string =""
  resultadoTitulo2:string =""
  resultadoTitulo3:string =""
  resultadoTitulo4:string =""
  resultadoTitulo5:string =""
  resultadoTitulo6:string =""
  resultadoTitulo7:string =""
  resultadoTitulo8:string =""
  resultadoTitulo9:string =""
  resultadoTitulo10:string =""
  resultadoTitulo11:string =""
  resultadoTitulo12:string =""
  

  autor1:string =""
  autor2:string =""
  autor3:string =""
  autor4:string =""
  autor5:string =""
  autor6:string =""
  autor7 :string =""
  autor8:string =""
  autor9:string =""
  autor10:string =""
  autor11:string =""
  autor12:string =""
  

  public uploadedFiles: Array<File> = [];



  constructor(public crudService:CrudService,
     private ruta:ActivatedRoute,
     private location:Location

     ) {

    this.fecha = String(new Date())
    this.ruta.data.subscribe((data)=>{
    this.nota = Object.entries(data).map(i => i[1]);



   })

       if(this.nota[0]  != null ){

          this.test  = this.nota[0]

          this.resultadoTitulo  = this.test.art1
          this.resultadoTitulo2 = this.test.art2
          this.resultadoTitulo3 = this.test.art3
          this.resultadoTitulo4 = this.test.art4
          this.resultadoTitulo5 = this.test.art5
          this.resultadoTitulo6 = this.test.art6
          this.resultadoTitulo7 = this.test.art7
          this.resultadoTitulo8 = this.test.art8
          this.resultadoTitulo9 = this.test.art9
          this.resultadoTitulo10 = this.test.art10
          this.resultadoTitulo11 = this.test.art11
          this.resultadoTitulo12 = this.test.art12


          console.log('teste', this.test)
          if(this.test.categoria === "FICHA"){
            this.ficha=true
                  } else {this.ficha = false}
        }
        else{
          this.nota[0] = new Articulos
        }
  }




  ngOnInit(): void {
window.scroll(0,0)
    }

    cambiar(){
      
      if(this.test.categoria === "FICHA"){
        this.ficha=true
              } else {this.ficha = false}
          }



   agregarPublicacion(){
    this.loader =true
    this.crudService.unArticulo = this.test
    console.log('antes de guardar', this.test)
    this.crudService.unArticulo.art1 = this.resultadoTitulo
    this.crudService.unArticulo.art2 = this.resultadoTitulo2
    this.crudService.unArticulo.art3 = this.resultadoTitulo3
    this.crudService.unArticulo.art4 = this.resultadoTitulo4
    this.crudService.unArticulo.art5 = this.resultadoTitulo5
    this.crudService.unArticulo.art6 = this.resultadoTitulo6
    this.crudService.unArticulo.art7 = this.resultadoTitulo7
    this.crudService.unArticulo.art8 = this.resultadoTitulo8
    this.crudService.unArticulo.art9 = this.resultadoTitulo9
    this.crudService.unArticulo.art10 = this.resultadoTitulo10
    this.crudService.unArticulo.art11 = this.resultadoTitulo11
    this.crudService.unArticulo.art12 = this.resultadoTitulo12



    if( this.crudService.unArticulo._id && this.crudService.unArticulo._id !=="62902088b69caf0a51c7e023" )//porque est id es un registro en blanco que se usa para crear un nuevo articulo
    {
      this.test.contadorComentarios = "NO"
      console.log(this.crudService.unArticulo)
      this.crudService.unArticulo.fechaMod = String(new Date())
      this.crudService.modificarArticulo(this.crudService.unArticulo)
      .subscribe(res => { this.loader=false
        alert('Articulo Modificado')
        
        this.guardando = false
        

   })

    }

    else  {
        this.test.contadorComentarios = "NO"
        this.test.fecha = String(this.fechaPublicacion)
        this.test.fechaMod = String(this.fechaPublicacion)
        this.test.vistas = 0
        this.test.fechaMod = String(this.fechaPublicacion)
        this.crudService.addArticulo(this.crudService.unArticulo).subscribe(res => {
          this.guardado = true;
        this.guardando = false

          timer(3000).subscribe(res=>{
            this.guardado = false;
            this.loader=false;
            this.location.back()
        
           });

        })

        }

  };






   selection(res:any){
    this.aux = res

  }
  onFileChange(e:any){
    this.SubirEstado = false;
    this.uploadedFiles = e.target.files;
  };

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
      this.test.imagen1  = String(link) ;
      this.loadingSubir = true


     })

   };


   pedirUnArticulo(){


      this.crudService.getOneArticulo(this.busqueda)


      .subscribe(res=>{this.articuloBusqueda = res as Articulos[]

        this.loaderModal = false
        if(this.articuloBusqueda.length > 2){

          this.crudService.snack('No se encontro');
          //
    return
        }


          if(this.aux === 1 ){

           this.resultadoTitulo = this.articuloBusqueda?.titulo
           this.test.art1 = this.resultadoTitulo
           this.test.resultadoID = this.articuloBusqueda?._id
           this.test.resultadoCategoria = this.articuloBusqueda?.categoria
           this.test.resultadoImagen = this.articuloBusqueda.imagen1
           this.test.autor1 = this.articuloBusqueda.autor
           this.busqueda = ""
           this.aux = 2
           return
           }



          if(this.aux === 2){
            this.resultadoTitulo2 = this.articuloBusqueda?.titulo
            this.test.art2 = this.resultadoTitulo2
            this.test.resultadoID2 = this.articuloBusqueda?._id
            this.test.resultadoCategoria2 = this.articuloBusqueda?.categoria
            this.test.resultadoImagen2 = this.articuloBusqueda?.imagen1
            this.test.autor2 = this.articuloBusqueda.autor
             this.busqueda = ""
            this.aux=3
            return
            }


          if(this.aux === 3){
            this.resultadoTitulo3 = this.articuloBusqueda?.titulo
            this.test.art3 = this.resultadoTitulo3
            this.test.resultadoID3 = this.articuloBusqueda?._id
            this.test.resultadoCategoria3 = this.articuloBusqueda?.categoria            
            this.test.resultadoImagen3 = this.articuloBusqueda?.imagen1
            this.test.autor3 = this.articuloBusqueda.autor
             this.busqueda = ""
                     this.aux=4
                    return }


          if(this.aux === 4){
            this.resultadoTitulo4 = this.articuloBusqueda?.titulo
            this.test.resultadoID4 = this.articuloBusqueda?._id
            this.test.art4 = this.resultadoTitulo4
            this.test.resultadoCategoria4 = this.articuloBusqueda?.categoria
            this.test.resultadoImagen4 = this.articuloBusqueda?.imagen1
            this.test.autor4 = this.articuloBusqueda.autor
             this.busqueda = ""
             this.aux=5
             return
            }

             if(this.aux === 5){
              this.test.resultadoID5 = this.articuloBusqueda?._id
              this.resultadoTitulo5 = this.articuloBusqueda?.titulo
              this.test.art5 = this.resultadoTitulo5
              this.test.resultadoCategoria5 = this.articuloBusqueda?.categoria
              this.test.resultadoImagen5 = this.articuloBusqueda?.imagen1
              this.test.autor5 = this.articuloBusqueda.autor
               this.busqueda = ""
               this.aux = 6
              return  }

               if(this.aux === 6){
                this.test.resultadoID6 = this.articuloBusqueda?._id
                this.resultadoTitulo6 = this.articuloBusqueda?.titulo
                this.test.art6 = this.resultadoTitulo6
                this.test.resultadoCategoria6 = this.articuloBusqueda?.categoria
                this.test.resultadoImagen6 = this.articuloBusqueda?.imagen1
                this.test.autor6 = this.articuloBusqueda.autor
                 this.busqueda = ""
                return }
                if(this.aux === 7){
                  this.test.resultadoID7 = this.articuloBusqueda?._id
                  this.resultadoTitulo7 = this.articuloBusqueda?.titulo
                  this.test.art7 = this.resultadoTitulo7
                  this.test.resultadoCategoria7 = this.articuloBusqueda?.categoria
                  this.test.resultadoImagen7 = this.articuloBusqueda?.imagen1
                  this.test.autor7 = this.articuloBusqueda.autor
                   this.busqueda = ""
                  return }
                  if(this.aux === 8){
                    this.test.resultadoID8 = this.articuloBusqueda?._id
                    this.resultadoTitulo8 = this.articuloBusqueda?.titulo
                    this.test.art8 = this.resultadoTitulo8
                    this.test.resultadoCategoria8 = this.articuloBusqueda?.categoria
                    this.test.resultadoImagen8 = this.articuloBusqueda?.imagen1
                    this.test.autor8 = this.articuloBusqueda.autor
                     this.busqueda = ""
                    return }

                    if(this.aux === 9){
                      this.test.resultadoID9 = this.articuloBusqueda?._id
                      this.resultadoTitulo9 = this.articuloBusqueda?.titulo
                      this.test.art9 = this.resultadoTitulo9
                      this.test.resultadoCategoria9 = this.articuloBusqueda?.categoria
                      this.test.resultadoImagen9 = this.articuloBusqueda?.imagen1
                      this.test.autor9 = this.articuloBusqueda.autor
                       this.busqueda = ""
                      return }
                      if(this.aux === 10){
                        this.test.resultadoID10 = this.articuloBusqueda?._id
                        this.resultadoTitulo10 = this.articuloBusqueda?.titulo
                        this.test.art10 = this.resultadoTitulo10
                        this.test.resultadoCategoria10 = this.articuloBusqueda?.categoria
                        this.test.resultadoImagen10 = this.articuloBusqueda?.imagen1
                        this.test.autor10 = this.articuloBusqueda.autor
                         this.busqueda = ""
                        return }
                        if(this.aux === 11){
                          this.test.resultadoID11 = this.articuloBusqueda?._id
                          this.resultadoTitulo11 = this.articuloBusqueda?.titulo
                          this.test.art11 = this.resultadoTitulo11
                          this.test.resultadoCategoria11 = this.articuloBusqueda?.categoria
                          this.test.resultadoImagen11 = this.articuloBusqueda?.imagen1
                          this.test.autor11 = this.articuloBusqueda.autor
                           this.busqueda = ""
                          return }
                          if(this.aux === 12){
                            this.test.resultadoID12 = this.articuloBusqueda?._id
                            this.resultadoTitulo12 = this.articuloBusqueda?.titulo
                            this.test.art12 = this.resultadoTitulo12
                            this.test.resultadoCategoria12 = this.articuloBusqueda?.categoria
                            this.test.resultadoImagen12 = this.articuloBusqueda?.imagen1
                            this.test.autor12 = this.articuloBusqueda.autor
                             this.busqueda = ""
                            return }

       })


    }


}
