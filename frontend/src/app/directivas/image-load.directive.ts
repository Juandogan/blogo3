import { Directive, ElementRef, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: 'img[appImageLoad]'
})
export class ImageLoadDirective {
  @HostBinding('class.loading') loading = false;
  @Output() loadingChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {
    this.el.nativeElement.addEventListener('load', this.onImageLoad.bind(this));
    this.el.nativeElement.addEventListener('error', this.onImageError.bind(this));
  }

  private onImageLoad() {
    this.loading = false;
    this.loadingChange.emit(this.loading);
  }

  private onImageError() {
    this.loading = false;
    this.loadingChange.emit(this.loading);
    console.log('Error al cargar la imagen');
  }
}
