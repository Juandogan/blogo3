import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLogin } from '../../modelos/userLogin';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';



@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
  user:UserLogin = new UserLogin
  id:any
  loader = false
  nota:any

  constructor(
    private authService: AuthService,
    private router:Router,
    private crudService:CrudService,
    private location:Location,
    private ruta:ActivatedRoute ) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.ruta.data.subscribe((data)=>{
      this.nota =  Object.entries(data).map(i => i[1])

      console.log('test',this.nota[0]._id)
      window.scroll(0,0)

      if(this.nota[0]._id !== "62e9744d635897ff2b866476"){
        this.user.email = this.nota[0].email
        this.user.password = this.nota[0].password
        this.user.role = this.nota[0].role
        this.id = this.nota[0]._id

      }

      else {this.user = new UserLogin }


  })


  }

//   signUp(){
//     this.authService.signUp(this.user).subscribe(res => {
//     localStorage.setItem('token', res.token)
//     this.loader = false;
//     this.router.navigate(['/administracion/usuarios'])
//   })


// }

back(){


  this.location.back()
}


guardar(){

  if(this.nota[0]._id === "63d955223014f9bfb46b6054" ){
    this.authService.signUp(this.user).subscribe(res => this.crudService.snack('Usuario creado'))
    this.location.back()
  } else if (this.nota[0]._id !== "62e9744d635897ff2b866476") {
    this.authService.modify(this.id, this.user).subscribe(res => this.crudService.snack('Usuario Modificado'))
    this.location.back()
  }

}


}
