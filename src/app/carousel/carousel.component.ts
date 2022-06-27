import { AfterViewInit, Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    new Splide('.splide', {
      type: 'loop',
      perPage: 1,
      mediaQuery: 'min',
      breakpoints: {
        992: {
          perPage: 5,
        },
        768: {
          perPage: 3,
        },
        480: {
          perPage: 1,
        },
      },
    }).mount();
  }
}
