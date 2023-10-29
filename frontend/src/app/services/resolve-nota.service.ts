
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';



import { CrudService } from './crud.service';
import { GuiaServiceService } from './guia-service.service';

@Injectable({
  providedIn: 'root'
})


export class ResolveNotaService implements Resolve<any>{
link:any
aux:any
  constructor(private crudService:CrudService, private guiaService:GuiaServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {

    if(route.paramMap.has('_id') ){
      this.crudService.loading = true
      
      this.link = route.paramMap.get('_id')
         console.log(this.link)
      if (this.link.length > 28 ) {
        
        return  this.crudService.getSitioViejo(this.link)
        
      } 
      else {
        console.log('paso por aca')
        return  this.crudService.getOneArticulo(route.paramMap.get('_id'))
      }

       
       

    } else {
    return  this.crudService.getArticulos()
  }

  }

  esNumero(cadena: string): boolean {
    // Usamos una expresión regular para verificar si la cadena contiene solo números
    const patron = /^[0-9]+$/;
    return patron.test(cadena);
    
  }
  

  
}
