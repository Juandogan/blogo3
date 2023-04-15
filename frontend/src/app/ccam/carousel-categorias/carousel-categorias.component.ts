import { Component, OnInit } from '@angular/core';
import { CarouselServiceService } from 'src/app/services/carousel-service.service';
import { CrudAnuncioService } from 'src/app/services/crud-anuncio.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-carousel-categorias',
  templateUrl: './carousel-categorias.component.html',
  styleUrls: ['./carousel-categorias.component.css']
})
export class CarouselCategoriasComponent implements OnInit {
  title = 'ng-swiper-demo';
  slideData:any
  carga= false
  // _id:'',
  // id: 0,
  // fecha: '',
  // titulo:'Mayo 2022 - Nº 139',
  // subtitulo:'http://www.culturademontania.org.ar/Noticias/06_2022/revista_digital_ccam_ini_062022.html',
  // link:'',
  // image:'../../../assets/tapa139.jpeg',
  // order:'',
  // marginLeft :0

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 1
      },
      400: {
        slidesPerView: 1
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true

  };

  constructor(public dataCarouselAnuncios:CrudAnuncioService) { }

  ngOnInit(): void {
    this.dataCarouselAnuncios.pedirUsuarios().subscribe(res=>{
      this.slideData = res[0]
      console.log('anuncios', this.slideData)
      this.carga=true
     })
     
  }

}
