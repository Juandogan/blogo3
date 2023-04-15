import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CrudAnuncioService } from './crud-anuncio.service';


@Injectable({
  providedIn: 'root'
})
export class ResolveAnuncianteService implements Resolve<any>{


  constructor(private anunciantes:CrudAnuncioService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    if(route.paramMap.has('_id') ){
     return this.anunciantes.pedirUsuario(route.paramMap.get('_id'))

    }else {
      
    return  this.anunciantes.pedirUsuarios()
  }

  }
}
