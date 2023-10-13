import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { Location } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CrudAnuncioService } from '../../services/crud-anuncio.service';
import { Articulos } from '../../modelos/articulos';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],

  // encapsulation: ViewEncapsulation.None,
})
export class ArticuloComponent implements OnInit {
  constructor(
    private ruta: ActivatedRoute,
    public crudService: CrudService,
    private location: Location,
    private anunciosService: CrudAnuncioService

  ) {

    this.crudService.unArticulo = new Articulos

  }
  loader2=false
  loader = true
  nota: any;
  anuncios:any
  auxContador: number = 0;
  dataRelacionado:any
  dataRelacionado2:any

  ngOnInit(): void {
    window.scroll(0, 0);
    this.ruta.data.subscribe((data) => {      
      this.nota = Object.entries(data).map((i) => i[1]);
      this.crudService.unArticulo = this.nota[0];  
      

      if(this.nota[0].art2){
        this.dataRelacionado = this.crudService.unArticulo;
        this.loader2=true
   
      }else{
        this.crudService.getCategorias(this.crudService.unArticulo.categoria).subscribe(res=>{
          var aux = res     
          this.dataRelacionado = this.randomNoRepeat(aux);  
          this.loader2=true
          console.log(this.dataRelacionado,"+++++++")
        });
  
    
  
      }
      // this.dataRelacionado = this.nota[0]
      var aux = Number(this.crudService.unArticulo.vistas)
      var aux2 = aux + 1
      this.crudService.unArticulo.vistas = aux2
      this.crudService.modificarArticulo(this.crudService.unArticulo)
      .subscribe(res => {
        
     })
    // fragmento incrementa contador
    
    });


      this.anunciosService.pedirUsuarios().subscribe(res=>{
        this.anuncios = res; 
        this.loader=false});

        this.crudService.getCategorias(this.crudService.unArticulo.categoria).subscribe(res=>{
          var aux = res     
          this.dataRelacionado2 = this.randomNoRepeat(res);  
          this.loader2=true});
          
    }
  

//   saltos(data: any) {

//     var aux2 = data.split('<h1>').join(`<h1 style=" font-weight: 800;
//     line-height: 32px;
//     letter-spacing: -1px;
//     font-size:25px!important;
//     color:orange;
//     margin-bottom:15px;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
//      `);
//     //titulo
//     var aux2 = data.split('<h2>').join(`<h2 style=" font-weight: 700;
//     line-height: 32px;
//     letter-spacing: -1px;
//     font-size:25px!important;
//     color:orange;
//     margin-bottom:15px;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
//      `);

//     //titulo

//     aux2 = aux2.split('<h3').join(`<h3
//     style="font-weight: 400;
//     line-height: 30px;
//     letter-spacing: 0px;
//     margin-bottom:10px;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"`)
//     ;

//     //subtitulo
//     aux2 = aux2.split('<p').join(`<p style="
//     font-weight: 400;
//     margin-top:-10px;
//     font-size: 18px;
//     line-height: 28px;
//     color:rgb(68, 68, 68);
//     text-align:justify;
// text-justify:inter-character;
//     "`);

//     //subtitulo


//     aux2 = aux2.split('<img').join('<img style="width:100%; margin-top:10px; margin-bottom:10px"')

//     aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/')
//     aux2 = aux2.split(' ,').join(', ')
//     aux2 = aux2.split(' .').join('. ')
//     aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="')
//     aux2 = aux2.split('<h4>').join('<h4 style="text-align:center!important; font-size:15px; margin-top:10px; margin-bottom:30px;">')
//     aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
//     aux2 = aux2.split('<a ').join('<a target="_blank"')
//     aux2 = aux2.split('</a></p><p><strong>').join('</a></p><p style="text-align:center"><strong>')


//     // aux2 = aux2.split('<strong>').join('<strong style="font-size:18px; ">')
//     // aux2 = aux2
//     // .split('https://www.youtube.com/watch?v=')
//     // .join('https://www.youtube.com/embed/');

//     // aux2 = aux2
//     // .split('<figure class="media"><oembed url="')
//     // .join('<iframe width="100%" height="515" src="');

//     // aux2 = aux2
//     //   .split('"></oembed></figure>')
//     //   .join(
//     //     '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//     //   );

//     // console.log('sa' + aux2);

//     return aux2;
//   }

 randomNoRepeat(arr){

console.log(arr)


  let newArr = [];
  while(arr.length > 0) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomElement = arr[randomIndex];
    newArr.push(randomElement);
    arr.splice(randomIndex, 1);
  }
  return newArr;
}

saltos(data:string){
  var aux2 = data.split('<h1>').join(`<h1 style=" font-weight: 700; 
line-height: 32px;
letter-spacing: -1px;
font-size:30px!important;
color:orange;
margin-bottom:15px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
`)
aux2 = aux2.split('<h2>').join(`<h2 style=" font-weight: 700; 
line-height: 32px;
letter-spacing: -1px;
font-size:30px!important;
color:orange;
margin-bottom:15px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
`)
   
aux2 = aux2.split('<h3').join(`<h3 style="
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 500;
line-height: 32px;
letter-spacing: -1px;
font-size: 20px!important;
color: rgb(63, 63, 63);
margin-bottom: 10px;


"`)

aux2 = aux2.split('<p').join(`<p style="
                              font-weight: 400;
                              margin-top:-10px;
                              font-size: 18px; 
                              line-height: 28px;
                              color:rgb(68, 68, 68);
                              text-align:justify;  
                     text-justify:inter-character;
                              "`)
                                                                      
                                    // aux2 = aux2.split('<strong').join('<strong style="font-size:14px;  font-weight: 800;"')
                                    // aux2 = aux2.split('</p></strong>').join('</p></b>')

                                    // <img style="width:100%; margin-top:10px" src="http://168.197.50.191/upload/_BTJMOy-ce0StAhwmUC8V_AN.jpg">
                                    

                                    

                                    aux2 = aux2.split('<img').join('<img style="width:100%; margin-top:10px; margin-bottom:10px"')
                                    
                                    aux2 = aux2.split('<strong>').join('<strong style="line-height: 0px!important; ">')
                                    aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/')
                                    aux2 = aux2.split(' ,').join(', ')
                                    aux2 = aux2.split(' .').join('. ')
                                    aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="')
                                    aux2 = aux2.split('<h4>').join('<h4 style="text-align:center!important; font-size:15px; margin-top:-20px; margin-bottom:30px;">')
                                    aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                                    aux2 = aux2.split('<a ').join('<a target="_blank"')
                                    aux2 = aux2.split('</a></p><p><strong>').join('</a></p><p style="text-align:center"><strong>')

                                    // aux2 = aux2.split('<img style="width:100%; margin-top:10px" src="').join('<a href="')
                                    // aux2 = aux2.split('ng">').join('ng"></a>')
                                    // aux2 = aux2.split('pg">').join('pg"></a>')
              
                                    
// console.log('sa' + aux2)
// console.log(aux2)
  return (aux2)


   };


   saltos2(data: string) {
    var aux2 = data.split('<h2 style="margin-left:0px;text-align:justify;">').join(`<h2 style=" font-weight: 700; 
  line-height: 32px;
  letter-spacing: -1px;
  font-size:25px!important;
  color:orange;
  margin-bottom:15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
   `)

 
 

    aux2 =  aux2 = data.split('<figcaption>').join(`<figcaption style="  
         
    font-size:15px!important;
    margin-bottom:15px;
    text-align:center!important;
    color:rgb(68, 68, 68);
    
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
     `)
 
    

    aux2 = aux2.split('<h3').join(`<h3 style="font-weight: 400; line-height: 30px;letter-spacing: 0px;font-size:22px;color:orange;margin-bottom:10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"`)

 
                                    aux2 = aux2.split('<p').join(`<p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;"`)
                            
                                    aux2 =  aux2.split('<h1>').join(`<h1 style=" font-weight: 700; 
                                    line-height: 32px;
                                    letter-spacing: -1px;
                                    font-size:29px!important;
                                    color:orange!important;
                                    margin-bottom:15px;
                                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                     `)
                                    aux2 =  aux2.split('<h2>').join(`<h2 style=" font-weight: 700; 
                                    line-height: 32px;
                                    letter-spacing: -1px;
                                    font-size:29px!important;
                                    color:orange!important;
                                    margin-bottom:15px;
                                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                     `)
    // aux2 = aux2.split('<strong').join('<strong style="font-size:14px;  font-weight: 800;"')
    // aux2 = aux2.split('</p></strong>').join('</p></b>')

    // <img style="width:100%; margin-top:10px" src="http://168.197.50.191/upload/_BTJMOy-ce0StAhwmUC8V_AN.jpg">




    aux2 = aux2.split('<img').join('<img style="width:100%!important; margin-top:10px; margin-bottom:10px"')


    aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/')
    aux2 = aux2.split(' ,').join(', ')
    aux2 = aux2.split(' .').join('. ')
    aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="')
    aux2 = aux2.split('<h4>').join('<h4 style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;">')
    aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    aux2 = aux2.split('<a ').join('<a target="_blank"')
    aux2 = aux2.split('style="margin-left:0px;text-align:center;"').join('style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"')
    aux2 = aux2.split('style="text-align:center!important;"').join('style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"')
    aux2 = aux2.split('<figure ').join('<figure style="width:100%!important" ')
      
    //regla pie de foto3




    //regla pie de foto1



     aux2 = aux2.split('</a></p><p style="margin-left:0px;text-align:center; font-size:14px!important"><strong>')
     .join('</a></p><p style="margin-left:0px;text-align:center;"><div style="text-align:center!important;"><strong>')      
       aux2 = aux2.split('</strong>').join('</strong></div>')
//regla pie de foto2
       aux2 = aux2.split('</a><strong>').join('</a><div style="text-align:center!important;"><strong>')      
         aux2 = aux2.split('</strong>').join('</strong></div>')
         aux2 = aux2.split('https://www.culturademontania.org.ar').join('http://old.culturademontania.org.ar')
         aux2 = aux2.split('http://www.culturademontania.org.ar').join('http://old.culturademontania.org.ar')

         aux2 = aux2.split('<div style="text-align:center!important;margin-top:-10px"><strong>').join('<div style="text-align:center!important;margin-top:-10px; font-size:14px!important"><strong>')      
         









     
     //</a></p><p style="margin-left:0px;text-align:center;"><strong>
 

    var aux2 = aux2.split('<h2 style="margin-left:0px;text-align:justify;"').join(`<h2 style=" font-weight: 700; 
    line-height: 32px;
    letter-spacing: -1px;
    font-size:25px!important;
    color:orange;
    margin-bottom:19px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
     `)
     var aux2 = aux2.split('<h1 style="margin-left:0px;text-align:justify;"').join(`<h1 style=" font-weight: 700; 
     line-height: 32px;
     letter-spacing: -1px;
     font-size:25px!important;
     color:orange;
     margin-bottom:19px;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
      `)

      aux2 = aux2.split('jpg"></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><strong>')
.join('jpg"></p><div style="text-align:center!important;margin-top:-10px"><strong>')      
aux2 = aux2.split('</strong>').join('</strong></div>')

aux2 = aux2.split('alt=""></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><strong>')
.join('alt=""></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><div style="text-align:center!important;margin-top:-10px"><strong>')      
aux2 = aux2.split('</strong>').join('</strong></div>')

aux2 = aux2.split('jpg"></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><strong>"><strong>')
.join('jpg"></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><div style="text-align:center!important;margin-top:-10px"><strong>')      
aux2 = aux2.split('</strong>').join('</strong></div>')



aux2 = aux2.split('jpg"></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><strong>')
.join('jpg"></a></p><p style="font-weight: 400;margin-top:-10px;font-size: 18px; line-height: 28px; color:rgb(68, 68, 68);text-align:justify; text-justify:inter-character;" style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"><div style="text-align:center!important;margin-top:-10px"><strong>')      
aux2 = aux2.split('</strong>').join('</strong></div>')















      console.log(aux2)
    
    return (aux2)


  };
  cut(value: any) {
    var corte = value.slice(2);

    return corte;
  }

  sumarContador() {
    this.crudService
      .modificarArticulo(this.crudService.unArticulo)
      .subscribe((res) => {
        // console.log('contador!');
      });
  }

  subir(){
    window.scroll(0,0)
  }
  volver(){this.location.back()}


  sumarContadorAunciante(x){

    if(x == 1 ){

     var aux = this.anuncios[0].contador1
     var aux2 = aux + 1


      this.anuncios[0].contador1 = aux2

      this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
      })

    }
    if(x == 2 ){

      var aux = this.anuncios[0].contador2
      var aux2 = aux + 1


       this.anuncios[0].contador2 = aux2

       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })

     }
     if(x == 3 ){

      var aux = this.anuncios[0].contador3
      var aux2 = aux + 1


       this.anuncios[0].contador3 = aux2

       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })

     }
     if(x == 4 ){

      var aux = this.anuncios[0].contador4
      var aux2 = aux + 1


       this.anuncios[0].contador4 = aux2

       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })

     }
     if(x == 5 ){

      var aux = this.anuncios[0].contador5
      var aux2 = aux + 1


       this.anuncios[0].contador5 = aux2

       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })

     }
     if(x == 6){
      var aux = this.anuncios[0].contador6
      var aux2 = aux + 1
       this.anuncios[0].contador6 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 7){
      var aux = this.anuncios[0].contador6
      var aux2 = aux + 1
       this.anuncios[0].contador6 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 8){
      var aux = this.anuncios[0].contador8
      var aux2 = aux + 1
       this.anuncios[0].contador8 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 9){
      var aux = this.anuncios[0].contador9
      var aux2 = aux + 1
       this.anuncios[0].contador9 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 10){
      var aux = this.anuncios[0].contador10
      var aux2 = aux + 1
       this.anuncios[0].contador10 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 11){
      var aux = this.anuncios[0].contador11
      var aux2 = aux + 1
       this.anuncios[0].contador11 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 12){
      var aux = this.anuncios[0].contador12
      var aux2 = aux + 1
       this.anuncios[0].contador12 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 13){
      var aux = this.anuncios[0].contador13
      var aux2 = aux + 1
       this.anuncios[0].contador13 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 14){
      var aux = this.anuncios[0].contador14
      var aux2 = aux + 1
       this.anuncios[0].contador14 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 15){
      var aux = this.anuncios[0].contador15
      var aux2 = aux + 1
       this.anuncios[0].contador15 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x == 16){
      var aux = this.anuncios[0].contador16
      var aux2 = aux + 1
       this.anuncios[0].contador16 = aux2
      //  console.log(this.anuncios[0].contador16,"as")
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x === 17){
      var aux = this.anuncios[0].contador17
      var aux2 = aux + 1
       this.anuncios[0].contador17 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x === 18){
      var aux = this.anuncios[0].contador18
      var aux2 = aux + 1
       this.anuncios[0].contador18 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x === 19){
      var aux = this.anuncios[0].contador19
      var aux2 = aux + 1
       this.anuncios[0].contador19 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }
     if(x === 20){
      var aux = this.anuncios[0].contador20
      var aux2 = aux + 1
       this.anuncios[0].contador20 = aux2
       this.anunciosService.modify(this.anuncios[0]._id, this.anuncios[0]).subscribe(res=>{
       })
     }

  }

  ngOnDestroy() {
    this.sumarContador();
  }
}
