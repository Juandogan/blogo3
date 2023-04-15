import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  animations: [

    // [@inOutAnimation]

    // trigger('inOutAnimation', [
    //   // ...
    //   state('open', style({
    //     height: '200px',
    //     opacity: 1,
    //     backgroundColor: 'yellow'
    //   })),
    //   state('closed', style({
    //     height: '100px',
    //     opacity: 0.8,
    //     backgroundColor: 'blue'
    //   })),
    //   transition('open => closed', [
    //     animate('1s')
    //   ]),
    //   transition('closed => open', [
    //     animate('0.15s')
    //   ]),
    // ]),
    // trigger(
    //   'inOutAnimation', [
    //     transition(':enter', [
    //       style({ opacity: 0}),
    //       animate('1200ms', style({transform: 'translateX(0)', opacity: 1}))
    //     ]),
    //     transition(':leave', [
    //       style({opacity: 1}),
    //       animate('1200ms', style({opacity: 0}))
    //     ])
    //   ]
    // )
  ]





})
export class IndiceComponent implements OnInit {

  @Input('data') data : any ;


  link= ""
  titulo =''
  descripcion= ''
  ruta=''
  constructor() {

   }

  ngOnInit(): void {
console.log(this.data,'sdsd')
  this.cambioImagen1()


  }

  cambioImagen1(){

    this.descripcion = this.data?.resultadoCategoria
    this.link= this.data?.resultadoImagen
    this.titulo= this.data?.art1
    this.ruta =this.data?.resultadoID

  }

  cambioImagen2(){
    this.descripcion= this.data?.resultadoCategoria2
    this.link = this.data?.resultadoImagen2
    this.titulo= this.data?.art2
    this.ruta =this.data?.resultadoID2

  }
  cambioImagen3(){
    this.descripcion= this.data?.resultadoCategoria3
    this.link = this.data?.resultadoImagen3
    this.titulo= this.data?.art3
    this.ruta =this.data?.resultadoID3
  }
    cambioImagen4(){
      this.descripcion= this.data?.resultadoCategoria4
      this.link = this.data?.resultadoImagen4
      this.titulo= this.data?.art4
      this.ruta =this.data?.resultadoID4
  }
  cambioImagen5(){
    this.descripcion= this.data?.resultadoCategoria5
    this.link = this.data?.resultadoImagen5
    this.titulo= this.data?.art5
    this.ruta =this.data?.resultadoID5
  }
  cambioImagen6(){
    this.descripcion= this.data?.resultadoCategoria6
    this.link = this.data?.resultadoImagen6
    this.titulo= this.data?.art6
    this.ruta =this.data?.resultadoID6
  }
  cambioImagen7(){
    this.descripcion= this.data?.resultadoCategoria7
    this.link = this.data?.resultadoImagen7
    this.titulo= this.data?.art7
    this.ruta =this.data?.resultadoID7
  }
  cambioImagen8(){
    this.descripcion= this.data?.resultadoCategoria8
    this.link = this.data?.resultadoImagen8
    this.titulo= this.data?.art8
    this.ruta =this.data?.resultadoID8
  }



  goToLink(url: string){ window.open(url, "_blank"); }




}
