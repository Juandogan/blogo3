import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../../modelos/userLogin';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loader=false

  //creo objeto de usuario
user:UserLogin = new UserLogin
imagenEvita = true
errorUsuario =false
errorPassword = false
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {

  }


  signIn(){
    this.authService.signIn(this.user).subscribe({
      next:res => {
      localStorage.setItem('token', res)
      localStorage.setItem('usuario', String(this.user.email))
      this.loader = false;
      this.router.navigate(['/administracion'])

                  },

      error: error =>{
        console.log(error)
       this.errorUsuario = true

      this.loader = false;

      }


    }


    )


  }




  }
