import { Component, OnInit } from '@angular/core';
import {  timer  } from 'rxjs';
import { anunciante } from '../../modelos/anunciante';
import { CrudAnuncioService } from '../../services/crud-anuncio.service';
import { CrudService } from '../../services/crud.service';
import { LoadingObservableService } from '../../services/loading-observable.service';
import { PortadaService } from '../../services/portada.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  // public carrouselData : Carousel []  = Carouse
  flag = false;
  // articulos: Articulos[] = [];
  articulos: any
  anuncios:any
  loader= true;
  portada:any
  aux = true;
  articuloCard:any
  portadaCarousel:any
  portadaTrio:any
  constructor(public crudService:CrudService,
     private loadingObservable:LoadingObservableService,
     private anunciosService:CrudAnuncioService,
     private PortadaCrud: PortadaService

     ) { }

  ngOnInit(): void {
window.scroll(0,0)



    this.pedirAnuncios()
    this.pedirArticulos()
    this.pedirPortada()
    this.loadingObservable.loading$.subscribe(res => {
    this.aux = res
    this.loader = res
      })


  }

  pedirPortada() {
    this.PortadaCrud.pedirUsuarios().subscribe(res=>{ 
      this.portada = res.slice(10,12)
      this.portadaCarousel = res.slice(0,9)
      this.portadaTrio = res.slice(12,15)
   console.log(this.portadaCarousel)
      
    })
   }
  sumarContadorAunciante(x){

    if(x == 1 ){

     var aux = this.anuncios[0].contador1
     var aux2 = aux + 1


      this.anuncios[0].contador1 = aux2

      this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
      })

    }
    if(x == 2 ){

      var aux = this.anuncios[0].contador2
      var aux2 = aux + 1


       this.anuncios[0].contador2 = aux2

       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })

     }
     if(x == 3 ){

      var aux = this.anuncios[0].contador3
      var aux2 = aux + 1


       this.anuncios[0].contador3 = aux2

       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })

     }
     if(x == 4 ){

      var aux = this.anuncios[0].contador4
      var aux2 = aux + 1


       this.anuncios[0].contador4 = aux2

       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })

     }
     if(x == 5 ){

      var aux = this.anuncios[0].contador5
      var aux2 = aux + 1


       this.anuncios[0].contador5 = aux2

       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })

     }
     if(x == 6){
      var aux = this.anuncios[0].contador6
      var aux2 = aux + 1
       this.anuncios[0].contador6 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 7){
      var aux = this.anuncios[0].contador6
      var aux2 = aux + 1
       this.anuncios[0].contador6 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 8){
      var aux = this.anuncios[0].contador8
      var aux2 = aux + 1
       this.anuncios[0].contador8 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 9){
      var aux = this.anuncios[0].contador9
      var aux2 = aux + 1
       this.anuncios[0].contador9 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 10){
      var aux = this.anuncios[0].contador10
      var aux2 = aux + 1
       this.anuncios[0].contador10 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 11){
      var aux = this.anuncios[0].contador11
      var aux2 = aux + 1
       this.anuncios[0].contador11 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 12){
      var aux = this.anuncios[0].contador12
      var aux2 = aux + 1
       this.anuncios[0].contador12 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 13){
      var aux = this.anuncios[0].contador13
      var aux2 = aux + 1
       this.anuncios[0].contador13 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 14){
      var aux = this.anuncios[0].contador14
      var aux2 = aux + 1
       this.anuncios[0].contador14 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 15){
      var aux = this.anuncios[0].contador15
      var aux2 = aux + 1
       this.anuncios[0].contador15 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 16){
      var aux = this.anuncios[0].contador16
      var aux2 = aux + 1
       this.anuncios[0].contador16 = aux2
       console.log(this.anuncios[0].contador16,"as")
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x === 17){
      var aux = this.anuncios[0].contador17
      var aux2 = aux + 1
       this.anuncios[0].contador17 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x === 18){
      var aux = this.anuncios[0].contador18
      var aux2 = aux + 1
       this.anuncios[0].contador18 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x === 19){
      var aux = this.anuncios[0].contador19
      var aux2 = aux + 1
       this.anuncios[0].contador19 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x === 20){
      var aux = this.anuncios[0].contador20
      var aux2 = aux + 1
       this.anuncios[0].contador20 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }

  }





  cambiarFlag(){
    this.flag = !this.flag;
  }

  pedirAnuncios(){
    this.anunciosService.pedirUsuarios().subscribe(res=>{
      this.anuncios = res as anunciante
      console.log('dake',this.anuncios)
      this.loader = false
      this.aux = false;
    })

  }

pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
  // this.crudService.getArticulos().subscribe(res =>{
  // this.articulos = res 
  // }); 

//  timer(0).subscribe(res=>{this.loader = false});
//     this.aux = false;
  }  

  cambiar(){

  }
};

