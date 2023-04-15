import { Component, OnInit } from '@angular/core';
import { BuscadorObservableService } from 'src/app/services/buscador-observable.service';
import { LoadingObservableService } from 'src/app/services/loading-observable.service';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  buscar:any
  buscarMensaje:string = ""
  claseAnima = false;

  public color = "rgb(33,33,33)"

constructor(private oservable:BuscadorObservableService,
   private observableLoading:LoadingObservableService) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.observableLoading.estado$.emit(true)

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
