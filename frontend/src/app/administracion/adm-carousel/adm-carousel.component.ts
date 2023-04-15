import { Component, OnInit } from '@angular/core';
import { CarouselModel } from 'src/app/modelos/userCarousel';
import { CarouselServiceService } from 'src/app/services/carousel-service.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  templateUrl: './adm-carousel.component.html',
  styleUrls: ['./adm-carousel.component.css']
})
export class AdmCarouselComponent implements OnInit {
id:any
data:any
loader=true

  constructor(public caurosel:CarouselServiceService, public crudService:CrudService) {



   }

  ngOnInit(): void {
    this.caurosel.pedirUsuarios().subscribe(res=>{
    this.data = res as CarouselModel
    this.data = this.data.reverse()
    this.data = this.data.filter((element, index) => index < this.data.length - 1)




    this.loader = false
    console.log(this.data)

    })

  }



editar(x){


}

  eliminarArticulo(id:any){
    this.loader= true
     this.caurosel.eliminarUsuario(id).subscribe(res =>{
       this.crudService.snack(res);
       this.loader = false ;
       location.reload()
       })

     }


}
