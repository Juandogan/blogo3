import { Component, OnInit } from '@angular/core';

import {Subject} from 'rxjs';
import { BuscadorObservableService } from '../app/services/buscador-observable.service';
import { LoadingObservableService } from '../app/services/loading-observable.service';
//import { LoadingObservableService } from 'src/app/service/loading-observable.service';


@Component({
  selector: 'app-barra-negra',
  templateUrl: './barra-negra.component.html',
  styleUrls: ['./barra-negra.component.css']
})
export class BarraNegraComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  buscar:any
  existir:any
  buscarMensaje:string = ""
  claseAnima = false;
  estado = false
  public color = "rgb(33,33,33)"

  constructor(
    private oservable:BuscadorObservableService,
    private observableLoading:LoadingObservableService) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.observableLoading.load$.subscribe(res=>{
      console.log(res, 'respuests')
      this.estado = res})


      this.observableLoading.estado$.subscribe(res=>{
        this.existir = res
      })


  }



  pasar(va:any){
    this.oservable.buscarString$.emit(this.buscar)

  }

  loading(){
    this.observableLoading.loading$.emit(true)
 }

  filterList(): void {
    this.searchTerm$.subscribe(term => {
      console.log('observa',term)

    });
  }

}
