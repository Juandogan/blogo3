import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulos } from '../../modelos/articulos';
import { GuiaServiceService } from '../../services/guia-service.service';

@Component({
  selector: 'app-guia-articulo',
  templateUrl: './guia-articulo.component.html',
  styleUrls: ['./guia-articulo.component.css']
})
export class GuiaArticuloComponent implements OnInit {
  nota:any
  loader = true
  test:Articulos = new Articulos

    constructor(private ruta:ActivatedRoute, public guiaService:GuiaServiceService) { }


    ngOnInit() {

      this.ruta.data.subscribe((data)=>{
      this.nota = Object.entries(data).map(i => i[1])
      console.log(this.nota[0]?.nota)
      this.guiaService.unGuia = this.nota[0]

      this.loader = false})}
  };
