import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuiaModel } from 'src/app/modelos/guia';
import { GuiaServiceService } from 'src/app/services/guia-service.service';

@Component({
  selector: 'app-guia-articulo',
  templateUrl: './guia-articulo.component.html',
  styleUrls: ['./guia-articulo.component.css']
})
export class GuiaArticuloComponent implements OnInit {

  constructor(private ruta:ActivatedRoute, public guiaService:GuiaServiceService) {

  }

anuncios:any
guia:any
dataRelacionada:any

  ngOnInit(): void {
    this.ruta.data.subscribe((data) => {
      this.guia = Object.entries(data).map((i) => i[1]);

      this.guiaService.unGuia = this.guia[0]
      this.dataRelacionada = this.guia[0].relacionados.split('>');

              // fragmento incrementa contador
              var aux = Number(this.guiaService.unGuia.vistas)

               var aux2 = aux + 1
               this.guiaService.unGuia.vistas = aux2
              console.log(this.guiaService.unGuia.vistas , 'mod')
             this.guiaService.modificarGuia(this.guiaService.unGuia._id, this.guiaService.unGuia)
             .subscribe(res => {



               }

             )     // fragmento incrementa contador

    });


    this.guiaService.pedirGuias().subscribe(res=>{this.anuncios = res; })
  }

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

                                       aux2 = aux2.split('</strong></p>').join('</h6></div></p>')

                                      // aux2 = aux2.split('<img style="width:100%; margin-top:10px" src="').join('<a href="')
                                      // aux2 = aux2.split('ng">').join('ng"></a>')
                                       aux2 = aux2.split('<figure class="image">').join('<figure class="image" style="margin-bottom:0px">')




  // console.log(aux2)
    return (aux2)


     };

}
