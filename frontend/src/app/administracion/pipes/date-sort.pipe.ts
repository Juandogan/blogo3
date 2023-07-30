import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {
  transform(array: any[]): any[] {
    
    if (!Array.isArray(array)) {
      return array;
    }

    return array.sort((a, b) => {
      const dateA = new Date(a.fechaMod);
      const dateB = new Date(b.fechaMod);
      return dateA.getTime() - dateB.getTime();
    }).reverse();
  }
}
