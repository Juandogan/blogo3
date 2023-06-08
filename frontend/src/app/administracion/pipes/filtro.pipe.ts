import { Pipe, PipeTransform } from '@angular/core';
import { Articulos } from '../../modelos/articulos';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Articulos[], page: number = 0, search: string): Articulos[] {
    if (search === '' || search === null) {
      return value.slice(page, page + 10);
    }

    const filtroArticulos = value.filter((res: Articulos) =>
      this.normalizeString(String(res.posicion)).includes(this.normalizeString(search))
    );

    return filtroArticulos.slice(page, page + 10);
  }

  private normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
}