
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'posiciones'
})
export class PosicionesPipe implements PipeTransform {

 
    transform(value: any, arg:any): any {
      const resultPosts = [];
      for(const post of value){
        if(post.posicion == arg ){
           resultPosts.push(post);
        };
      };
      console.log(resultPosts)
      return resultPosts;
    }
  
  }