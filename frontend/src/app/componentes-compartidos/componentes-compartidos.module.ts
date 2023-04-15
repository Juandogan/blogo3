import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { ArticuloRelacionadoComponent } from './articulo-relacionado/articulo-relacionado.component';
import { ArticuloRelacionadoGuiaComponent } from './articulo-relacionado-guia/articulo-relacionado.component'
import { BuscarPipe } from './pipes/buscar.pipe';
import { EditorComponent } from './editor/editor.component';

import { Editor2Component } from './editor2/editor.component';
import { Editor3Component } from './editor3/editor.component';
import { SanetizerPipe } from '../pipes/sanetizer.pipe';
import { FormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import { FooterCardComponent } from './footer-card/footer-card.component';



@NgModule({
  declarations: [
    CarouselComponent,
    ArticuloRelacionadoComponent,
    BuscarPipe,
    SanetizerPipe,
    EditorComponent,
    Editor2Component,
    Editor3Component,
    FooterCardComponent,
    ArticuloRelacionadoGuiaComponent



  ],
  imports: [
    CommonModule, RouterModule, MatIconModule, FormsModule

  ],
  exports: [
    CarouselComponent,
    ArticuloRelacionadoComponent,
    EditorComponent,
    FooterCardComponent,
     Editor2Component,
     Editor3Component,
     ArticuloRelacionadoGuiaComponent


  ]
})
export class ComponentesCompartidosModule { }
