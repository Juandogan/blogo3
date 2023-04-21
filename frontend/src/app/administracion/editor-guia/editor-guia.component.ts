import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulos } from '../../modelos/articulos';
import { GuiaModel } from '../../modelos/guia';

import { CrudService } from '../../services/crud.service';
import { GuiaServiceService } from '../../services/guia-service.service';

@Component({
  selector: 'app-editor-guia',
  templateUrl: './editor-guia.component.html',
  styleUrls: ['./editor-guia.component.css'],
})
export class EditorGuiaComponent implements OnInit {
  nota: any;
  loader = false
  loadingSubir = false
  loadingGuardar:Boolean = false
  select1:any
  select2:any
  select3:any
cadena:string

  public uploadedFiles: Array<File> = [];

  SubirEstado:Boolean = true

  loading2:boolean = false;
  loading3:boolean = false;
  loading4:boolean = false;
  loading5:boolean = false;
  guiaModel: GuiaModel = new GuiaModel();



  bt1Borrar= false
  bt2Borrar= false
  bt3Borrar= false
  bt4Borrar= false
  bt5Borrar= false
  bt6Borrar= false
  btnGuardar = false

  bt1Editar= false
  bt2Editar= false
  bt3Editar= false
  bt4Editar= false
  bt5Editar= false
  bt6Editar= false


  bt1Buscar= false
  bt2Buscar= false
  bt3Buscar= false
  bt4Buscar= false
  bt5Buscar= false
  bt6Buscar= false

  archivoShow:boolean = false;
  openInput:Boolean = true;
  openInput2:Boolean = true;
  openInput3:Boolean = true;
  openInput4:Boolean = true;
  openInput5:Boolean = true;
  openInput6:Boolean = true;
  openInputBuscar:Boolean = true;
  busqueda = "";
  articuloBusqueda :any
  resultadoTitulo:string =""
  resultadoTitulo2:string =""
  resultadoTitulo3:string =""
  resultadoTitulo4:string =""
  resultadoTitulo5:string =""
  resultadoTitulo6:string =""
  resultadoTitulo7:string =""
  resultadoTitulo8:string =""
  loaderModal = false
  aux=0
  auxOrdenar:any
  _id=""
auxArticulosRelacionados:any
  artRelacionado:Articulos
  constructor(
    public location:Location,
    public crudService: CrudService,
    private ruta: ActivatedRoute,
    public guiaService:GuiaServiceService
    // private location: Location
  ) {




    this.ruta.data.subscribe((data) => {
      this.nota = Object.entries(data).map((i) => i[1]);



      if (this.nota[0] != null) {
        this.guiaModel = this.nota[0];
        this._id = this.nota[0]._id


      } else {
        this.nota[0] = new GuiaModel;
        this.cadena =''
        console.log('no encontro',this._id);
      }
    });
  }

  ngOnInit(): void {
    console.log(this.nota);

  }

  actualizar(){

    if(this.select1 === '1' ){
    this.cadena = this.guiaModel.relacionados
     var ss = String(this.cadena).split('>')
     this.resultadoTitulo = ss[2]
     console.log(ss)

    }
    if(this.select1 === '2' ){
      this.cadena = this.guiaModel.relacionados
      this.auxArticulosRelacionados = this.cadena
       var ss = String(this.auxArticulosRelacionados).split('>')

       this.resultadoTitulo = ss[7]

      }
      if(this.select1 === '3' ){
        this.cadena = this.guiaModel.relacionados
        this.auxArticulosRelacionados = this.cadena
         var ss = String(this.auxArticulosRelacionados).split('>')

         this.resultadoTitulo = ss[12]
        }
        if(this.select1 === '4' ){
          this.cadena = this.guiaModel.relacionados
          this.auxArticulosRelacionados = this.cadena
           var ss = String(this.auxArticulosRelacionados).split('>')
           this.resultadoTitulo = ss[17]
          }
          if(this.select1 === '5' ){
            this.cadena = this.guiaModel.relacionados
            this.auxArticulosRelacionados = this.cadena
             var ss = String(this.auxArticulosRelacionados).split('>')
             this.resultadoTitulo = ss[22]
            }
            if(this.select1 === '6' ){
              this.cadena = this.guiaModel.relacionados
              this.auxArticulosRelacionados = this.cadena
               var ss = String(this.auxArticulosRelacionados).split('>')
               this.resultadoTitulo = ss[27]
              }

  }

  pedirUnArticulo(){

    this.artRelacionado = new Articulos
    this.crudService.getOneArticulo(this.busqueda).subscribe(res=>{this.articuloBusqueda = res as Articulos[]
      this.loaderModal = false
      if(this.articuloBusqueda.length > 2){
          console.log('NO SE ENCONTROE')
        this.crudService.snack('No se encontro');
        //          return
      }

        if(this.select1 === "1" ){
          var aux2 = this.cadena.split('>');

          if(aux2[0]){
            aux2[0] = this.articuloBusqueda?._id
            aux2[1] = this.articuloBusqueda?.categoria
           this.resultadoTitulo =  aux2[2] = this.articuloBusqueda?.titulo
            aux2[3] = this.articuloBusqueda?.subtitulo
            aux2[4] = this.articuloBusqueda?.imagen1


    for (var z of aux2) {
      if (z !== '') {

       var aux = aux + '>' + z;
       this.auxOrdenar = aux +'>'

       this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
       this.auxOrdenar = this.auxOrdenar.slice(1)
       this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);

       console.log('XXXXXXXXX', this.auxOrdenar)
      }

    }

      this.cadena = this.auxOrdenar
      console.log('Muestra cadena ya conformada y split otra vez',this.cadena.split('>'));

      this.guiaModel.relacionados = this.cadena
      this.busqueda = ""

          } else{

          this.resultadoTitulo =  this.articuloBusqueda?.titulo

          if(this.cadena){

            this.cadena = this.cadena +'>'+  this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1
             this.guiaModel.relacionados =  this.cadena
             this.busqueda = ""

          }
          else{

            this.cadena = this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1

             this.guiaModel.relacionados =  this.cadena
             this.busqueda = ""
              this.aux = 2
          }

        }
         return
         }


         if(this.select1 === "2" ){
          var aux2 = this.cadena.split('>');

          if(aux2[5]){
            aux2[5] = this.articuloBusqueda?._id
            aux2[6] = this.articuloBusqueda?.categoria
            this.resultadoTitulo =  aux2[7] = this.articuloBusqueda?.titulo
            aux2[8] = this.articuloBusqueda?.subtitulo
            aux2[9] = this.articuloBusqueda?.imagen1


    for (var z of aux2) {
      if (z !== '') {

       var aux:any = aux + '>' + z;
       this.auxOrdenar = aux +'>'

       this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
       this.auxOrdenar = this.auxOrdenar.slice(1)
       this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);

       console.log('XXXXXXXXX', this.auxOrdenar)
      }

    }

      this.cadena = this.auxOrdenar
      console.log('Muestra cadena ya conformada y split otra vez',this.cadena.split('>'));

      this.guiaModel.relacionados = this.cadena

          } else{

          this.resultadoTitulo =  this.articuloBusqueda?.titulo

          if(this.cadena){
            console.log('cadena exits', this.cadena)
            this.cadena = this.cadena +'>'+  this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1
             this.guiaModel.relacionados =  this.cadena
         this.busqueda = ""
         this.aux = 2


          }
          else{
            console.log('primera vez')
            this.cadena = this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1
             this.guiaModel.relacionados =  this.cadena
             console.log('asaas',this.cadena)
             console.log('termina asi',this.guiaModel.relacionados.split('>'));
         this.busqueda = ""
         this.aux = 2
          }

        }
         return
         }


         if(this.select1 === "3" ){
          var aux2 = this.cadena.split('>');

          if(aux2[10]){
            aux2[10] = this.articuloBusqueda?._id
            aux2[11] = this.articuloBusqueda?.categoria
            this.resultadoTitulo =  aux2[12] = this.articuloBusqueda?.titulo
            aux2[13] = this.articuloBusqueda?.subtitulo
            aux2[14] = this.articuloBusqueda?.imagen1


    for (var z of aux2) {
      if (z !== '') {

       var aux:any = aux + '>' + z;
       this.auxOrdenar = aux +'>'

       this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
       this.auxOrdenar = this.auxOrdenar.slice(1)
       this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);


      }

    }

      this.cadena = this.auxOrdenar


      this.guiaModel.relacionados = this.cadena

          } else{

          this.resultadoTitulo =  this.articuloBusqueda?.titulo

          if(this.cadena){

            this.cadena = this.cadena +'>'+  this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1
             this.guiaModel.relacionados =  this.cadena
         this.busqueda = ""
         this.aux = 2

          }
          else{
            this.cadena = this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1
             this.guiaModel.relacionados =  this.cadena

         this.busqueda = ""
         this.aux = 2
          }

        }
         return
         }


         if(this.select1 === "4" ){
          var aux2 = this.cadena.split('>');

          if(aux2[0]){
            aux2[15] = this.articuloBusqueda?._id
            aux2[16] = this.articuloBusqueda?.categoria
            this.resultadoTitulo =  aux2[17] = this.articuloBusqueda?.titulo
            aux2[18] = this.articuloBusqueda?.subtitulo
            aux2[19] = this.articuloBusqueda?.imagen1


    for (var z of aux2) {
      if (z !== '') {

       var aux:any = aux + '>' + z;
       this.auxOrdenar = aux +'>'

       this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
       this.auxOrdenar = this.auxOrdenar.slice(1)
       this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);


      }

    }

      this.cadena = this.auxOrdenar
      console.log('Muestra cadena ya conformada y split otra vez',this.cadena.split('>'));

      this.guiaModel.relacionados = this.cadena

          } else{

          this.resultadoTitulo =  this.articuloBusqueda?.titulo

          if(this.cadena){
            console.log('cadena exits', this.cadena)
            this.cadena = this.cadena +'>'+  this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1
             this.guiaModel.relacionados =  this.cadena
         this.busqueda = ""
         this.aux = 2

          }
          else{
            console.log('primera vez')
            this.cadena = this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1
             this.guiaModel.relacionados =  this.cadena

         this.busqueda = ""
         this.aux = 2
          }

        }
         return
         }

         if(this.select1 === "5" ){
          var aux2 = this.cadena.split('>');

          if(aux2[20]){
            aux2[20] = this.articuloBusqueda?._id
            aux2[21] = this.articuloBusqueda?.categoria
            this.resultadoTitulo =  aux2[22] = this.articuloBusqueda?.titulo
            aux2[23] = this.articuloBusqueda?.subtitulo
            aux2[24] = this.articuloBusqueda?.imagen1


    for (var z of aux2) {
      if (z !== '') {

       var aux:any = aux + '>' + z;
       this.auxOrdenar = aux +'>'

       this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
       this.auxOrdenar = this.auxOrdenar.slice(1)
       this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);


      }

    }

      this.cadena = this.auxOrdenar
      console.log('Muestra cadena ya conformada y split otra vez',this.cadena.split('>'));

      this.guiaModel.relacionados = this.cadena

          } else{

          this.resultadoTitulo =  this.articuloBusqueda?.titulo

          if(this.cadena){

            this.cadena = this.cadena +'>'+  this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1
             this.guiaModel.relacionados =  this.cadena
         this.busqueda = ""
         this.aux = 2

          }
          else{
            console.log('primera vez')
            this.cadena = this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1
             this.guiaModel.relacionados =  this.cadena

         this.busqueda = ""
         this.aux = 2
          }

        }
         return
         }


         if(this.select1 === "6" ){
          var aux2 = this.cadena.split('>');

          if(aux2[25]){
            aux2[25] = this.articuloBusqueda?._id
            aux2[26] = this.articuloBusqueda?.categoria
            this.resultadoTitulo =  aux2[27] = this.articuloBusqueda?.titulo
            aux2[28] = this.articuloBusqueda?.subtitulo
            aux2[29] = this.articuloBusqueda?.imagen1


    for (var z of aux2) {
      if (z !== '') {

       var aux:any = aux + '>' + z;
       this.auxOrdenar = aux +'>'

       this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
       this.auxOrdenar = this.auxOrdenar.slice(1)
       this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);


      }

    }

      this.cadena = this.auxOrdenar
      console.log('Muestra cadena ya conformada y split otra vez',this.cadena.split('>'));

      this.guiaModel.relacionados = this.cadena

          } else{

          this.resultadoTitulo =  this.articuloBusqueda?.titulo

          if(this.cadena){

            this.cadena = this.cadena +'>'+  this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1
             this.guiaModel.relacionados =  this.cadena
         this.busqueda = ""
         this.aux = 2

          }
          else{
            console.log('primera vez')
            this.cadena = this.articuloBusqueda._id + '>' + this.articuloBusqueda.categoria + '>' + this.resultadoTitulo+'>'
          + this.articuloBusqueda?.subtitulo + '>' + this.articuloBusqueda?.imagen1
             this.guiaModel.relacionados =  this.cadena

         this.busqueda = ""
         this.aux = 2
          }

        }
         return
         }




     })


  }

  selection(){

    if(this.select1 === "1" ){
      var aux2 = this.cadena.split('>');

      if(aux2[0]){
        aux2[2] = this.resultadoTitulo


for (var z of aux2) {
  if (z !== '') {

   var aux = aux + '>' + z;
   this.auxOrdenar = aux +'>'

   this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
   this.auxOrdenar = this.auxOrdenar.slice(1)
   this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);
   console.log('fin',this.auxOrdenar)



    }
    this.guiaModel.relacionados = this.auxOrdenar
  }
  }}

  if(this.select1 === "2" ){
    var aux2 = this.cadena.split('>');

    if(aux2[0]){
      aux2[7] = this.resultadoTitulo


for (var z of aux2) {
if (z !== '') {

 var aux:any = aux + '>' + z;
 this.auxOrdenar = aux +'>'

 this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
 this.auxOrdenar = this.auxOrdenar.slice(1)
 this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);
 console.log('fin',this.auxOrdenar)



  }
  this.guiaModel.relacionados = this.auxOrdenar
}
}}

if(this.select1 === "3" ){
  var aux2 = this.cadena.split('>');

  if(aux2[0]){
    aux2[12] = this.resultadoTitulo


for (var z of aux2) {
if (z !== '') {

var aux:any = aux + '>' + z;
this.auxOrdenar = aux +'>'

this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
this.auxOrdenar = this.auxOrdenar.slice(1)
this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);
console.log('fin',this.auxOrdenar)



}
this.guiaModel.relacionados = this.auxOrdenar
}
}}

if(this.select1 === "4" ){
  var aux2 = this.cadena.split('>');

  if(aux2[0]){
    aux2[17] = this.resultadoTitulo


for (var z of aux2) {
if (z !== '') {

var aux:any = aux + '>' + z;
this.auxOrdenar = aux +'>'

this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
this.auxOrdenar = this.auxOrdenar.slice(1)
this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);
console.log('fin',this.auxOrdenar)



}
this.guiaModel.relacionados = this.auxOrdenar
}
}}
if(this.select1 === "5" ){
  var aux2 = this.cadena.split('>');

  if(aux2[0]){
    aux2[22] = this.resultadoTitulo


for (var z of aux2) {
if (z !== '') {

var aux:any = aux + '>' + z;
this.auxOrdenar = aux +'>'

this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
this.auxOrdenar = this.auxOrdenar.slice(1)
this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);
console.log('fin',this.auxOrdenar)



}
this.guiaModel.relacionados = this.auxOrdenar
}
}}
if(this.select1 === "6" ){
  var aux2 = this.cadena.split('>');

  if(aux2[0]){
    aux2[27] = this.resultadoTitulo


for (var z of aux2) {
if (z !== '') {

var aux:any = aux + '>' + z;
this.auxOrdenar = aux +'>'

this.auxOrdenar = this.auxOrdenar.split('undefined').join('')
this.auxOrdenar = this.auxOrdenar.slice(1)
this.auxOrdenar = this.auxOrdenar.substring(0, this.auxOrdenar.length - 1);
console.log('fin',this.auxOrdenar)



}
this.guiaModel.relacionados = this.auxOrdenar
}
}}



}

  agregarPublicacion(){
    this.guiaService.unGuia = this.guiaModel

    if(!this._id){
      this.guiaService.unGuia.vistas = 0

      this.guiaService.crearGuia(this.guiaService.unGuia).subscribe(res=>(console.log('respuesta:',res)))
    }
    else{
      this.guiaService.modificarGuia(this.guiaService.unGuia._id, this.guiaService.unGuia).subscribe(res=>(console.log(res)))

    }

    this.loader = true
this.location.back()

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
      this.guiaModel.imagen  = String(link) ;
      this.loadingSubir = true


     })

   };
}
