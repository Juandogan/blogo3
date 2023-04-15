import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarRevista'
})
export class BuscarRevistaPipe implements PipeTransform {

  transform(value:any, args:any): any {
    const resultPost =  [];

    for(const post of value){
      var aux = post._id 

      if (aux.indexOf('') > -1 && post._id !== '62e560bdb1913956ad28195f' )
      {resultPost.push(post) }

    }

    return resultPost;
  }

}
