import { AfterViewInit, Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  public imageLinks: Array<String>;

  constructor() {
    this.imageLinks = [
      '26acc584174fb0981864c900047d33db',
      'f70985aa9945b63756a6eeef2a66b19d',
      '47943008ca49feabdca3c9391c3b8f8a',
      'adf9db21a43c9fd394dc89a0d647bec3',
      'a9d3e037a470bfe3c367dc803480a848',
      '66408741d426b4271f9f59df31a3bab4',
    ];
  }

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
