import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../../modelos/userLogin';

import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
articulos:any
loader=true
id:any
  constructor(
    public auth:AuthService,
    private router:Router,
    public crudService:CrudService) {  }

  ngOnInit(): void {

    this.start()

  }


  pedirUsuario(x){

    this.auth.pedirUsuario(x).subscribe(res=>{
      this.articulos = res as UserLogin;

    })
  }

  loaderS(){
    window.scroll(0,0)
    this.loader= true
    window.scroll(0,0)
  }

start(){
  this.auth.pedirUsuarios().subscribe(res=>{
    this.articulos = res as UserLogin;

    this.articulos = this.articulos.reverse()
     this.articulos = this.articulos.filter((element, index) => index < this.articulos.length - 2);
    console.log(this.articulos)
    this.loader=false
  })

}

eliminarUsuario(dataID:any){
  this.loader = true
this.auth.eliminarUsuario(dataID).subscribe(res => {
  location.reload()})

}



crearNuevoUsuario(){
  this.router.navigate(['/administracion/logon/63d955223014f9bfb46b6054'])
}

}
