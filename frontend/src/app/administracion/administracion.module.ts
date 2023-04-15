import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CcamAdmComponent } from './ccamAdm/ccamAdm.component';
import { BuscarPipe } from './buscar.pipe';
import { EditorCabeceraComponent } from './editorCabecera/editorCabecera.component';
import { EditorArticuloComponent } from './editorArticulo/editorArticulo.component';
import { ComponentesCompartidosModule } from '../componentes-compartidos/componentes-compartidos.module';
import { AdmRevistaComponent } from './adm-revista/adm-revista.component';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon/logon.component';
import { AdmComentariosComponent } from './adm-comentarios/adm-comentarios.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AutofocusDirective } from '../directivas/autofocus.directive';
import { AdmRevistaFormComponent } from './adm-revista-form/adm-revista-form.component';
import { BuscarRevistaPipe } from '../pipes/buscar-revista.pipe';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ComentariosEditorComponent } from './comentarios-editor/comentarios-editor.component';
import { AnunciantesComponent } from './anunciantes/anunciantes.component';
import { FiltroFechaPipe } from './pipes/filtro-fecha.pipe';
import { AdmCarouselComponent } from './adm-carousel/adm-carousel.component';
import { CabeceraCarouselComponent } from './cabecera-carousel/cabecera-carousel.component';
import { AdmGuiaComponent } from './adm-guia/adm-guia.component';
import { EditorGuiaComponent } from './editor-guia/editor-guia.component';
import { GuiaArticuloComponent } from './guia-articulo/guia-articulo.component';
import { EditorRevistaComponent } from './editor-revista/editor-revista.component'

import { TesteMensajesComponent } from './teste-mensajes/teste-mensajes.component';
import { EditorPortadaComponent } from './editor-portada/editor-portada.component';

@NgModule({
  declarations: [
    AdministracionComponent,
     CcamAdmComponent,
     BuscarPipe,
     BuscarRevistaPipe,
     EditorCabeceraComponent,
     EditorArticuloComponent,
     AdmRevistaComponent,
     LoginComponent,
     LogonComponent,
     AdmComentariosComponent,
     NavbarComponent,
     AutofocusDirective,
     AdmRevistaFormComponent,
     UsuariosComponent,
     ComentariosEditorComponent,
     AnunciantesComponent,
     FiltroFechaPipe,
     AdmCarouselComponent,
     CabeceraCarouselComponent,
     AdmGuiaComponent,
     EditorGuiaComponent,
     GuiaArticuloComponent,
     EditorRevistaComponent,
     TesteMensajesComponent,
     EditorPortadaComponent,




  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    ComponentesCompartidosModule,



  ]



})



export class AdministracionModule { }
