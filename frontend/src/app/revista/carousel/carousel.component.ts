import {Component, OnInit,ChangeDetectionStrategy,Input,} from '@angular/core';
import { Revista } from '../../modelos/revista';
import { CarouselModel } from '../../modelos/userCarousel';
import { CarouselServiceService } from '../../services/carousel-service.service';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit {
  @Input('altura') height: any;
  @Input() isFullScreen = false;
  @Input('items2') items: any
  @Input('data') data: any;

  /**
   * Final Properties
   */
  public finalHeight: string | number = 0;
  public currentPosition = 0;


  load=false
  revista: Revista[] = [];
  carousel :CarouselModel;



  constructor(private crudService: CrudService, public carouselService:CarouselServiceService) {

   this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit() {
    this.items = this.items.reverse()

   this.items.map((i, index: any) => {
          i.marginLeft = 0
           i.id = index
          this.load = true



     })


    //   this.carouselService.pedirUsuarios().subscribe(res=>{
    //     this.carousel = res as CarouselModel
    //     this.items = this.carousel
    //     this.items.map((i, index: any) => {
    //        i.marginLeft = 0
    //        i.id = index
    //        this.load = true
    //        this.setCurrentPosition(0)
    //  })
    // });





  }

  cronometro() {

    setTimeout(() => this.setNext(), 2000);
    console.log("sdsd")
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
     this.items.find(i => i.id === 0).marginLeft = -50 * position;
    this.items[0].marginLeft = -20 * position;



  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    // if (nextPosition <= this.items.length - 16) {
    if (nextPosition <= 12) {
      finalPercentage = -20 * nextPosition;
    } else {
      nextPosition = 0;
    }
    this.items.find((i) => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -12 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -12 * backPosition;
    }
    this.items.find((i) => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }
}
