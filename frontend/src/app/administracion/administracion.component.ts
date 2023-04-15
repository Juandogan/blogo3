import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingObservableService } from '../services/loading-observable.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css'],
})
export class AdministracionComponent implements OnInit {

  loader = false;
  role  = ''
  gestor = false
  revista = false
  comentarios = false
  usuarios = false
  anunciantes = false
  carousel = false
  guia = false

  constructor(
    private observableLoading: LoadingObservableService,
    private auth: AuthService

  ) {
     this.role = this.auth.role
    
console.log(this.role ,'role')

  }

  ngOnInit(): void {

    if (this.role === 'admin'){
   this.gestor = true
   this.revista = true
   this.comentarios = true
   this.usuarios = true
   this.anunciantes = true
   this.carousel = true
   this.guia = true
    }

    if (this.role === 'editor'){
      this.gestor = true
      this.revista = true
      this.comentarios = true
      this.usuarios = false
      this.anunciantes = false
      this.carousel = false
      this.guia = true
       }

       if (this.role === 'colaborador'){
        this.gestor = true
        this.comentarios = true
        this.revista = false
        this.usuarios = false
        this.anunciantes = false
        this.carousel = false
         }





    this.observableLoading.loading$.subscribe(res=> res =this.loader)
    this.observableLoading.loading$.emit(true);
    window.scroll(0,0)
  }


  pasar(){
    this.loader = true
  }

  cerrarSesion() {
    this.auth.logOut();
  }
}
