import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RevistaComponent } from './revista.component';
import { ResolveNotaService } from '../services/resolve-nota.service';
import { ArticuloComponent } from './articulo/articulo.component';

const routes: Routes = [

  { path: '', component: RevistaComponent },
  { path:'articulos/:_id', component:  ArticuloComponent, resolve: {data: ResolveNotaService} },
  { path: 'articuloRevista/:_id',  component:  ArticuloComponent,  resolve: {data: ResolveNotaService}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevistaRoutingModule { }
