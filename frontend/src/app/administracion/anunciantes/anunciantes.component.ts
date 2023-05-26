import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { anunciante } from '../../modelos/anunciante';

import { CrudAnuncioService } from '../../services/crud-anuncio.service';
import { CrudService } from '../../services/crud.service';

@Component({
  templateUrl: './anunciantes.component.html',
  styleUrls: ['./anunciantes.component.css'],
})
export class AnunciantesComponent implements OnInit {
  public uploadedFiles: Array<File> = [];
  loadingSubir = true;
  seleccion = 0
  loadingSubir2 = true;
  SubirEstado = true;
  SubirEstado2 = true;
  imagenSubida = false;
  imagenSubida2 = false;
  loaderCrear = false;
  imgPromo = '';
  imgPortada = '';
  anunciantes: any;
  contador=0

  imagenVista =""
  link=""

  link1 = '';
  link2 = '';
  link3 = '';
  link4 = '';
  link5 = '';
  link6 = '';
  link7 = '';
  link8 = '';
  link9 = '';
  link10 = '';
  link11 = '';
  link12 = '';
  link13 = '';
  link14 = '';
  link15 = '';
  link16 = '';
  link17 = '';
  link18 = '';
  link19 = '';
  link20 = '';
 
  link21 = '';
  link22 = '';
  link23 = '';
  link24 = '';
  link25 = '';
  link26 = '';
  link27 = '';
  link28 = '';
  link29 = '';
  link30 = '';


  img1 = '';
  img2 = '';
  img3 = '';
  img4 = '';
  img5 = '';
  img6 = '';
  img7 = '';
  img8 = '';
  img9 = '';
  img10 = '';
  img11 = '';
  img12 = '';
  img13 = '';
  img14 = '';
  img15 = '';
  img16 = '';
  img17 = '';
  img18 = '';
  img19 = '';
  img20 = '';
  img21 = '';
  img22 = '';
  img23 = '';
  img24 = '';
  img25 = '';
  img26 = '';
  img27 = '';
  img28 = '';
  img29 = '';
  img30 = '';


  contador1 = '';
  contador2 = '';
  contador3 = '';
  contador4 = '';
  contador5 = '';
  contador6 = '';
  contador7 = '';
  contador8 = '';
  contador9 = '';
  contador10 = '';
  contador11 = '';
  contador12 = '';
  contador13 = '';
  contador14 = '';
  contador15 = '';
  contador16 = '';
  contador17 = '';
  contador18 = '';
  contador19 = '';
  contador20 = '';
  contador21 = '';
  contador22 = '';
  contador23 = '';
  contador24 = '';
  contador25 = '';
  contador26 = '';
  contador27 = '';
  contador28 = '';
  contador29 = '';
  contador30 = '';


  constructor(
    public anuncianteService: CrudAnuncioService,
    public crudService: CrudService,
    public ruta: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {

    // this.anuncianteService.crearAnuncio(this.anuncianteService.unAnunciante).subscribe(res=>{
    //   console.log(res)
    // }
    //   )

    window.scroll(0,0)
    this.ruta.data.subscribe((data) => {
      this.anunciantes = Object.entries(data).map((i) => i[1]);
      console.log('esto', this.anunciantes);

      this.anuncianteService.unAnunciante = this.anunciantes[0];
      this.seleccion = 1
      this.imagenVista = this.anunciantes[0].img1
      console.log(this.imagenVista)
      this.link = this.anunciantes[0].link1
      this.contador = this.anunciantes[0]?.contador1

      this.img1 = this.anunciantes[0].img1
      this.link1 = this.anunciantes[0].link1
      this.contador2 = this.anunciantes[0].contador2

      this.img2 = this.anunciantes[0].img2
      this.link2 = this.anunciantes[0].link2
      this.contador3 = this.anunciantes[0].contador3

      this.img3 = this.anunciantes[0].img3
      this.link3 = this.anunciantes[0].link3
      this.contador4 = this.anunciantes[0].contador4


      this.img4 = this.anunciantes[0].img4
      this.link4= this.anunciantes[0].link4
      this.contador5 = this.anunciantes[0].contador5

      this.img5 = this.anunciantes[0].img5
      this.link5 = this.anunciantes[0].link5
      this.contador6 = this.anunciantes[0].contador6

      this.img6 = this.anunciantes[0].img6
      this.link6 = this.anunciantes[0].link6
      this.contador7 = this.anunciantes[0].contador7

      this.img7 = this.anunciantes[0].img7
      this.link7 = this.anunciantes[0].link7
      this.contador8 = this.anunciantes[0].contador8

      this.img8 = this.anunciantes[0].img8
      this.link8 = this.anunciantes[0].link8
      this.contador9 = this.anunciantes[0].contador9

      this.img9 = this.anunciantes[0].img9
      this.link9 = this.anunciantes[0].link9
      this.contador10 = this.anunciantes[0].contador10

      this.img10 = this.anunciantes[0].img10
      this.link10 = this.anunciantes[0].link10
      this.contador11 = this.anunciantes[0].contador11

      this.img11 = this.anunciantes[0].img11
      this.link11 = this.anunciantes[0].link11
      this.contador12 = this.anunciantes[0].contador12

      this.img12 = this.anunciantes[0].img12
      this.link12 = this.anunciantes[0].link12
      this.contador13 = this.anunciantes[0].contador13

      this.img13 = this.anunciantes[0].img13
      this.link13 = this.anunciantes[0].link13
      this.contador14 = this.anunciantes[0].contador14

      this.img14 = this.anunciantes[0].img14
      this.link14= this.anunciantes[0].link14
      this.contador15 = this.anunciantes[0].contador15

      this.img15 = this.anunciantes[0].img15
      this.link15 = this.anunciantes[0].link15
      this.contador16 = this.anunciantes[0].contador16

      this.img16 = this.anunciantes[0].img16
      this.link16 = this.anunciantes[0].link16
      this.contador17 = this.anunciantes[0].contador17

      this.img17 = this.anunciantes[0].img17
      this.link17 = this.anunciantes[0].link17
      this.contador18 = this.anunciantes[0].contador18

      this.img18 = this.anunciantes[0].img18
      this.link18 = this.anunciantes[0].link18
      this.contador19 = this.anunciantes[0].contador19

      this.img19 = this.anunciantes[0].img19
      this.link19 = this.anunciantes[0].link19
      this.contador20 = this.anunciantes[0].contador20

      this.img20 = this.anunciantes[0].img20
      this.link20 = this.anunciantes[0].link20
      this.link21 = this.anuncianteService[0]?.link20  

      this.img21 = this.anunciantes[0].img21
      this.link21 = this.anunciantes[0].link21
      this.link22 = this.anuncianteService[0]?.link22

      this.img22 = this.anunciantes[0].img22
      this.link22 = this.anunciantes[0].link22
      this.link23 = this.anuncianteService[0]?.link23

 
      this.img23 = this.anunciantes[0].img23
      this.link23 = this.anunciantes[0].link23
      this.link24 = this.anuncianteService[0]?.link24

 
      this.img24 = this.anunciantes[0].img24
      this.link24 = this.anunciantes[0].link24
      this.link25 = this.anuncianteService[0]?.link25

 
      this.img25 = this.anunciantes[0].img25
      this.link25 = this.anunciantes[0].link25
      this.link26 = this.anuncianteService[0]?.link26

 
      this.img26 = this.anunciantes[0].img26
      this.link26 = this.anunciantes[0].link26
      this.link27 = this.anuncianteService[0]?.link27
 
      this.img27 = this.anunciantes[0].img27
      this.link27 = this.anunciantes[0].link27
      this.link28 = this.anuncianteService[0]?.link28

 
      this.img28 = this.anunciantes[0].img28
      this.link28 = this.anunciantes[0].link28
      this.link29 = this.anuncianteService[0]?.link29

 
      this.img30 = this.anunciantes[0].img30
      this.link30 = this.anunciantes[0].link30
      
    });

    console.log('y estio', this.anuncianteService.unAnunciante);
  }


  selectChange(){


   var  x = Number(this.seleccion)


    switch (x) {

      case 1:
        this.imagenVista =  this.anuncianteService.unAnunciante.img1
        this.link =  this.anuncianteService.unAnunciante.link1
        this.contador = Number(this.anuncianteService.unAnunciante.contador1)
        break;
      case 2:
        this.imagenVista =  this.anuncianteService.unAnunciante.img2
        this.link =  this.anuncianteService.unAnunciante.link2
        this.contador = Number(this.anuncianteService.unAnunciante.contador2)
        break;
      case 3:
        this.contador = Number(this.anuncianteService.unAnunciante.contador3)
        this.imagenVista =  this.anuncianteService.unAnunciante.img3
        this.link =  this.anuncianteService.unAnunciante.link3
        break;
      case 4:
        this.contador = Number(this.anuncianteService.unAnunciante.contador4)
        this.imagenVista =  this.anuncianteService.unAnunciante.img4
        this.link =  this.anuncianteService.unAnunciante.link4
        break;
      case 5:
        this.contador = Number(this.anuncianteService.unAnunciante.contador5)
        this.imagenVista =  this.anuncianteService.unAnunciante.img5
        this.link =  this.anuncianteService.unAnunciante.link5
        break;
      case 6:
        this.contador = Number(this.anuncianteService.unAnunciante.contador6)
        this.imagenVista =  this.anuncianteService.unAnunciante.img6
        this.link =  this.anuncianteService.unAnunciante.link6
        break;
      case 7:
        this.contador = Number(this.anuncianteService.unAnunciante.contador7)
        this.imagenVista =  this.anuncianteService.unAnunciante.img7
        this.link =  this.anuncianteService.unAnunciante.link7
        break;
      case 8:
        this.contador = Number(this.anuncianteService.unAnunciante.contador8)
        this.imagenVista =  this.anuncianteService.unAnunciante.img8
        this.link =  this.anuncianteService.unAnunciante.link8
        break;
      case 9:
        this.contador = Number(this.anuncianteService.unAnunciante.contador9)
        this.imagenVista =  this.anuncianteService.unAnunciante.img9
        this.link =  this.anuncianteService.unAnunciante.link9
        break;
      case 10:
        this.contador = Number(this.anuncianteService.unAnunciante.contador10)
        this.imagenVista =  this.anuncianteService.unAnunciante.img10
        this.link =  this.anuncianteService.unAnunciante.link10
        break;

        case 11:
          this.contador = Number(this.anuncianteService.unAnunciante.contador11)
          this.imagenVista =  this.anuncianteService.unAnunciante.img11
        this.link =  this.anuncianteService.unAnunciante.link11
          break;
        case 12:
          this.contador = Number(this.anuncianteService.unAnunciante.contador12)
          this.imagenVista =  this.anuncianteService.unAnunciante.img12
        this.link =  this.anuncianteService.unAnunciante.link12
          break;
        case 13:
          this.contador = Number(this.anuncianteService.unAnunciante.contador13)
          this.imagenVista =  this.anuncianteService.unAnunciante.img13
        this.link =  this.anuncianteService.unAnunciante.link13
          break;
        case 14:
          this.contador = Number(this.anuncianteService.unAnunciante.contador14)
          this.imagenVista =  this.anuncianteService.unAnunciante.img14
        this.link =  this.anuncianteService.unAnunciante.link14
          break;
        case 15:
          this.contador = Number(this.anuncianteService.unAnunciante.contador15)
          this.imagenVista =  this.anuncianteService.unAnunciante.img15
        this.link =  this.anuncianteService.unAnunciante.link15
          break;
        case 16:
          this.contador = Number(this.anuncianteService.unAnunciante.contador16)
          this.imagenVista =  this.anuncianteService.unAnunciante.img16
        this.link =  this.anuncianteService.unAnunciante.link16
          break;
        case 17:
          this.contador = Number(this.anuncianteService.unAnunciante.contador17)
          this.imagenVista =  this.anuncianteService.unAnunciante.img17
        this.link =  this.anuncianteService.unAnunciante.link17

          break;
        case 18:
          this.contador = Number(this.anuncianteService.unAnunciante.contador18)
          this.imagenVista =  this.anuncianteService.unAnunciante.img18
        this.link =  this.anuncianteService.unAnunciante.link18
          break;
        case 19:
          this.contador = Number(this.anuncianteService.unAnunciante.contador19)
          this.imagenVista =  this.anuncianteService.unAnunciante.img19
        this.link =  this.anuncianteService.unAnunciante.link19
          break;
        case 20:
          this.contador = Number(this.anuncianteService.unAnunciante.contador20)
          this.imagenVista =  this.anuncianteService.unAnunciante.img20
          this.link =  this.anuncianteService.unAnunciante.link20
          break;

          case 21:
            this.contador = Number(this.anuncianteService.unAnunciante.contador21)
            this.imagenVista =  this.anuncianteService.unAnunciante.img21
            this.link =  this.anuncianteService.unAnunciante.link21
            break;
            case 22:
              this.contador = Number(this.anuncianteService.unAnunciante.contador22)
              this.imagenVista =  this.anuncianteService.unAnunciante.img22
              this.link =  this.anuncianteService.unAnunciante.link22
              break;
              case 23:
                this.contador = Number(this.anuncianteService.unAnunciante.contador23)
                this.imagenVista =  this.anuncianteService.unAnunciante.img23
                this.link =  this.anuncianteService.unAnunciante.link23
                break;
                case 24:
                  this.contador = Number(this.anuncianteService.unAnunciante.contador24)
                  this.imagenVista =  this.anuncianteService.unAnunciante.img24
                  this.link =  this.anuncianteService.unAnunciante.link24
                  break;
                  case 25:
                    this.contador = Number(this.anuncianteService.unAnunciante.contador25)
                    this.imagenVista =  this.anuncianteService.unAnunciante.img25
                    this.link =  this.anuncianteService.unAnunciante.link25
                    break;
                    case 26:
                      this.contador = Number(this.anuncianteService.unAnunciante.contador26)
                      this.imagenVista =  this.anuncianteService.unAnunciante.img26
                      this.link =  this.anuncianteService.unAnunciante.link26
                      break;
                      case 27:
                        this.contador = Number(this.anuncianteService.unAnunciante.contador27)
                        this.imagenVista =  this.anuncianteService.unAnunciante.img27
                        this.link =  this.anuncianteService.unAnunciante.link27
                        break;
                        case 28:
                          this.contador = Number(this.anuncianteService.unAnunciante.contador28)
                          this.imagenVista =  this.anuncianteService.unAnunciante.img28
                          this.link =  this.anuncianteService.unAnunciante.link28
                          break;
                          case 29:
                            this.contador = Number(this.anuncianteService.unAnunciante.contador29)
                            this.imagenVista =  this.anuncianteService.unAnunciante.img29
                            this.link =  this.anuncianteService.unAnunciante.link29
                            break;
                            case 30:
                              this.contador = Number(this.anuncianteService.unAnunciante.contador30)
                              this.imagenVista =  this.anuncianteService.unAnunciante.img30
                              this.link =  this.anuncianteService.unAnunciante.link30
                              break;

          default:
          console.log('no agarra')
            break;
    }



  }

  guardar(x) {

    this.anuncianteService.unAnunciante.link1 = this.link1;
    this.anuncianteService.unAnunciante.img1 = this.img1;

    this.anuncianteService.unAnunciante.link2 = this.link2;
    this.anuncianteService.unAnunciante.img2 = this.img2;

    this.anuncianteService.unAnunciante.link3 = this.link3;
    this.anuncianteService.unAnunciante.img3 = this.img3;

    this.anuncianteService.unAnunciante.link4 = this.link4;
    this.anuncianteService.unAnunciante.img4 = this.img4;

    this.anuncianteService.unAnunciante.link5 = this.link5;
    this.anuncianteService.unAnunciante.img5 = this.img5;

    this.anuncianteService.unAnunciante.link6 = this.link6;
    this.anuncianteService.unAnunciante.img6 = this.img6;

    this.anuncianteService.unAnunciante.link7 = this.link7;
    this.anuncianteService.unAnunciante.img7 = this.img7;

    this.anuncianteService.unAnunciante.link8 = this.link8;
    this.anuncianteService.unAnunciante.img8 = this.img8;

    this.anuncianteService.unAnunciante.link9 = this.link9;
    this.anuncianteService.unAnunciante.img9 = this.img9;

    this.anuncianteService.unAnunciante.link10 = this.link10;
    this.anuncianteService.unAnunciante.img10 = this.img10;

    this.anuncianteService.unAnunciante.link11 = this.link11;
    this.anuncianteService.unAnunciante.img11 = this.img11;

    this.anuncianteService.unAnunciante.link12 = this.link12;
    this.anuncianteService.unAnunciante.img12 = this.img12;

    this.anuncianteService.unAnunciante.link13 = this.link13;
    this.anuncianteService.unAnunciante.img13 = this.img13;

    this.anuncianteService.unAnunciante.link14 = this.link14;
    this.anuncianteService.unAnunciante.img14 = this.img14;

    this.anuncianteService.unAnunciante.link15 = this.link15;
    this.anuncianteService.unAnunciante.img15 = this.img15;

    this.anuncianteService.unAnunciante.link16 = this.link16;
    this.anuncianteService.unAnunciante.img16 = this.img16;

    this.anuncianteService.unAnunciante.link17 = this.link17;
    this.anuncianteService.unAnunciante.img17 = this.img17;

    this.anuncianteService.unAnunciante.link18 = this.link18;
    this.anuncianteService.unAnunciante.img18 = this.img18;

    this.anuncianteService.unAnunciante.link19 = this.link19;
    this.anuncianteService.unAnunciante.img19 = this.img19;

    this.anuncianteService.unAnunciante.link20 = this.link20;
    this.anuncianteService.unAnunciante.img20 = this.img20;

    
    this.anuncianteService.unAnunciante.link21 = this.link21;
    this.anuncianteService.unAnunciante.img21 = this.img21;

        
    this.anuncianteService.unAnunciante.link22 = this.link22;
    this.anuncianteService.unAnunciante.img22 = this.img22;

            
    this.anuncianteService.unAnunciante.link23 = this.link23;
    this.anuncianteService.unAnunciante.img23 = this.img23;

    this.anuncianteService.unAnunciante.link24 = this.link24;
    this.anuncianteService.unAnunciante.img24 = this.img24;

    this.anuncianteService.unAnunciante.link25 = this.link25;
    this.anuncianteService.unAnunciante.img25 = this.img25;

    
    this.anuncianteService.unAnunciante.link26 = this.link26;
    this.anuncianteService.unAnunciante.img26 = this.img26;

    this.anuncianteService.unAnunciante.link27 = this.link27;
    this.anuncianteService.unAnunciante.img27 = this.img27;

    this.anuncianteService.unAnunciante.link28 = this.link28;
    this.anuncianteService.unAnunciante.img28 = this.img28;

    this.anuncianteService.unAnunciante.link29 = this.link29;
    this.anuncianteService.unAnunciante.img29 = this.img29;

    this.anuncianteService.unAnunciante.link30 = this.link30;
    this.anuncianteService.unAnunciante.img30 = this.img30;

    





   var  variable = Number(this.seleccion)

    // this.anuncianteService.crearAnuncio(this.anuncianteService.unAnunciante = new anunciante).subscribe(res=>{
    //   console.log(res)
    // }
    //   )

    switch (variable) {

      case 1:

        this.anuncianteService.unAnunciante.link1 = String(this.link);
        this.anuncianteService.unAnunciante.contador1 = 0

        break;
      case 2:
        this.anuncianteService.unAnunciante.contador2 = 0
        this.anuncianteService.unAnunciante.link2 = String(this.link);
        break;
      case 3:
        this.anuncianteService.unAnunciante.contador3 = 0
        this.anuncianteService.unAnunciante.link3 = String(this.link);
        break;

      case 4:
        this.anuncianteService.unAnunciante.contador4 = 0
        this.anuncianteService.unAnunciante.link4 = String(this.link);
        break;
      case 5:
        this.anuncianteService.unAnunciante.contador5 = 0
        this.anuncianteService.unAnunciante.link5 = String(this.link);
        break;
      case 6:
        this.anuncianteService.unAnunciante.contador6 = 0
        this.anuncianteService.unAnunciante.link6 = String(this.link);
        break;
      case 7:
        this.anuncianteService.unAnunciante.contador7 = 0
        this.anuncianteService.unAnunciante.link7 = String(this.link);
        break;
      case 8:
        this.anuncianteService.unAnunciante.contador8 = 0
        this.anuncianteService.unAnunciante.link8 = String(this.link);
        break;
      case 9:
        this.anuncianteService.unAnunciante.contador9 = 0
        this.anuncianteService.unAnunciante.link9 = String(this.link);
        break;
      case 10:
        this.anuncianteService.unAnunciante.contador10 = 0
        this.anuncianteService.unAnunciante.link10 = String(this.link);
        break;

        case 11:
          this.anuncianteService.unAnunciante.contador11 = 0
          this.anuncianteService.unAnunciante.link11 = String(this.link);
          break;
        case 12:
          this.anuncianteService.unAnunciante.contador12 = 0
          this.anuncianteService.unAnunciante.link12 = String(this.link);
          break;
        case 13:
          this.anuncianteService.unAnunciante.contador13 = 0
          this.anuncianteService.unAnunciante.link13 = String(this.link);
          break;
        case 14:
          this.anuncianteService.unAnunciante.contador14 = 0
          this.anuncianteService.unAnunciante.link14 = String(this.link);
          break;
        case 15:
          this.anuncianteService.unAnunciante.contador15 = 0
            this.anuncianteService.unAnunciante.link15 = String(this.link);
          break;
        case 16:
          this.anuncianteService.unAnunciante.contador16 = 0
          this.anuncianteService.unAnunciante.link16 = String(this.link);
          break;
        case 17:
          this.anuncianteService.unAnunciante.contador17 = 0
            this.anuncianteService.unAnunciante.link17 = String(this.link);
          break;
        case 18:
          this.anuncianteService.unAnunciante.contador18 = 0
           this.anuncianteService.unAnunciante.link18 = String(this.link);
          break;
        case 19:
          this.anuncianteService.unAnunciante.contador19 = 0
          this.anuncianteService.unAnunciante.link19 = String(this.link);
          break;
        case 20:
          this.anuncianteService.unAnunciante.contador20 = 0
          this.anuncianteService.unAnunciante.link20 = String(this.link);
          break;
          case 21:
            this.anuncianteService.unAnunciante.contador21 = 0
            this.anuncianteService.unAnunciante.link21 = String(this.link);
            break;
            case 22:
              this.anuncianteService.unAnunciante.contador22 = 0
              this.anuncianteService.unAnunciante.link22 = String(this.link);
              break;
              case 23:
                this.anuncianteService.unAnunciante.contador23 = 0
                this.anuncianteService.unAnunciante.link23 = String(this.link);
                break;
                case 24:
                  this.anuncianteService.unAnunciante.contador24 = 0
                  this.anuncianteService.unAnunciante.link24 = String(this.link);
                  break;
                  case 25:
                    this.anuncianteService.unAnunciante.contador25 = 0
                    this.anuncianteService.unAnunciante.link25 = String(this.link);
                    break;
                    case 26:
                      this.anuncianteService.unAnunciante.contador26 = 0
                      this.anuncianteService.unAnunciante.link2 = String(this.link);
                      break;
                      case 27:
                        this.anuncianteService.unAnunciante.contador27 = 0
                        this.anuncianteService.unAnunciante.link27 = String(this.link);
                        break;
                        case 28:
                          this.anuncianteService.unAnunciante.contador28 = 0
                          this.anuncianteService.unAnunciante.link28 = String(this.link);
                          break;
                          case 29:
                            this.anuncianteService.unAnunciante.contador29 = 0
                            this.anuncianteService.unAnunciante.link29 = String(this.link);
                            break;
                            case 30:
                              this.anuncianteService.unAnunciante.contador30 = 0
                              this.anuncianteService.unAnunciante.link30 = String(this.link);
                              break;


          default:
          console.log('no agarra')
            break;
    }



    this.anuncianteService.modify('63e413bfa70e22831eb6cb33',
        this.anuncianteService.unAnunciante
      )
      .subscribe((res) => {
        alert('Modificado!');
        location.reload()
      });
  }


  borrar(){  
    this.anuncianteService.unAnunciante.contador2 = null
    this.anuncianteService.unAnunciante.link2 = null
    this.anuncianteService.unAnunciante.img2 = null

    this.anuncianteService.modify('63e413bfa70e22831eb6cb33',
        this.anuncianteService.unAnunciante 
      )
      .subscribe((res) => {
        alert('Modificado!');
        location.reload()
      });
    }
  
  onUpload() {

    let formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append(
        'archivos',
        this.uploadedFiles[i],
        this.uploadedFiles[i].name
      );
    }

    this.crudService.uploadFile(formData).subscribe((res) => {
      var link = Object.values(res);
      this.imagenVista = String(link)
      var x  = Number(this.seleccion)

      switch (x) {

        case 1:


          this.img1 = String(link);
          break;
        case 2:

          this.img2 = String(link);
          break;
        case 3:

          this.img3 = String(link);
          break;
        case 4:

          this.img4 = String(link);
          break;
        case 5:

          this.img5 = String(link);
          break;
        case 6:

          this.img6 = String(link);
          break;
        case 7:

          this.img7 = String(link);
          break;
        case 8:

          this.img8 = String(link);
          break;
        case 9:

          this.img9 = String(link);
          break;
        case 10:

          this.img10 = String(link);
          break;

          case 11:

            this.img11 = String(link);
            break;
          case 12:

            this.img12 = String(link);
            break;
          case 13:

            this.img13 = String(link);
            break;
          case 14:
            this.img14 = String(link);
            break;
          case 15:
              this.img15 = String(link);
            break;
          case 16:
            this.img16 = String(link);
            break;
          case 17:
              this.img17 = String(link);
            break;
          case 18:
             this.img18 = String(link);
            break;
          case 19:
            this.img19 = String(link);
            break;
          case 20:
            this.img20 = String(link);
            break;
            case 21:
              this.img21 = String(link);
              break;

              case 22:
                this.img22 = String(link);
                break;

                case 23:
                  this.img23 = String(link);
                  break;

                  case 24:
                    this.img24 = String(link);
                    break;

                    case 25:
                      this.img25 = String(link);
                      break;

                      case 26:
                        this.img26 = String(link);
                        break;

                        case 27:
                          this.img27 = String(link);
                          break;

                          case 28:
                            this.img28 = String(link);
                            break;

                            case 29:
                              this.img29 = String(link);
                              break;

                              case 30:
                                this.img30 = String(link);
                                break;
                    

            default:
            console.log('no agarra')
              break;
      }

      this.loadingSubir = true;
      this.imagenSubida = true;
      this.SubirEstado = true;
    });
  }

  onFileChange(e) {
    this.SubirEstado = false;
    this.imagenSubida = false;
    this.uploadedFiles = e.target.files;
  }

  onUpload2(x) {
    let formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append(
        'archivos',
        this.uploadedFiles[i],
        this.uploadedFiles[i].name
      );
    }

    this.crudService.uploadFile(formData).subscribe((res) => {
      var link = Object.values(res);
      this.anuncianteService.unAnunciante.link1 = String(link);

      this.loadingSubir2 = true;
      this.imagenSubida2 = true;
      this.SubirEstado2 = true;
    });
  }

  onFileChange2(e) {
    this.SubirEstado2 = false;
    this.imagenSubida2 = false;
    this.uploadedFiles = e.target.files;
  }

  back() {
    this.location.back();
  }
}
