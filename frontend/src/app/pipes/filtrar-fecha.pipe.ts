import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarFecha'
})
export class FiltrarFechaPipe implements PipeTransform {

    transform(value:any, arg:boolean): any {
    if (arg === true ){
    const resultPost =  [];
    var hoy = new Date()
   
    let newVal = value.sort((a: any, b: any) => {
    let date1 = Date.parse(a.fecha)
    let date2 = Date.parse(b.fecha);
  
    if (date1 > date2) {
         return 1;
      } 
      else if (date1 < date2) 
      {
          return -1;
      } else 
      {
          return 0;
      }
  });
     
  return newVal;


        }
    else{

  let newVal = value.sort((a: any, b: any) => {
    let date1 = Date.parse(a.fecha)
    let date2 = Date.parse(b.fecha);

    if (date2 > date1) {
        return 1;
    } else if (date2 < date1) {
        return -1;
    } else {
        return 0;
    }
});
   
return newVal;
    }

}}
