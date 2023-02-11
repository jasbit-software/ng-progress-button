import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SpinnerConfig } from './spinner-config';

@Component({
  selector: 'ng-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnChanges {

  @Input("config") config: SpinnerConfig = new SpinnerConfig();

  spinnerDivStyling: any = {};
  ringStyling: any = {};

  constructor() { }

  ngOnInit(): void {
    console.log(this.config);
    this.setStyling();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setStyling();
  }


  setStyling() {
    if (!this.config.size) {
      this.config.size = 50;
    }
    var margin = 5;
    if (this.config.size < 40) {
      margin = 3;
    }
    this.spinnerDivStyling = {
      'border-color': this.getBorderColor(),
      'height': `${this.config.size}px`,
      'width': `${this.config.size}px`,
      'border-width': this.config.size < 40 ? (this.config.size < 20 ? '2px' : '3px') : '5px',
      'margin': `${margin}px`
    };
    this.ringStyling = {
      'width': `${this.config.size + margin * 2}px`,
      'height': `${this.config.size + margin * 2}px`
    };
  }

  getBorderColor(): string {
    if (this.config.color) {
      return `${this.config.color} transparent transparent transparent`;
    }
    return "black transparent transparent transparent";
  }


}
