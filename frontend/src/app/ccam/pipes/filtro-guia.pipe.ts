import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroGuia'
})
export class FiltroGuiaPipe implements PipeTransform {

  transform(value:any, args:any): any {
    const resultPost =  [];

    for(const post of value){
      var aux =  post.provincia

      if (aux.toLowerCase().indexOf(args.toLowerCase()) > -1 && post.categoria !== 'revista' && post.provincia ===args)
      {resultPost.push(post) }

    }

    return resultPost;
  }

}
