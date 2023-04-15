import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-triple-card',
  templateUrl: './triple-card.component.html',
  styleUrls: ['./triple-card.component.css']
})
export class TripleCardComponent implements OnInit {

  
  @Input('data') data : any ;

  constructor() { }

  ngOnInit(): void {
  }

  cut(value:any){
    var corte = value.slice(2)
   return corte
 };

}
