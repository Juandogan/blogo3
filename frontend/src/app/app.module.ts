import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BarraNegraComponent } from 'src/barra-negra/barra-negra.component';
import { ComponentesCompartidosModule } from './componentes-compartidos/componentes-compartidos.module';
import { ResolveNotaService } from './services/resolve-nota.service';
import { ResolveRevistaService } from './services/resolve-revista.service';
import { ResolveUsuariosService } from './services/resolve-usuarios.service';
import { ResolveAnuncianteService } from './services/resolve-anunciantes.service';
import { ResolveCarouselService } from './services/resolve-carousel.service';
import {MatMenuModule} from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CrudService } from '../app/services/crud.service';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CrudAnuncioService } from './services/crud-anuncio.service';
import { PromoRevistaComponent } from './promo-revista/promo-revista.component';
import { CarouselServiceService } from './services/carousel-service.service';
import { GuiaServiceService } from './services/guia-service.service';
import { ResolveGuiaService } from './services/resolve-guia.service';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
 

@NgModule({
  declarations: [
    AppComponent,  BarraNegraComponent, PromoRevistaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentesCompartidosModule,
    FormsModule,
    CKEditorModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    MatMenuModule,
    NgxUsefulSwiperModule
 
 
 
  ],



  providers: [CarouselServiceService,
    CrudAnuncioService, CrudService, GuiaServiceService, ResolveGuiaService,ResolveCarouselService, ResolveAnuncianteService, ResolveNotaService, ResolveRevistaService, ResolveUsuariosService,  AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService,
      multi:true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
