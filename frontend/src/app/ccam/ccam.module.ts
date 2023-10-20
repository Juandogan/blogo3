import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CcamRoutingModule } from './ccam-routing.module';
import { CcamComponent } from './ccam.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentesCompartidosModule } from '../componentes-compartidos/componentes-compartidos.module';
import { PrincipalComponent } from './principal/principal.component';
import { CardMobileComponent } from './card-mobile/card-mobile.component';
import { CardBajoPortadaComponent } from './card-bajo-portada/card-bajo-portada.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { SanetizerPipe } from './pipes/sanetizer.pipe';
import { Filtrox2Pipe } from './pipes/filtrox2.pipe';
import { PosicionesPipe } from './pipes/posiciones.pipe';
import { CardBajopublix3Component } from './card-bajopublix3/card-bajopublix3.component';
import { TripleCardComponent } from './triple-card/triple-card.component';
import { RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';

import { FormsModule } from '@angular/forms';
import { BuscadorComponent } from './buscador/buscador.component';
import { BuscarPipe } from './pipes/buscar.pipe';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { FadeComponent } from './fade/fade.component';
import { MapasComponent } from './mapas/mapas.component';

import { Filtrox4Pipe } from './pipes/filtrox4.pipe';
import { GuiaComponent } from './guia/guia.component';
import { GuiaArticuloComponent } from './guia-articulo/guia-articulo.component';
import { FiltroGuiaPipe } from './pipes/filtro-guia.pipe';
import { CardBajoPortada2Component } from './card-bajo-portada2/card-bajo-portada2.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselRevistaComponent } from './carousel-revista/carousel-revista.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CarouselCategoriasComponent } from './carousel-categorias/carousel-categorias.component';
import { LateralIntercaladoComponent } from './lateral-intercalado/lateral-intercalado.component';
import { CardCategoriaComponent } from './card-categoria/card-categoria.component';
import { SubscripcionComponent } from './subscripcion/subscripcion.component';
import { EntrenamientosComponent } from './entrenamientos/entrenamientos.component';
import { TalleresComponent } from './talleres/talleres.component';
import { EquipoComponent } from './equipo/equipo.component';


@NgModule({
  declarations: [
    CcamComponent, NavbarComponent,
    PrincipalComponent,
    CardMobileComponent,
    CardBajoPortadaComponent,
    ArticuloComponent,
    SanetizerPipe,
    Filtrox2Pipe,
    Filtrox4Pipe,
    PosicionesPipe,
    BuscarPipe,
    CardBajopublix3Component,
    TripleCardComponent,
    BuscadorComponent,
    ComentariosComponent,
    FadeComponent,
    CategoriaComponent,
    MapasComponent,
    GuiaComponent,
    GuiaArticuloComponent,
    FiltroGuiaPipe,
    CardBajoPortada2Component,
    FooterComponent,
    CarouselRevistaComponent,
    CarouselCategoriasComponent,
    LateralIntercaladoComponent,
    CardCategoriaComponent,
    SubscripcionComponent,
    EntrenamientosComponent,
    TalleresComponent,
    EquipoComponent
  ],
  imports: [
    CommonModule,
    CcamRoutingModule,
    ComponentesCompartidosModule,
    RouterModule,
    FormsModule,
    NgxUsefulSwiperModule
  ]
})
export class CcamModule { }
