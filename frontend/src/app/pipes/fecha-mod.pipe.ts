import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FechaMod'
})
export class FechaModPipe implements PipeTransform {
  transform(value: any[]): any[] {
    if (!value || value.length <= 1) {
      return value;
    }

    return value.sort((a, b) => {
      const fechaA = new Date(a.fechaMod).getTime();
      const fechaB = new Date(b.fechaMod).getTime();

      return fechaA - fechaB;
    });
  }
}
