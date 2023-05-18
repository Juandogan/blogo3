import { Component, OnInit } from '@angular/core';
import { CarouselServiceService } from '../../services/carousel-service.service';
import { SwiperOptions } from 'swiper';
import { carouselDataItems } from '../../modelos/dataCarousel';



@Component({
  selector: 'app-carousel-revista',
  templateUrl: './carousel-revista.component.html',
  styleUrls: ['./carousel-revista.component.css']
})
export class CarouselRevistaComponent implements OnInit {
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
     breakpoints: {
      1024: {
        slidesPerView: 4
      },
      700: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
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

  constructor(public dataCarouselRevista:CarouselServiceService) { }

  ngOnInit(): void {
    this.dataCarouselRevista.pedirUsuarios().subscribe(res=>{
      this.slideData = res.slice(3,res.lenght) 
      console.log('aasas', this.slideData)
      this.carga=true
     })
     
  }

}
