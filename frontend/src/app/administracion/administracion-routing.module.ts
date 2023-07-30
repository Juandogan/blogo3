import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveNotaService } from '../services/resolve-nota.service';
import { AdministracionComponent } from './administracion.component';
import { CcamAdmComponent } from './ccamAdm/ccamAdm.component';

import { EditorCabeceraComponent } from './editorCabecera/editorCabecera.component';
import { EditorArticuloComponent } from './editorArticulo/editorArticulo.component';
import { AdmRevistaComponent } from './adm-revista/adm-revista.component';
import { AuthGuard } from '../guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon/logon.component';
import { AdmComentariosComponent } from './adm-comentarios/adm-comentarios.component';
import { AdmRevistaFormComponent } from './adm-revista-form/adm-revista-form.component';
import { ResolveRevistaService } from '../services/resolve-revista.service';
import { ResolveUsuariosService } from '../services/resolve-usuarios.service';
import { ResolveGuiaService } from '../services/resolve-guia.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ComentariosEditorComponent } from './comentarios-editor/comentarios-editor.component';
import { AnunciantesComponent } from './anunciantes/anunciantes.component';
import { ResolveAnuncianteService } from '../services/resolve-anunciantes.service';
import { ResolveCarouselService } from '../services/resolve-carousel.service';
import { AdmCarouselComponent } from './adm-carousel/adm-carousel.component';
import { CabeceraCarouselComponent } from './cabecera-carousel/cabecera-carousel.component';
import { AdmGuiaComponent } from './adm-guia/adm-guia.component';
import { EditorGuiaComponent } from './editor-guia/editor-guia.component';
import { GuiaArticuloComponent } from './guia-articulo/guia-articulo.component';
import { EditorRevistaComponent } from './editor-revista/editor-revista.component';
import { EditorPortadaComponent } from './editor-portada/editor-portada.component';
import { EditorCategoriasComponent } from './editor-categorias/editor-categorias.component';



const routes: Routes = [
  {path:'login', component:  LoginComponent},
  {path:'logon/:_id', component:  LogonComponent, resolve: {data: ResolveUsuariosService}  , canActivate: [AuthGuard]},
  { path: '', component: AdministracionComponent , canActivate: [AuthGuard]},
  { path: 'ccamAdm', component: CcamAdmComponent, canActivate: [AuthGuard]},
  { path:'editorCabecera/:_id', component:  EditorCabeceraComponent, resolve: {data: ResolveNotaService}  , canActivate: [AuthGuard]},
  { path:'editorArticulo/:_id', component:  EditorArticuloComponent, resolve: {data: ResolveNotaService} , canActivate: [AuthGuard]},
  { path:'admRevista', component:  AdmRevistaComponent  , canActivate: [AuthGuard] },
  { path:'admComentarios', component:  AdmComentariosComponent, resolve: {data: ResolveNotaService} , canActivate: [AuthGuard] },
  { path:'admRevistaForm/:_id', component:  AdmRevistaFormComponent  , resolve: {data: ResolveRevistaService} ,canActivate: [AuthGuard] },
  { path:'usuarios', component:  UsuariosComponent  , resolve: {data: ResolveRevistaService} ,canActivate: [AuthGuard] },
  { path:'editorComentarios/:_id', component:  ComentariosEditorComponent  , resolve: {data: ResolveNotaService} ,canActivate: [AuthGuard] },
  { path:'anunciantes/:_id', component:  AnunciantesComponent , resolve: {data: ResolveAnuncianteService} ,canActivate: [AuthGuard] },
  { path:'carousel', component:  AdmCarouselComponent , resolve: {data: ResolveCarouselService} ,canActivate: [AuthGuard] },
  { path:'nuevoCarousel/:_id', component:  CabeceraCarouselComponent , resolve: {data: ResolveCarouselService} ,canActivate: [AuthGuard] },
  { path:'guia', component:  AdmGuiaComponent , resolve: {data: ResolveGuiaService} ,canActivate: [AuthGuard] },
  { path:'editorguia/:_id', component:  EditorGuiaComponent, resolve: {data: ResolveGuiaService} ,canActivate: [AuthGuard] },
  { path:'guiaArticulos/:_id', component: GuiaArticuloComponent , resolve: {data: ResolveGuiaService}, canActivate: [AuthGuard] },
  { path:'editorRevista/:_id', component: EditorRevistaComponent , resolve: {data: ResolveRevistaService}, canActivate: [AuthGuard] },
  { path:'ccamPortada', component:  EditorPortadaComponent },
  { path:'editorCategorias', component:  EditorCategoriasComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
   declarations: [

   ]
})
export class AdministracionRoutingModule { }
