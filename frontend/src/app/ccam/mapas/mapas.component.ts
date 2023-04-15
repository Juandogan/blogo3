import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  provincia ="Seleccione una provincia en el mapa"
  constructor() { }

  ngOnInit(): void {
  }



  test(prov){
 this.provincia = prov
  }


  test2(){
    this.provincia = "Seleccione una provincia en el mapa"
     }
}
