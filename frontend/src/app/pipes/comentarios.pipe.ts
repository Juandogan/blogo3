import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comentarios'
})
export class ComentariosPipe implements PipeTransform {


  transform(value:any, args:any): any {
    const resultPost =  [];

    for(const post of value){
      var aux = post.contadorComentarios

      if (aux.toLowerCase().indexOf(args.toLowerCase()) > -1 )
      {resultPost.push(post) }

    }

    return resultPost;
  }

}