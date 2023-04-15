import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscadorObservableService } from 'src/app/services/buscador-observable.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  @Input('data') data : any  
  nota:any
  filterPost=""
  aux:any
  constructor(private ruta:ActivatedRoute, private observable:BuscadorObservableService ) { }

  ngOnInit(): void {
    this.ruta.data.subscribe((data:any)=>{this.nota = data.data; console.log(this.nota)})
    // this.searchTerm$.subscribe(term => {}
     this.aux=""

    this.observable.buscarString$.subscribe(res => {
      this.aux = res
      console.log('buscador', this.aux)
     
    })
   
 

    
//     this.ruta.data.subscribe((data)=>{
//       this.nota = Object.entries(data).map(i => i[1]);
//       console.log(this.nota)
// })
  }

  cut(value:any){
    if( value) {
    var corte = value.slice(2)
    return corte
  } else
   return value
 };
}
