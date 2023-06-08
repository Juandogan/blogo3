import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { CrudService } from '../../services/crud.service';
import {  timer  } from 'rxjs';

@Component({
  selector: 'app-ccamAdm',
  templateUrl: './ccamAdm.component.html',
  styleUrls: ['./ccamAdm.component.css'],
})
export class CcamAdmComponent implements OnInit {
  estado = ""
  borrando = false
  borrado = false
  copiado = false
  id: any;
  notas: any;
  loader = false;
  buscar = '';
  page=0
  pageCount=1
  search=""
  cantArt: number = 0;
  estadoFiltro = true
  estadoFiltro2 = true
  estadoFiltro3 = true
  estadoFiltro4 = true
  filtro = 'creacion'

  constructor(
    private ruta: ActivatedRoute,
    private clipboard: Clipboard,
    public crudService: CrudService
  ) {}

  ngOnInit() {
    window.scroll(0,0)
    this.loader = true;
    // this.ruta.data.subscribe((data: any) => {

    //   data = data.data;
    //   this.notas = Object.entries(data).map((i) => i[1]);
    //   this.notas = this.notas.reverse();
    //   this.cantArt = this.notas.length;
    //   this.loader = false;
    //   console.log(this.notas,"as")

    // });

    this.crudService.getArticulos().subscribe(res=>{
this.notas = res
this.notas = this.notas.reverse()
this.cantArt = this.notas.length;
this.loader = false;
console.log('esto',res)

    })

  }
  buscar2(x:string){  
    this.page = 0
    this.search = x
  }
  abrirVistaprevia (x:any){
    
    window.open('http://revistadigital.culturademontania.org.ar/articulo/' + x , "_blank")
}
  
  nextPage(){
    this.page += 5
    this.pageCount ++

  }

  

 
  
  prevPage(){
    if(this.page > 0)
    {
     this.page -=5 
     this.pageCount --  
    }
  }
  CambiarFiltro(z:string){
    this.filtro =z

  }

  fechaFiltro() {
    alert('holas  ')
    var x = !x;

      this.notas = this.notas.reverse();

  }

  loading() {
    window.scroll(0,0)
    this.loader = true;
  }

  eliminarArticulo(id: any) {
    this.crudService.deleteArticulo(id).subscribe((res) => {
              location.reload()

      //location.reload()

    });
  }

  copyToClipboard(value: any): void {
    // Se copia el texto del input al portapapeles
    this.copiado= true
    this.clipboard.copy(value);
       timer(3000).subscribe(res=>{this.copiado = false; ;
     })
    }
}

