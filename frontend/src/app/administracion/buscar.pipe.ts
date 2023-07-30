import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];

    for (const post of value) {
      const aux = post._id + post.titulo + post.subtitulo + post.categoria + post.nota + post.autor;
      const searchValue = args.toLowerCase();
      const normalizedAux = this.removeAccents(aux.toLowerCase());

      if (normalizedAux.includes(searchValue) && post.categoria !== 'revista') {
        resultPost.push(post);
      }
    }

    return resultPost;
  }

  private removeAccents(str: string): string {
    const accentsMap = {
      'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
      'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
      'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u',
      'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u'
    };

    return str.replace(/[áéíóúàèìòùäëïöüâêîôû]/g, match => accentsMap[match]);
  }

}
