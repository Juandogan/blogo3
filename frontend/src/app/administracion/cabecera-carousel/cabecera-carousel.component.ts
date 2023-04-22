import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarouselModel } from '../../modelos/userCarousel';
import { CarouselServiceService } from '../../services/carousel-service.service';
import { CrudService } from '../../services/crud.service';

@Component({
  templateUrl: './cabecera-carousel.component.html',
  styleUrls: ['./cabecera-carousel.component.css']
})
export class CabeceraCarouselComponent implements OnInit {
  public uploadedFiles: Array<File> = [];
  data:any
  loadingSubir = true

  link=""
  titulo=""

  loadingSubir2 = true;
  SubirEstado = true;
  SubirEstado2 = true;
  imagenSubida = false;
  imagenSubida2 = false;
  loader = true
  posicion= 0
  imgPreview = ""
  img=""
  _id=""

  nota:any

  constructor(public ruta:ActivatedRoute,  public caurosel:CarouselServiceService, private location:Location,
    public crudService:CrudService) {



   }

  ngOnInit(): void {
    window.scroll(0,0)
    this.caurosel.unAnunciante = new CarouselModel
    this.ruta.data.subscribe((data)=>{
    this.nota = Object.entries(data).map(i => i[1]);
     this.link = String(this.nota[0]?.link)
     this.titulo = String(this.nota[0]?.titulo)
     this.img = String(this.nota[0]?.subtitulo)
     this.imgPreview = this.img
      this._id = String(this.nota[0]?._id)



      console.log(this._id)

          // this.titulo = this.nota[0].titulo
    // this.img  = this.nota[0].subtitulo


   })



    // this.caurosel.unAnunciante = new CarouselModel
    this.caurosel.pedirUsuarios().subscribe(res=>{
    this.data = res as CarouselModel
    this.loader =false

    })

  }


  guardar(){
  //  this.loader = true

this.caurosel.unAnunciante._id = this._id
  this.caurosel.unAnunciante.marginLeft = 0
  this.caurosel.unAnunciante.link = this.link
  this.caurosel.unAnunciante.titulo = this.titulo
   this.caurosel.unAnunciante.subtitulo = this.img

  if(this._id === "62f53d844166e4933d7be0f3"){
    console.log('crea')
   this.caurosel.crearAnuncio(this.caurosel.unAnunciante).subscribe(res =>{
   alert(res)
   this.location.back();
   })
  } else {
    console.log('modifica')
    this.caurosel.modify(this.caurosel.unAnunciante._id, this.caurosel.unAnunciante).subscribe(res =>{
     alert(res)
      this.location.back();
      })






  }





  }


  back() {
    this.location.back();
  }

  onUpload() {
    let formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append(
        'archivos',
        this.uploadedFiles[i],
        this.uploadedFiles[i].name
      );
    }

    this.crudService.uploadFile(formData).subscribe((res) => {
      var link = Object.values(res);
      this.img = String(link);
      this.imgPreview = this.img
      console.log(this.caurosel.unAnunciante.subtitulo)
      this.loadingSubir = true;
      this.imagenSubida = true;
      this.SubirEstado= true;

    });
  }

  onFileChange(e) {
    this.SubirEstado = false;
    this.imagenSubida = false;
    this.uploadedFiles = e.target.files;
  }




}
