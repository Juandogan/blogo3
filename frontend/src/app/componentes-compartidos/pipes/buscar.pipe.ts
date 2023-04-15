import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(value:any , args:any): any {
    const resultPost =  [];

    for(const post of value){
      var aux = post._id + post.titulo

      if (aux.toLowerCase().indexOf(args.toLowerCase()) > -1 && post.categoria !== 'revista')
      {resultPost.push(post) }

    }
console.log(resultPost)
    return resultPost;
  }

}
