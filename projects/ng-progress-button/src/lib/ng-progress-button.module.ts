import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerButtonComponent } from './components/spinner-button/spinner-button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

export { SpinnerComponent } from './components/spinner/spinner.component';
export { SpinnerButtonComponent } from './components/spinner-button/spinner-button.component';
export { SpinnerButtonConfig } from './components/spinner-button/spinner-button-config';

@NgModule({
  declarations: [
    SpinnerButtonComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    SpinnerButtonComponent,
  ]
})
export class NgProgressButtonModule { }
