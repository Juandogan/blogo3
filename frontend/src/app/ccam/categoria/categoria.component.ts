import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { Location } from '@angular/common';
import { LoadingObservableService } from '../../services/loading-observable.service';
import { CrudAnuncioService } from '../../services/crud-anuncio.service';
import { CrudVariosService } from 'src/app/services/crud-varios.service';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria:any
  loader = true
  loader2 = false
  anuncios:any
  constructor(private ruta:ActivatedRoute,
    public crudService:CrudService,
    private location: Location,
    private observableLoading:LoadingObservableService,
    private anunciosService:CrudAnuncioService,
    private variosService:CrudVariosService
    ) {


  }
  nota:any;
  data:any
  aux:any;
  articulos:any

  ngOnInit(): void {

    this.observableLoading.loading$.subscribe(res => {

      this.aux = res})
      

    window.scroll(0,0)
    // this.ruta.data.subscribe((data:any)=>{this.nota = data.data; console.log(data)})
    this.ruta.params.subscribe(params=>{this.categoria = params['_id'];      
      this.observableLoading.loading$.emit(false)
      console.log(this.categoria,'antes de pedir')
      this.crudService.getCategorias(this.categoria).subscribe(res  => {
        this.articulos = res;
        console.log(this.articulos, 'resultado de busqueda')
          this.anunciosService.pedirUsuarios().subscribe(res  => {
            this.anuncios = res
            this.loader2 = true
            this.loader= false
          })

     })
      
      
    })

    this.variosService.pedirVario('64a57bafdb19809b9d482ece').subscribe(res=>{ 

      this.data = res 
      console.log(res)
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

}
