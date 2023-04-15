import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrox2'
})
export class Filtrox2Pipe implements PipeTransform {


  transform(value:any[]=[]){
    var pasaje =  value
    var indice = value.length
    var indice1 = indice - 2

return   pasaje.slice(indice1, indice).reverse()






}

}
