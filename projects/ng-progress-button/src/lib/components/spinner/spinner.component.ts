import { ChangeDetectorRef, Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SpinnerConfig } from './spinner-config';

@Component({
  selector: 'ng-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnChanges {

  @HostBinding('style.--ellipsis2-x-translate')
  private ellipsis2TranslateX: string = '18px';
  @HostBinding('style.--ripple-dynamic-size')
  private dynamicRippleSize: string = '36px';
  @HostBinding('style.--ripple-dynamic-size-double')
  private dynamicRippleSizeDouble: string = '72px';

  @Input("config") config: SpinnerConfig = new SpinnerConfig();

  //spinner
  spinnerDivStyling: any = {};
  ringStyling: any = {};

  //dots
  ellipsisDiv1And2Styling: any = {};
  ellipsisDiv3Styling: any = {};
  ellipsisDiv4Styling: any = {};
  ellipsisStyling: any = {};

  //ripple
  rippleDivStyling: any = {};
  rippleStyling: any = {};

  constructor() { }

  ngOnInit(): void {
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
      'border-width': `${this.config.size / 10}px`,
      'margin': `${margin}px`
    };
    this.ringStyling = {
      'width': `${this.config.size + margin * 2}px`,
      'height': `${this.config.size + margin * 2}px`
    };
    var defaultEllipsisDivStyling = {
      'background-color': this.config.color,
      'width': `${this.config.size / 6.1}px`,
      'height': `${this.config.size / 6.1}px`,
      'top': `${this.config.size / 2.424242424242}px`,
    }
    this.ellipsisDiv1And2Styling = {
      ...defaultEllipsisDivStyling,
      'left': `${this.config.size / 10}px`
    };
    this.ellipsisDiv3Styling = {
      ...defaultEllipsisDivStyling,
      'left': `${(this.config.size / 10) * 4}px`
    };
    this.ellipsisDiv4Styling = {
      ...defaultEllipsisDivStyling,
      'left': `${(this.config.size / 10) * 7}px`
    };
    this.ellipsisStyling = {
      'width': `${this.config.size}px`,
      'height': `${this.config.size}px`
    };
    this.ellipsis2TranslateX = `${(this.config.size / 10) * 3}px`;
    this.rippleDivStyling = {
      'border': `${this.config.size / 20}px solid ${this.config.color}`
    };
    this.rippleStyling = {
      'width': `${this.config.size}px`,
      'height': `${this.config.size}px`
    }
    this.dynamicRippleSize = `${this.config.size / 2.22222222}px`;
    this.dynamicRippleSizeDouble = `${this.config.size / 1.11111111}px`;
  }

  getBorderColor(): string {
    if (this.config.color) {
      return `${this.config.color} transparent transparent transparent`;
    }
    return "black transparent transparent transparent";
  }


}
