import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarFechaMod'
})
export class FiltrarFechaModPipe implements PipeTransform {


  transform(value:any, arg:boolean): any {
    if (arg === true ){
    const resultPost =  [];
    var hoy = new Date()
   
    let newVal = value.sort((a: any, b: any) => {
    let date1 = Date.parse(a.fechaMod)
    let date2 = Date.parse(b.fechaMod);
  
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
    let date1 = Date.parse(a.fechaMod)
    let date2 = Date.parse(b.fechaMod);

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