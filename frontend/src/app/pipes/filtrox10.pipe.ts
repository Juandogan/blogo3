import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrox10'
})
export class Filtrox10Pipe implements PipeTransform {



  transform(value:any[]=[]){
    var pasaje =  value
    var indice = value.length
    var indice1 = indice - 20

return   pasaje.slice(indice1, indice)






}

}
