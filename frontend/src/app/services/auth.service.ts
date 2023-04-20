import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from './../modelos/userLogin';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
   //public URL ="http://localhost:3000/api"
  public URL = 'http://191.101.18.184/api';

  usuario = '';
  role = '';

  constructor(private http: HttpClient, private router: Router) {
    this.usuario = String(localStorage.getItem('usuario'));
  }

  pedirUsuarios() {
    return this.http.get<any>(this.URL + '/');
  }

  pedirUsuario(x) {
    return this.http.get<any>(this.URL + '/' + `/${x}`);
  }

  modify(x: string, user: UserLogin) {
    return this.http.put<any>(this.URL + '/' + `/${x}`, user);
  }

  eliminarUsuario(x) {
    return this.http.delete<any>(this.URL + `/${x}`);
  }

  signUp(user: UserLogin) {
    this.usuario = user.email;
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user: UserLogin) {
    this.usuario = user.email;
    return this.http.post<any>(this.URL + '/signin', user);
  }

  //sacado de udemy tienda virtual capitulo 10

// ahora no esta funcionando de 10 agregar esta linea y la de abajo y en el guard otra mas
  // loggedIn(allowRoles: string[]): boolean {
  loggedIn(): boolean {
    // return !!localStorage.getItem('token')
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(token);
      console.log('teste',decodedToken)
      if (!decodedToken) {
        return false;
      }
    } catch (error) {
      localStorage.removeItem('token');
      return false;
    }
      this.role  = decodedToken['role']

      console.log(this.role,'asasaasasasasasasasas')

      return true
    //  return allowRoles.includes(decodedToken['role']);
  }




  logueado(allowRoles: string[]): boolean {
    return true;
  }

  getToken(): any {
    return localStorage.getItem('token');
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['administracion/login']);
  }
}
