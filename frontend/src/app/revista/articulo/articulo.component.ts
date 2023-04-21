import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { Location } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CrudAnuncioService } from '../../services/crud-anuncio.service';
import { Articulos } from '../../modelos/articulos';
import { CarouselServiceService } from '../../services/carousel-service.service';
import { LoadingObservableService } from '../../services/loading-observable.service';

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
    private crudAnuncio: CrudAnuncioService,
    private  carouselService: CarouselServiceService,
    public observerBarraText:LoadingObservableService

  ) {

    this.crudService.unArticulo = new Articulos

  }


carEstado = false
  loader = true
  nota: any;
  anuncios:any
  auxContador: number = 0;
  items:any

  ngOnInit(): void {
    this.observerBarraText.load$.emit(true)


    window.scroll(0, 0);
    this.carouselService.pedirUsuarios().subscribe(res=>{
      this.items = res
    })

    this.ruta.data.subscribe((data) => {
      this.nota = Object.entries(data).map((i) => i[1]);
      this.crudService.unArticulo = this.nota[0];

      console.log(this.nota[0],'veremos')
      this.observerBarraText.estado$.emit(true)

      // fragmento incrementa contador

        var aux = Number(this.crudService.unArticulo.vistas)

      var aux2 = aux + 1

      this.crudService.unArticulo.vistas = aux2
     console.log(this.crudService.unArticulo.vistas , 'mod')
    this.crudService.modificarArticulo(this.crudService.unArticulo)
    .subscribe(res => {

     }

    )
    // fragmento incrementa contador




    });

    this.crudAnuncio.pedirUsuarios().subscribe(res=>{this.anuncios = res;
       this.loader=false
       this.carEstado = true
      })
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



  saltos(data:string){


    var aux2 = data.split('<h1>').join(`<h1 style=" font-weight: 700;
line-height: 32px;
letter-spacing: -1px;
font-size:30px!important;
color:orange;
margin-bottom:15px;
text-align:left;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
`)




aux2 = aux2.split('<h2>').join(`<h2 style=" font-weight: 700;
line-height: 28px;
text-align:left;
letter-spacing: -1px;
font-size:21px!important;
color: rgb(75, 75, 75);
margin-bottom:15px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
`)

aux2 = aux2.split('<h3').join(`<h3 style="font-weight: 400;
line-height: 30px;
letter-spacing: 0px;
font-size:22px;
color:orange;
margin-bottom:10px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"`)

aux2 = aux2.split('<p').join(`<p style="font-weight: 400;margin-top:-10px;font-size: 18px;line-height: 28px;color:rgb(68, 68, 68);text-align:justify;text-justify:inter-character;"`)

                                      // aux2 = aux2.split('<strong').join('<strong style="font-size:14px;  font-weight: 800;"')
                                      // aux2 = aux2.split('</p></strong>').join('</p></b>')

                                      // <img style="width:100%; margin-top:10px" src="http://168.197.50.191/upload/_BTJMOy-ce0StAhwmUC8V_AN.jpg">



                                      aux2 = aux2.split('<img').join('<img style="width:100%; margin-top:10px; margin-bottom:10px"')

                                      // aux2 = aux2.split('<strong>').join('<strong style="font-size:18px;line-height: 0px!important;  ">')
                                      aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/')
                                      aux2 = aux2.split(' ,').join(', ')
                                      aux2 = aux2.split(' .').join('. ')



                                      aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="')
                                      aux2 = aux2.split('<h4>').join('<h4 style="font-weight:500;  text-align:center!important; font-size:14px;  margin-bottom:20px;">')





                                      //          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                                      // line-height: 22px;
                                      // letter-spacing: 0px;
                                      // font-size: 14px!important;
                                      // color: rgb(43, 43, 43);
                                      // margin-bottom: 5px;
                                      // text-align: center;




                                      aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                                      aux2 = aux2.split('<a ').join('<a target="_blank"')

                                       aux2 = aux2.split('character;"><strong>').join('character;"><div style="text-align:center!important;"><h6>')

                                        aux2 = aux2.split('</strong></p>').join('</h6></strong></div></p>')

                                      // aux2 = aux2.split('<img style="width:100%; margin-top:10px" src="').join('<a href="')
                                      // aux2 = aux2.split('ng">').join('ng"></a>')
                                       aux2 = aux2.split('<figure class="image">').join('<figure class="image" style="margin-bottom:0px">')



 console.log('sa' + aux2)
  // console.log(aux2)
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
        console.log('contador!');
      });
  }

  subir(){
    window.scroll(0,0)
  }
  volver(){this.location.back()}

  ngOnDestroy() {
    this.sumarContador();
  }
}
