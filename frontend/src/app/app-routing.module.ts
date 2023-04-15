import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoRevistaComponent } from './promo-revista/promo-revista.component';

import { RevistasComponent } from './revista/revistas/revistas.component';
import { ResolveRevistaService } from './services/resolve-revista.service';
// import { BuscadorComponent } from './ccam/buscador/buscador.component';
// import { ResolveNotaService } from './services/resolve-nota.service';

// import { TesteComponent } from './revista/teste/teste.component';

const routes: Routes = [
{ path: '',  loadChildren: () => import('./ccam/ccam.module').then(m => m.CcamModule) },
{ path: 'revista', loadChildren: () => import('./revista/revista.module').then(m => m.RevistaModule)},
{ path: 'revistas/:_id', component: RevistasComponent,  resolve: {data: ResolveRevistaService}},
{ path: 'promo/:_id',  component:  PromoRevistaComponent,  resolve: {data: ResolveRevistaService}},

{ path: 'administracion', loadChildren: () => import('./administracion/administracion.module').then(m => m.AdministracionModule) },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [

  ]
})
export class AppRoutingModule { }
