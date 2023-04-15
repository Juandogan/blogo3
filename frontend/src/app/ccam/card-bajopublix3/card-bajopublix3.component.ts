import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-bajopublix3',
  templateUrl: './card-bajopublix3.component.html',
  styleUrls: ['./card-bajopublix3.component.css']
})
export class CardBajopublix3Component implements OnInit {



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
