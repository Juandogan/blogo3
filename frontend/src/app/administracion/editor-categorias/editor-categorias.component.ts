import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Varios } from 'src/app/modelos/varios';
import { CrudVariosService } from 'src/app/services/crud-varios.service';

@Component({
  selector: 'app-editor-categorias',
  templateUrl: './editor-categorias.component.html',
  styleUrls: ['./editor-categorias.component.css']
})
export class EditorCategoriasComponent implements OnInit {
  categoriaSeleccion:any
  texto =""
  categoria:any
  data : Varios
  constructor(public crudVarios:CrudVariosService, private location: Location) { }

  ngOnInit(): void {

this.crudVarios.pedirVarios().subscribe(res=>{
this.categoria = res 
this.data = this.categoria[0] as Varios
console.log(this.data)

 })
  }

  back(){

    this.location.back();
  }

  

  seleccion(){ 
    console.log(this.categoriaSeleccion)

    if(this.categoriaSeleccion === "1")
    {
      this.texto = this.categoria[0].categoria1
      
      }
      if(this.categoriaSeleccion === "2")
      {
        this.texto = this.categoria[0].categoria2
        
        }
        if(this.categoriaSeleccion === "3")
        {
          this.texto = this.categoria[0].categoria3
          }
          if(this.categoriaSeleccion === "4")
          {
            this.texto = this.categoria[0].categoria4
            }
            if(this.categoriaSeleccion === "5")
            {
              this.texto = this.categoria[0].categoria5
              }
              if(this.categoriaSeleccion === "6")
              {
                this.texto = this.categoria[0].categoria6
                }
                if(this.categoriaSeleccion === "7")
                {
                  this.texto = this.categoria[0].categoria7
                  }
                  if(this.categoriaSeleccion === "8")
                  {
                    this.texto = this.categoria[0].categoria8
                    }
                    if(this.categoriaSeleccion === "9")
                    {
                      this.texto = this.categoria[0].categoria9
                      }

  }


  guardar(){
    if(this.categoriaSeleccion === "1")
    {
      this.data.categoria1 = this.texto
      }
      if(this.categoriaSeleccion === "2")
      {
        this.data.categoria2 = this.texto
        }
        if(this.categoriaSeleccion === "3")
        {
          this.data.categoria3 = this.texto
          }
          if(this.categoriaSeleccion === "4")
          {
            this.data.categoria4 = this.texto
            }
            if(this.categoriaSeleccion === "5")
            {
              this.data.categoria5 = this.texto
              }
              if(this.categoriaSeleccion === "6")
              {
                this.data.categoria6 = this.texto
                }
                if(this.categoriaSeleccion === "7")
                {
                  this.data.categoria7 = this.texto
                  }
                  if(this.categoriaSeleccion === "8")
                  {
                    this.data.categoria8 = this.texto
                    }
                    if(this.categoriaSeleccion === "9")
                    {
                      this.data.categoria9 = this.texto
                      }
   
        console.log('antes de guardar', this.data)
    this.crudVarios.modify('64a57bafdb19809b9d482ece',this.data).subscribe(res=>console.log(res))
   }

}


