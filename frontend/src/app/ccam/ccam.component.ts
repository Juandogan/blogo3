import { Component, OnInit } from '@angular/core';
import { Articulos } from '../modelos/articulos';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-ccam',
  templateUrl: './ccam.component.html',
  styleUrls: ['./ccam.component.css']
})
export class CcamComponent implements OnInit {

  articulos : any
  constructor(private crudService : CrudService) { }

  
  ngOnInit(): void {

    // this.crudService.getArticulos().subscribe(res=>{
    //   this.articulos = res
    //   console.log(res)
    // })


  }

}
