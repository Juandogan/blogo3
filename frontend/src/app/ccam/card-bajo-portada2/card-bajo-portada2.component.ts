import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-bajo-portada2',
  templateUrl: './card-bajo-portada2.component.html',
  styleUrls: ['./card-bajo-portada2.component.css']
})
export class CardBajoPortada2Component implements OnInit {

  @Input('data') data : any ;
notas:any
  constructor() { 


   }

  ngOnInit(): void {
 
  
  }

  cut(value:any){
    var corte = value?.slice(2)
 
   return corte
 }; 

}
