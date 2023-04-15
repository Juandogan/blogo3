import { Component, OnInit, Input } from '@angular/core';
import { BuscadorObservableService } from 'src/app/services/buscador-observable.service';
import { LoadingObservableService } from 'src/app/services/loading-observable.service';
import { Subject} from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})





export class NavbarComponent implements OnInit {

  @Input('data') data : any ;

  searchTerm$ = new Subject<string>();
  buscar:any
  buscarMensaje:string = ""
  claseAnima = false;
  nombreUsuarioLogueado =""

  public color = "rgb(33,33,33)"

constructor(private oservable:BuscadorObservableService,
  private observableLoading:LoadingObservableService,
  public auth:AuthService,
  private router:Router,
  private location:Location
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.observableLoading.estado$.emit(true)
    if(localStorage.getItem('usuario')){
    this.nombreUsuarioLogueado =  localStorage.getItem('usuario')
    }else {this.nombreUsuarioLogueado = "NO LOGUEADO"}



  }

  home2(){

    this.location.back()
  }

  home(){
    this.router.navigate(['/administracion'])
  }

 cerrarSesion(){
  this.auth.logOut()

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
