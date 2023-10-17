import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-categoria',
  templateUrl: './card-categoria.component.html',
  styleUrls: ['./card-categoria.component.css']
})
export class CardCategoriaComponent implements OnInit {



  @Input('data') data : any ;

  constructor() { }

  ngOnInit(): void {
  }
  cut(value:any){
    if(value){
    var corte = value.slice(2)
    }else{return}

   return corte
 };
}
