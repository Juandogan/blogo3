import { Component, OnInit } from '@angular/core';
import { PortadaModel } from '../../modelos/portada';
import { CrudService } from '../../services/crud.service';
import { PortadaService } from '../../services/portada.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editor-portada',
  templateUrl: './editor-portada.component.html',
  styleUrls: ['./editor-portada.component.css']
})
export class EditorPortadaComponent implements OnInit {

  imagen=""
  titulo=""
  subtitulo=""
  categoria=""
  titulo2=""
  id : any
  articulo:any
  busqueda=""
  seleccion=""
  portada = new PortadaModel
  _id=""



  constructor(public Portada:PortadaService, private crudService:CrudService, public location:Location) { }

  ngOnInit(): void {
    this.Portada.pedirUsuarios().subscribe(res=>
      {
        this.portada = res as PortadaModel
        console.log(this.portada)
        this.Portada.portada = this.portada[0]
      })
  }

  volver(){
    this.location.back()
  }



  selectChange(){
    console.log("seleccion", this.seleccion)

    var  x = Number(this.seleccion)


    switch (x) {

      case 1:
 
        this.imagen = this.portada[0].imagen1
        this.titulo = this.portada[0].titulo1
        this.subtitulo = this.portada[0].subtitulo1
        this.categoria = this.portada[0].categoria1
        this.Portada.portada._id = this.portada[0]._id
        this.titulo2 = this.portada[0].titulo2
    


        break;
      case 2:
 
        this.imagen = this.portada[1].imagen1
        this.titulo = this.portada[1].titulo1
        this.subtitulo = this.portada[1].subtitulo1
        this.categoria = this.portada[1].categoria1
        this.Portada.portada._id = this.portada[1]._id
        this.titulo2 = this.portada[1].titulo2
        break;
        case 3:
 
          this.imagen = this.portada[2].imagen1
          this.titulo = this.portada[2].titulo1
          this.subtitulo = this.portada[2].subtitulo1
          this.categoria = this.portada[2].categoria1
          this.Portada.portada._id = this.portada[2]._id
          this.titulo2 = this.portada[2].titulo2
          break;
          case 4:
 
            this.imagen = this.portada[3].imagen1
            this.titulo = this.portada[3].titulo1
            this.subtitulo = this.portada[3].subtitulo1
            this.categoria = this.portada[3].categoria1
            this.Portada.portada._id = this.portada[3]._id
            this.titulo2 = this.portada[3].titulo2
            break;
            case 5:
 
              this.imagen = this.portada[4].imagen1
              this.titulo = this.portada[4].titulo1
              this.subtitulo = this.portada[4].subtitulo1
              this.categoria = this.portada[4].categoria1
              this.Portada.portada._id = this.portada[4]._id
              this.titulo2 = this.portada[4].titulo2
              break;
              case 6:
 
                this.imagen = this.portada[5].imagen1
                this.titulo = this.portada[5].titulo1
                this.subtitulo = this.portada[5].subtitulo1
                this.categoria = this.portada[5].categoria1
                this.Portada.portada._id = this.portada[5]._id
                this.titulo2 = this.portada[5].titulo2
                break;
                case 7:
 
                  this.imagen = this.portada[6].imagen1
                  this.titulo = this.portada[6].titulo1
                  this.subtitulo = this.portada[6].subtitulo1
                  this.categoria = this.portada[6].categoria1
                  this.Portada.portada._id = this.portada[6]._id
                  this.titulo2 = this.portada[6].titulo2
                  break;
                  case 8:
 
                    this.imagen = this.portada[7].imagen1
                    this.titulo = this.portada[7].titulo1
                    this.subtitulo = this.portada[7].subtitulo1
                    this.categoria = this.portada[7].categoria1
                    this.Portada.portada._id = this.portada[7]._id
                    this.Portada.portada.titulo2 = this.titulo2
                    this.titulo2 = this.portada[7].titulo2
                    break;
                    case 9:
 
                      this.imagen = this.portada[8].imagen1
                      this.titulo = this.portada[8].titulo1
                      this.subtitulo = this.portada[8].subtitulo1
                      this.categoria = this.portada[8].categoria1
                       this.Portada.portada._id = this.portada[8]._id
                       this.titulo2 = this.portada[8].titulo2
                      break;
                      case 10:
 
                        this.imagen = this.portada[9].imagen1
                        this.titulo = this.portada[9].titulo1
                        this.subtitulo = this.portada[9].subtitulo1
                        this.categoria = this.portada[9].categoria1
                          this.Portada.portada._id = this.portada[9]._id
                          this.titulo2 = this.portada[9].titulo2
                        break;
                        case 11:
 
                          this.imagen = this.portada[10].imagen1
                          this.titulo = this.portada[10].titulo1
                          this.subtitulo = this.portada[10].subtitulo1
                          this.categoria = this.portada[10].categoria1
                          this.Portada.portada._id = this.portada[10]._id
                          this.titulo2 = this.portada[10].titulo2

                          break;
                          case 12:
 
                            this.imagen = this.portada[11].imagen1
                            this.titulo = this.portada[11].titulo1
                            this.subtitulo = this.portada[11].subtitulo1
                            this.categoria = this.portada[11].categoria1
                            this.Portada.portada._id = this.portada[11]._id
                            this.titulo2 = this.portada[11].titulo2
                            break;
                            case 13:
 
                              this.imagen = this.portada[12].imagen1
                              this.titulo = this.portada[12].titulo1
                              this.subtitulo = this.portada[12].subtitulo1
                              this.categoria = this.portada[12].categoria1
                              this.Portada.portada._id = this.portada[12]._id
                              this.titulo2 = this.portada[12].titulo2
                              break;
                              case 14:
 
                                this.imagen = this.portada[13].imagen1
                                this.titulo = this.portada[13].titulo1
                                this.subtitulo = this.portada[13].subtitulo1
                                this.categoria = this.portada[13].categoria1
                                this.Portada.portada._id = this.portada[13]._id
                                this.titulo2 = this.portada[13].titulo2
                                break;
                                case 15:
 
                                  this.imagen = this.portada[14]?.imagen1
                                  this.titulo = this.portada[14]?.titulo1
                                  this.subtitulo = this.portada[14]?.subtitulo1
                                  this.categoria = this.portada[14]?.categoria1
                                  this.Portada.portada._id = this.portada[14]?._id
                                  this.titulo2 = this.portada[14].titulo2
                                  break;
   }
  }
  pedirUnArticulo(){

    this.crudService.getOneArticulo(this.busqueda)     
      .subscribe(res=>{ 
        this.articulo = res 
 console.log('xxxx',this.articulo)
 
      this.imagen = this.articulo.imagen1
      this.titulo = this.articulo.titulo
      this.subtitulo = this.articulo.subtitulo
      this.categoria = this.articulo.categoria
      this.titulo2 = this.busqueda
    })
   }


   guardar(){
    
    
    var  x = Number(this.seleccion)


    switch (x) {

      case 1:
 
        this.Portada.portada.imagen1 = this.imagen
        this.Portada.portada.titulo1 = this.titulo
        this.Portada.portada.subtitulo1 = this.subtitulo
        this.Portada.portada.categoria1 = this.categoria
        this.Portada.portada.titulo2 = this.titulo2 
        this._id = this.portada[0]._id
    
        
        
        break;
      case 2:
 
        this.Portada.portada.imagen1 = this.imagen
        this.Portada.portada.titulo1 = this.titulo
        this.Portada.portada.subtitulo1 = this.subtitulo
        this.Portada.portada.categoria1 = this.categoria
        this.Portada.portada.titulo2 = this.titulo2 
        this._id = this.portada[1]._id

 
        break;
        case 3:
 
          this.Portada.portada.imagen1 = this.imagen
          this.Portada.portada.titulo1 = this.titulo
          this.Portada.portada.subtitulo1 = this.subtitulo
          this.Portada.portada.categoria1 = this.categoria
          this.Portada.portada.titulo2 = this.titulo2 
          this._id = this.portada[2]._id
 
          break;
          case 4:
 
            this.Portada.portada.imagen1 = this.imagen
            this.Portada.portada.titulo1 = this.titulo
            this.Portada.portada.subtitulo1 = this.subtitulo
            this.Portada.portada.categoria1 = this.categoria
            this.Portada.portada.titulo2 = this.titulo2 
            this._id = this.portada[3]._id
 
            break;
            case 5:
 
              this.Portada.portada.imagen1 = this.imagen
              this.Portada.portada.titulo1 = this.titulo
              this.Portada.portada.subtitulo1 = this.subtitulo
              this.Portada.portada.categoria1 = this.categoria
              this.Portada.portada.titulo2 = this.titulo2 
              this._id = this.portada[4]._id
            
              break;
              case 6:
 
                this.Portada.portada.imagen1 = this.imagen
                this.Portada.portada.titulo1 = this.titulo
                this.Portada.portada.subtitulo1 = this.subtitulo
                this.Portada.portada.categoria1 = this.categoria
                this.Portada.portada.titulo2 = this.titulo2 
                this._id = this.portada[5]._id

                break;
                case 7:
 
                  this.Portada.portada.imagen1 = this.imagen
                  this.Portada.portada.titulo1 = this.titulo
                  this.Portada.portada.subtitulo1 = this.subtitulo
                  this.Portada.portada.categoria1 = this.categoria
                  this.Portada.portada.titulo2 = this.titulo2 
                  this._id = this.portada[6]._id
    
                  break;
                  case 8:
 
                    this.Portada.portada.imagen1 = this.imagen
                    this.Portada.portada.titulo1 = this.titulo
                    this.Portada.portada.subtitulo1 = this.subtitulo
                    this.Portada.portada.categoria1 = this.categoria
                    this.Portada.portada.titulo2 = this.titulo2 
                    this._id = this.portada[7]._id
  
                    break;
                    case 9:
 
                      this.Portada.portada.imagen1 = this.imagen
                      this.Portada.portada.titulo1 = this.titulo
                      this.Portada.portada.subtitulo1 = this.subtitulo
                      this.Portada.portada.categoria1 = this.categoria
                      this.Portada.portada.titulo2 = this.titulo2 
                      this._id = this.portada[8]._id
                   
                      break;
                      case 10:
 
                        this.Portada.portada.imagen1 = this.imagen
                        this.Portada.portada.titulo1 = this.titulo
                        this.Portada.portada.subtitulo1 = this.subtitulo
                        this.Portada.portada.categoria1 = this.categoria
                        this.Portada.portada.titulo2 = this.titulo2 
                        this._id = this.portada[9]._id
                     
                        break;
                        case 11:
 
                          this.Portada.portada.imagen1 = this.imagen
                          this.Portada.portada.titulo1 = this.titulo
                          this.Portada.portada.subtitulo1 = this.subtitulo
                          this.Portada.portada.categoria1 = this.categoria
                          this.Portada.portada.titulo2 = this.titulo2 
                          this._id = this.portada[10]._id
                     
                          break;
                          case 12:
 
                            this.Portada.portada.imagen1 = this.imagen
                            this.Portada.portada.titulo1 = this.titulo
                            this.Portada.portada.subtitulo1 = this.subtitulo
                            this.Portada.portada.categoria1 = this.categoria
                            this.Portada.portada.titulo2 = this.titulo2 
                            this._id = this.portada[11]._id
                          
                            break;
                            case 13:
 
                              this.Portada.portada.imagen1 = this.imagen
                              this.Portada.portada.titulo1 = this.titulo
                              this.Portada.portada.subtitulo1 = this.subtitulo
                              this.Portada.portada.categoria1 = this.categoria
                              this.Portada.portada.titulo2 = this.titulo2 
                              this._id = this.portada[12]._id
                  
                              break;
                              case 14:
 
                                this.Portada.portada.imagen1 = this.imagen
                                this.Portada.portada.titulo1 = this.titulo
                                this.Portada.portada.subtitulo1 = this.subtitulo
                                this.Portada.portada.categoria1 = this.categoria
                                this.Portada.portada.titulo2 = this.titulo2 
                                this._id = this.portada[13]._id
                           
                                break;
                                case 15:
 
                                  this.Portada.portada.imagen1 = this.imagen
                                  this.Portada.portada.titulo1 = this.titulo
                                  this.Portada.portada.subtitulo1 = this.subtitulo
                                  this.Portada.portada.categoria1 = this.categoria
                                  this.Portada.portada.titulo2 = this.titulo2 
                                  this._id = this.portada[14]?._id
                                 
                                  break;
   }
console.log(this.Portada.portada._id)
    
        if(  this._id  ){
          console.log('aaaaaaaa',this.Portada.portada)
      this.Portada.modify(this._id,  this.Portada.portada).subscribe(res=>{console.log(res) })
  
     }
else{
 this.Portada.crearAnuncio(this.Portada.portada).subscribe(res=>{console.log(res) })
  alert('guardado')
    }
 
    //  this.Portada.crearAnuncio(this.portada).subscribe(res=>{console.log(res) })}
  }
}