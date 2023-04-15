import { Component, OnInit, Input } from '@angular/core';
import { LoadingObservableService } from 'src/app/services/loading-observable.service';

@Component({
  selector: 'app-card-mobile',
  templateUrl: './card-mobile.component.html',
  styleUrls: ['./card-mobile.component.css']
})
export class CardMobileComponent implements OnInit {

  @Input('data') data: any;


  constructor(public loading$:LoadingObservableService) { }

  ngOnInit(): void {
console.log(this.data,'es esto')



  }

  pasar(){

    this.loading$.loading$.emit(true)



  }


  cut(value:any){
    var corte = value?.slice(2)

   return corte
 };

}
