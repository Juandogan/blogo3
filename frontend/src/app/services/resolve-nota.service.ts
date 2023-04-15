
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';



import { CrudService } from './crud.service';
import { GuiaServiceService } from './guia-service.service';

@Injectable({
  providedIn: 'root'
})


export class ResolveNotaService implements Resolve<any>{

aux:any
  constructor(private crudService:CrudService, private guiaService:GuiaServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {

    if(route.paramMap.has('_id') ){
      this.crudService.loading = true
      console.log()
       return  this.crudService.getOneArticulo(route.paramMap.get('_id'))
       

    } else {
    return  this.crudService.getArticulos()
  }

  }
}
