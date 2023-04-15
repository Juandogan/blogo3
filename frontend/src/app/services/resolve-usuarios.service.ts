import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ResolveUsuariosService implements Resolve<any>{


  constructor(private auth:AuthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    if(route.paramMap.has('_id') ){
     return this.auth.pedirUsuario(route.paramMap.get('_id'))

    }else {
    return  this.auth.pedirUsuarios()
  }

  }
}
