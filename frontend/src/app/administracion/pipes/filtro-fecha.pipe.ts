import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(value: any, estado?:any,  args?: any  ): any {

    if(estado ==="creacion"){
      console.log('TESTE PIPE Mayor a menor', )

      if (args === true){
      //Order ascendente
      let newVal1 = value.sort((a: any, b: any) => {
        let date1 = new Date(a.fecha);
        let date2 = new Date(b.fecha);

        if (date2 > date1) {
            return 1;
        } else if (date2 < date1) {
             return -1;
         } else {
             return 0;
         }
     });

     return newVal1;

        } else {
          console.log('TESTE PIPE menor a mayor', )
          let newVal = value.sort((a: any, b: any) => {
            let date1 = new Date(a.fecha);
            let date2 = new Date(b.fecha);

            if (date1 > date2) {
                return 1;
            } else if (date1 < date2) {
                return -1;
            } else {
                return 0;
            }
        });
        return newVal;}
        }


        if(estado ==="vistas"){
          console.log('vistas')

          if (args === true){
          //Order ascendente
          let newVal1 = value.sort((a: any, b: any) => {
            let date1 = new Date(a.vistas);
            let date2 = new Date(b.vistas);

            if (date2 > date1) {
                return 1;
            } else if (date2 < date1) {
                 return -1;
             } else {
                 return 0;
             }
         });

         return newVal1;

            } else {
              console.log('vistas', )
              let newVal = value.sort((a: any, b: any) => {
                let date1 = new Date(a.vistas);
                let date2 = new Date(b.vistas);

                if (date1 > date2) {
                    return 1;
                } else if (date1 < date2) {
                    return -1;
                } else {
                    return 0;
                }
            });
            return newVal;}
            }








    }





}
