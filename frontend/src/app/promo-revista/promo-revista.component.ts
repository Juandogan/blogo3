import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-promo-revista',
  templateUrl: './promo-revista.component.html',
  styleUrls: ['./promo-revista.component.css']
})
export class PromoRevistaComponent implements OnInit {

  articulos:any
  constructor(private crudService:CrudService, private ruta:ActivatedRoute ) { }

  ngOnInit(): void {


    this.ruta.data.subscribe((data) => {
      this.articulos = Object.entries(data).map((i) => i[1]);
      console.log(this.articulos)
      }


)}
}
