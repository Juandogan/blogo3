import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-bajo-portada',
  templateUrl: './card-bajo-portada.component.html',
  styleUrls: ['./card-bajo-portada.component.css']
})
export class CardBajoPortadaComponent implements OnInit {

  @Input('data') data : any ;
notas:any
  constructor() { 


   }

  ngOnInit(): void {
 
  console.log(this.data, 'asas')
  }

  cut(value:any){
    var corte = value?.slice(2)
 
   return corte
 }; 

}
