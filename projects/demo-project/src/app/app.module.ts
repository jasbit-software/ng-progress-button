import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgProgressButtonModule } from 'projects/ng-progress-button/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgProgressButtonModule.forRoot({
      backgroundColor: 'red',
      textColor: 'blue'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
