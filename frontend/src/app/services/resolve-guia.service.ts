import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GuiaServiceService } from './guia-service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuiaService implements Resolve<any>{


  constructor(private guiaService:GuiaServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    if(route.paramMap.has('_id') ){
     return this.guiaService.pedirGuia(route.paramMap.get('_id'))

    }else {
    return  this.guiaService.pedirGuias()
  }

  }
}
