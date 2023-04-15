import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingObservableService } from 'src/app/services/loading-observable.service';
import { anunciante } from '../../modelos/anunciante';
import { Revista } from '../../modelos/revista';
import { CarouselModel } from '../../modelos/userCarousel';
import { CarouselServiceService } from '../../services/carousel-service.service';
import { CrudAnuncioService } from '../../services/crud-anuncio.service';
import { CrudService } from '../../services/crud.service';


@Component({
  templateUrl: './revistas.component.html',
  styleUrls: ['./revistas.component.css']
})
export class RevistasComponent implements OnInit {


  articulos:any
  anuncios:any
  loader = true
  carousel: any
  items:any

  constructor(public crudService:CrudService,
    private ruta:ActivatedRoute,
    private anunciosService:CrudAnuncioService,
    public carouselService:CarouselServiceService,
    public observerBarraText:LoadingObservableService
    ) {

      this.crudService.unRevista = new Revista
     }

  ngOnInit(): void {
    this.observerBarraText.estado$.emit(true)
    this.observerBarraText.load$.emit(true)
    this.pedirCarousel()
    this.pedirAnuncios()

    this.ruta.data.subscribe((data) => {

      this.articulos = Object.entries(data).map((i) => i[1]);
      console.log('entro con id')
      this.loader = false
     this.crudService.unRevista = this.articulos[0]
  // fragmento incrementa contador
  var aux = Number(this.crudService.unRevista.vistas)
  var aux2 = aux + 1
  this.crudService.unRevista.vistas = aux2
 console.log(this.crudService.unRevista.vistas , 'mod')
this.crudService.modificarRevista(this.crudService.unRevista)
.subscribe(res => {

 }

)     // fragmento incrementa contador




      });


    }


      pedirCarousel(){
      this.carouselService.pedirUsuarios().subscribe(res=>{
        this.carousel = res as CarouselModel
        this.items = this.carousel
        console.log('zzzzzzzzzzzzzzzzzzzzzz',this.items)
    })

      }

pedirAnuncios(){
    this.anunciosService.pedirUsuarios().subscribe(res=>{
      this.anuncios = res as anunciante
      console.log('dake',this.anuncios)

    })}

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

}
