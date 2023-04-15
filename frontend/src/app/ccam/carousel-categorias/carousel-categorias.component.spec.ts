import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCategoriasComponent } from './carousel-categorias.component';

describe('CarouselCategoriasComponent', () => {
  let component: CarouselCategoriasComponent;
  let fixture: ComponentFixture<CarouselCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
