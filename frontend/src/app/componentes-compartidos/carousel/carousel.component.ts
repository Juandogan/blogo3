import { Component, OnInit, Input } from '@angular/core';
import { LoadingObservableService } from 'src/app/services/loading-observable.service';
import { Articulos } from '../../modelos/articulos';
import { CarouselModel } from '../../modelos/userCarousel'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  /**
   * Custom Properties
   */
  @Input() height = 400;
  @Input() isFullScreen = false;
  @Input() items: CarouselModel[] = [];
  @Input('data')  data :  any
  estado = false
  /**
   * Final Properties
   */
  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor(private loading$:LoadingObservableService) {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
   
   }

  ngOnInit() {
    this.items?.map( ( i, index ) => {
      i.id = index;
      i.marginLeft = 0;


    });
    this.estado = true
    this.cronometro()
    



  }


  pasar(){

    this.loading$.loading$.emit(true)



  }


  cronometro(){
    setInterval(() => this.setNext(), 7000);
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    // this.items.find(i => i.id === 0).marginLeft = -50 * position;
    this.items[0].marginLeft = -50 * position;
  }



  setNext() {

    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    //this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.items[0].marginLeft = finalPercentage;

    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition  - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    // this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.items[0].marginLeft = finalPercentage;
    this.currentPosition = backPosition;

  }

  cut(value:any){
    var corte = value?.slice(2)

   return corte
 };

}
