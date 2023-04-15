import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevistaRoutingModule } from './revista-routing.module';
import { RevistaComponent } from './revista.component';
import { IndiceComponent } from './indice/indice.component';
import { PortadaComponent } from './portada/portada.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RevistasComponent } from './revistas/revistas.component';

import { ComentariosComponent } from './comentarios/comentarios.component';
import { FormsModule } from '@angular/forms';
import { ArticuloComponent } from './articulo/articulo.component';
import { ComponentesCompartidosModule } from '../componentes-compartidos/componentes-compartidos.module';
import { SanetizerPipe } from '../componentes-compartidos/pipes/sanetizer.pipe';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CarouselRevistaComponent } from './carousel-revista/carousel-revista.component';
import { FooterRevistaComponent } from './footer-revista/footer-revista.component';

@NgModule({
  declarations: [
    RevistaComponent,
    PortadaComponent,
    IndiceComponent,
    CarouselComponent,
    RevistasComponent,
    ComentariosComponent,
    ArticuloComponent,
    SanetizerPipe,
    CarouselRevistaComponent,
    FooterRevistaComponent


  ],
  imports: [
    CommonModule,
    RevistaRoutingModule,
    FormsModule,
    ComponentesCompartidosModule,
    NgxUsefulSwiperModule,

  ]
})
export class RevistaModule { }
