import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { AppComponent } from './app.component';
import { CarouselModule } from './carousel/carousel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MdbCheckboxModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
