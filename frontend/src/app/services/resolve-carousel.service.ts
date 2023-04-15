import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CarouselServiceService } from './carousel-service.service';



@Injectable({
  providedIn: 'root'
})
export class ResolveCarouselService implements Resolve<any>{


  constructor(private CarouselData:CarouselServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    if(route.paramMap.has('_id') ){
     return this.CarouselData.pedirUsuario(route.paramMap.get('_id'))

    }else {
    return  this.CarouselData.pedirUsuarios()
  }

  }
}
