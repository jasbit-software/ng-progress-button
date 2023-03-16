import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PROGRESS_BUTTON_CONFIG, SpinnerButtonConfig } from './components/spinner-button/spinner-button-config';
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
export class NgProgressButtonModule {
  static forRoot(config: SpinnerButtonConfig): ModuleWithProviders<NgProgressButtonModule> {
    return {
      ngModule: NgProgressButtonModule,
      providers: [
        { provide: PROGRESS_BUTTON_CONFIG, useValue: config}
      ]
    }
  }
 }
