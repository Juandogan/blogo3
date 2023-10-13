import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveGuiaService } from '../services/resolve-guia.service';
import { ResolveNotaService } from '../services/resolve-nota.service';
import { ArticuloComponent } from './articulo/articulo.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CategoriaComponent } from './categoria/categoria.component';


import { CcamComponent } from './ccam.component';
import { GuiaArticuloComponent } from './guia-articulo/guia-articulo.component';
import { GuiaComponent } from './guia/guia.component';
import { MapasComponent } from './mapas/mapas.component';


const routes: Routes = [

 {path: '', component: CcamComponent },
 {path:'articulo/:_id', component: ArticuloComponent, resolve: {data: ResolveNotaService}},
 {path:'buscador', component:  BuscadorComponent, resolve: {data: ResolveNotaService} },
 {path:'mapas', component: MapasComponent },
 {path:'guia_/:_id', component: GuiaComponent, resolve: {data: ResolveGuiaService} },
 {path:'guias/:_id', component:  GuiaArticuloComponent, resolve: {data: ResolveGuiaService} },
 {path:'categoria/:_id', component:  CategoriaComponent, resolve: {data: ResolveNotaService} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CcamRoutingModule { }
