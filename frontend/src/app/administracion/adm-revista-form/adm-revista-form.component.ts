
import { Component, OnInit } from '@angular/core';
import { Articulos } from '../../modelos/articulos';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Revista } from '../../modelos/revista';
import { Location } from '@angular/common';
import * as ClassicEditor  from '@ckeditor/ckeditor5-angular';
import {  timer  } from 'rxjs';
@Component({
  templateUrl: './adm-revista-form.component.html',
  styleUrls: ['./adm-revista-form.component.css']
})
export class AdmRevistaFormComponent implements OnInit {
  guardando = false
  guardado = false
  borrado = false
  borrando = false

   public Editor= ClassicEditor ;


  //loading



  public uploadedFiles: Array<File> = [];
  loadingSubir = true
  loadingSubir2 = true
  SubirEstado = true
  SubirEstado2 = true
  imagenSubida = false
  imagenSubida2 = false
  loaderCrear = false
  loader=false
  pantalla = true

  //variablea para prender y apagar inpunts
  _id=""
  mes=""
  anio=""
  editorial=""
  numero = ''
  estado = false
  imgPortada =""
  imgPortadaPasaje =""
  titulo=""
  subtitulo=""
  imgPromo=""
  autor=""



  input1disable = true
  input2disable = true
  input3disable = true
  input4disable = true
  input5disable = true
  input6disable = true
  input7disable = true
  input8disable = true

  btnBorrarEstado=true
  btnBorrarEstado2=true
  btnBorrarEstado3=true
  btnBorrarEstado4=true
  btnBorrarEstado5=true
  btnBorrarEstado6=true
  btnBorrarEstado7=true
  btnBorrarEstado8=true

  btnEditarEstado=true
  btnEditarEstado2=true
  btnEditarEstado3=true
  btnEditarEstado4=true
  btnEditarEstado5=true
  btnEditarEstado6=true
  btnEditarEstado7=true
  btnEditarEstado8=true

  btnBuscarEstado=false
  btnBuscarEstado2=false
  btnBuscarEstado3=false
  btnBuscarEstado4=false
  btnBuscarEstado5=false
  btnBuscarEstado6=false
  btnBuscarEstado7=false
  btnBuscarEstado8=false

  aux = true
  aux2 = true
  aux3 = true
  aux4 = true
  aux5 = true
  aux6 = true
  aux7 = true
  aux8 = true


  btnBuscarModal=true

  auxPosicion= 0
  //input NGMODEL VARIABLES
  inputArticulo1=""
  inputArticulo2=""
  inputArticulo3=""
  inputArticulo4=""
  inputArticulo5=""
  inputArticulo6=""
  inputArticulo7=""
  inputArticulo8=""

  inputBuscador=""




  articulos:any
  id=""

  constructor(
    public crudService: CrudService, public ruta:ActivatedRoute, public location:Location) { }

  ngOnInit(): void {
    window.scroll(0,0)
      this.ruta.data.subscribe((data)=>{
      this.articulos = Object.entries(data).map(i => i[1])
      console.log('estp',this.articulos)

      this.crudService.unArticulo = this.articulos[0]})

      if(this.articulos[0]){
        this.crudService.revista = this.articulos[0]
        this._id = this.articulos[0]?._id
        this.imgPortada = this.articulos[0]?.imgPortada
        this.imgPromo = this.articulos[0]?.imgPromo
        this.numero = this.articulos[0]?.numero
        this.anio = this.articulos[0]?.anio
        this.mes = this.articulos[0]?.mes
        this.titulo =this.articulos[0]?.titulo
        this.subtitulo = this.articulos[0]?.subtitulo
        this.editorial = this.articulos[0]?.editorial
        this.inputArticulo1 = this.articulos[0]?.art1
        this.inputArticulo2 = this.articulos[0]?.art2
        this.inputArticulo3 = this.articulos[0]?.art3
        this.inputArticulo4 = this.articulos[0]?.art4
        this.inputArticulo5 = this.articulos[0]?.art5
        this.inputArticulo6 = this.articulos[0]?.art6
        

        this.inputArticulo7 = this.articulos[0]?.art7
        this.inputArticulo8 = this.articulos[0]?.art8
        this.btnEditarEstado = false
        this.btnEditarEstado2 = false
        this.btnEditarEstado3 = false
        this.btnEditarEstado4 = false
        this.btnEditarEstado5 = false
        this.btnEditarEstado6 = false
        this.btnEditarEstado7 = false
        this.btnEditarEstado8 = false

      }  else{
        this.crudService.revista = new Revista
      }

    }

    back(){

      this.location.back()
    }

    buscarArticuloId(id:string, posicion:Number){
      if(id === ""){
        this.crudService.snack('ID no encontrado')
        return
      }
      this.crudService.getOneArticulo(id).subscribe(res=>{
      this.articulos = res as Articulos
      console.log('xfasvarrr',this.articulos)
      if(res === "ID no encontrado.." || res === null){
        this.crudService.snack(res)
      }else{
        this.crudService.snack('Encontrado!')
        if(posicion === 1 ){
        this.inputArticulo1 = this.articulos.titulo
        this.crudService.revista.art1 = this.articulos.titulo
        this.crudService.revista.resultadoCategoria = this.articulos.subtitulo
        this.crudService.revista.resultadoID = this.articulos._id
        this.crudService.revista.resultadoImagen = this.articulos.imagen1
        this.crudService.revista.autor1 = this.articulos.autor
        console.log(this.crudService.revista)
        this.btnBorrarEstado=false
        this.btnEditarEstado=false
        this.inputBuscador = '' //limpieza
        this.btnBuscarModal=true

      }
      if(posicion === 2 ){
        this.inputArticulo2 = this.articulos.titulo
        this.crudService.revista.art2 = this.articulos.titulo
        this.crudService.revista.resultadoCategoria2 = this.articulos.subtitulo
        this.crudService.revista.resultadoID2 = this.articulos._id
        this.crudService.revista.resultadoImagen2 = this.articulos.imagen1
        this.crudService.revista.autor2 = this.articulos.autor
        this.btnBorrarEstado2=false
        this.btnEditarEstado2=false
        this.inputBuscador = '' //limpieza
        this.btnBuscarModal=true
       
      }

      if(posicion === 3 ){
        this.inputArticulo3 = this.articulos.titulo
        this.crudService.revista.art3 = this.articulos.titulo
        this.crudService.revista.resultadoCategoria3 = this.articulos.subtitulo
        this.crudService.revista.resultadoID3 = this.articulos._id
        this.crudService.revista.resultadoImagen3 = this.articulos.imagen1
        this.crudService.revista.autor3 = this.articulos.autor
        this.btnBorrarEstado3=false
        this.btnEditarEstado3=false
        this.inputBuscador = '' //limpieza
        this.btnBuscarModal=true
       console.log(this.crudService.revista)
      }
      if(posicion === 4 ){
        this.inputArticulo4 = this.articulos.titulo
        this.crudService.revista.art4 = this.articulos.titulo
        this.crudService.revista.resultadoCategoria4 = this.articulos.subtitulo
        this.crudService.revista.resultadoID4 = this.articulos._id
        this.crudService.revista.resultadoImagen4 = this.articulos.imagen1
        this.crudService.revista.autor4 = this.articulos.autor
        this.btnBorrarEstado4=false
        this.btnEditarEstado4=false
        this.inputBuscador = '' //limpieza
        this.btnBuscarModal=true
       console.log(this.crudService.revista)
      }
      if(posicion === 5 ){
        this.inputArticulo5 = this.articulos.titulo
        this.crudService.revista.art5 = this.articulos.titulo
        this.crudService.revista.resultadoCategoria5 = this.articulos.subtitulo
        this.crudService.revista.resultadoID5 = this.articulos._id
        this.crudService.revista.resultadoImagen5 = this.articulos.imagen1
        this.crudService.revista.autor5 = this.articulos.autor
        this.btnBorrarEstado5=false
        this.btnEditarEstado5=false
        this.inputBuscador = '' //limpieza
        this.btnBuscarModal=true
       console.log(this.crudService.revista)
      }
      if(posicion === 6 ){
        this.inputArticulo6 = this.articulos.titulo
        this.crudService.revista.art6 = this.articulos.titulo
        this.crudService.revista.resultadoCategoria6 = this.articulos.subtitulo
        this.crudService.revista.resultadoID6 = this.articulos._id
        this.crudService.revista.resultadoImagen6 = this.articulos.imagen1
        this.crudService.revista.autor6 = this.articulos.autor
        this.btnBorrarEstado6=false
        this.btnEditarEstado6=false
        this.inputBuscador = '' //limpieza
        this.btnBuscarModal=true
       console.log(this.crudService.revista)
      }
      if(posicion === 7 ){
        this.inputArticulo7 = this.articulos.titulo
        this.crudService.revista.art7 = this.articulos.titulo
        this.crudService.revista.resultadoCategoria7 = this.articulos.subtitulo
        this.crudService.revista.resultadoID7 = this.articulos._id
        this.crudService.revista.resultadoImagen7 = this.articulos.imagen1
        this.crudService.revista.autor7 = this.articulos.autor
        this.btnBorrarEstado7=false
        this.btnEditarEstado7=false
        this.inputBuscador = '' //limpieza
        this.btnBuscarModal=true
       console.log(this.crudService.revista)
      }
            if(posicion === 8 ){
        this.inputArticulo8 = this.articulos.titulo
        this.crudService.revista.art8 = this.articulos.titulo
        this.crudService.revista.resultadoCategoria8 = this.articulos.subtitulo
        this.crudService.revista.resultadoID8 = this.articulos._id
        this.crudService.revista.resultadoImagen8 = this.articulos.imagen1
        this.crudService.revista.autor8 = this.articulos.autor
        this.btnBorrarEstado8=false
        this.btnEditarEstado8=false
        this.inputBuscador = '' //limpieza
        this.btnBuscarModal=true
       console.log(this.crudService.revista)
      }
    }
        })

      };

    abrirInput(num:number){
       this.auxPosicion = num

if(this.auxPosicion === 1 ){
      this.input1disable = !this.input1disable
      this.crudService.revista.art1 =  this.inputArticulo1
      this.btnBorrarEstado = !this.btnBorrarEstado
      this.btnBuscarEstado =  !this.btnBuscarEstado
      this.aux = !this.aux
    }
    if(this.auxPosicion === 2 ){
      this.input2disable = !this.input2disable
      this.crudService.revista.art2 =  this.inputArticulo2
      this.btnBorrarEstado2 = !this.btnBorrarEstado2
      this.btnBuscarEstado2 =  !this.btnBuscarEstado2
      this.aux2 = !this.aux2
    }
    if(this.auxPosicion === 3 ){
      this.input3disable = !this.input3disable
      this.crudService.revista.art3 =  this.inputArticulo3
      this.btnBorrarEstado3 = !this.btnBorrarEstado3
      this.btnBuscarEstado3 =  !this.btnBuscarEstado3
      this.aux3 = !this.aux3
    }
       if(this.auxPosicion === 4 ){
      this.input4disable = !this.input4disable
      this.crudService.revista.art4 =  this.inputArticulo4
      this.btnBorrarEstado4 = !this.btnBorrarEstado4
      this.btnBuscarEstado4 =  !this.btnBuscarEstado4
      this.aux4 = !this.aux4
    }
    if(this.auxPosicion === 5 ){
      this.input5disable = !this.input5disable
      this.crudService.revista.art5 =  this.inputArticulo5
      this.btnBorrarEstado5 = !this.btnBorrarEstado5
      this.btnBuscarEstado5 =  !this.btnBuscarEstado5
      this.aux5 = !this.aux5
    }
    if(this.auxPosicion === 6 ){
      this.input6disable = !this.input6disable
      this.crudService.revista.art6 =  this.inputArticulo6
      this.btnBorrarEstado6 = !this.btnBorrarEstado6
      this.btnBuscarEstado6 =  !this.btnBuscarEstado6
      this.aux6 = !this.aux6
    }
    if(this.auxPosicion === 7 ){
      this.input7disable = !this.input7disable
      this.crudService.revista.art7 =  this.inputArticulo7
      this.btnBorrarEstado7 = !this.btnBorrarEstado7
      this.btnBuscarEstado7 =  !this.btnBuscarEstado7
      this.aux7 = !this.aux7
    }
    if(this.auxPosicion === 8 ){
      this.input8disable = !this.input8disable
      this.crudService.revista.art8 =  this.inputArticulo8
      this.btnBorrarEstado8 = !this.btnBorrarEstado8
      this.btnBuscarEstado8 =  !this.btnBuscarEstado8
      this.aux8 = !this.aux8
    }

    }

    borrarInput(num:number){
      this.auxPosicion = num

   if(this.auxPosicion === 1){
      this.inputArticulo1 = ''
    this.inputBuscador = '' //limpieza
  }

  if(this.auxPosicion === 2){
    this.inputArticulo2 = ''
    this.inputBuscador = '' //limpieza
}

if(this.auxPosicion === 3){
  this.crudService.snack('Borrado!')
  this.inputArticulo3 = ''
  this.inputBuscador = '' //limpieza
}

if(this.auxPosicion === 4){
  this.inputArticulo4 = ''
  this.inputBuscador = '' //limpieza
}
if(this.auxPosicion === 5){
  this.inputArticulo5 = ''
  this.inputBuscador = '' //limpieza
}

if(this.auxPosicion === 6){
  this.inputArticulo6 = ''
  this.inputBuscador = '' //limpieza
}

if(this.auxPosicion === 7){
  this.inputArticulo7 = ''
  this.inputBuscador = '' //limpieza
}

if(this.auxPosicion === 8){
  this.inputArticulo8 = ''
  this.inputBuscador = '' //limpieza
}
    }


    guardar(){
      this.loader= true
      this.crudService.revista.fecha = String(new Date())
      this.crudService.revista.fechaMod = String(new Date())
      this.crudService.revista.anio = this.anio
      this.crudService.revista.mes = this.mes
      this.crudService.revista.numero = this.numero
      this.crudService.revista.editorial = this.editorial
      this.crudService.revista.estado = this.estado
      this.crudService.revista.titulo = this.titulo
      this.crudService.revista.subtitulo = this.subtitulo
      this.crudService.revista.imgPortada = this.imgPortada
      console.log('aver', this.crudService.revista)

         if( this._id === '63e3eeda380cb35143aeaa92'  )//porque est id es un registro en blanco que se usa para crear un nuevo articulo
         {
            if (!this.crudService.revista.editorial){
              this.crudService.revista.editorial = ""
            }
      
            this.crudService.addRevista(this.crudService.revista).subscribe(res=>
              {
  
  
  
                this.guardado = true
                this.guardando =  false
  
                timer(2000).subscribe(res=>{this.guardado = false});
                this.location.back()
              })

       
             }else{

              this.crudService.modificarRevista(this.crudService.revista).subscribe(res=>
                {
                  this.guardado = true
                  this.guardando =  false
    
                  timer(2000).subscribe(res=>{this.guardado = false});
                   this.location.back()
    
              })


            
         }


    }





  onUpload() {
    let formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
    formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)
    }

    this.crudService.uploadFile(formData).subscribe(res => {
    var link = Object.values(res)
    // this.crudService.revista.imgPortada = String(link);
    this.imgPortada = String(link);

    this.loadingSubir = true
    this.imagenSubida=true
    this.SubirEstado=true


    })

  };

  onFileChange(e) {
    this.SubirEstado = false;
    this.imagenSubida = false;
    this.uploadedFiles = e.target.files;
  };




  onUpload2() {
    let formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
    formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)
    }

    this.crudService.uploadFile(formData).subscribe(res => {
    var link = Object.values(res)
    this.crudService.revista.imgPromo = String(link);
    this.imgPromo = String(link);

    this.loadingSubir2 = true
    this.imagenSubida2=true
    this.SubirEstado2=true


    })

  };

  onFileChange2(e) {
    this.SubirEstado2 = false;
    this.imagenSubida2 = false;
    this.uploadedFiles = e.target.files;
  };

}



