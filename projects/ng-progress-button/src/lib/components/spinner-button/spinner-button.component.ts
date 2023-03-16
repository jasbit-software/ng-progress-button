import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Inject, InjectionToken, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { PROGRESS_BUTTON_CONFIG, SpinnerButtonConfig } from './spinner-button-config';

@Component({
  selector: 'ng-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent implements OnInit, OnChanges {

  @ViewChild("spinnerButtonContentWrapper") spinnerButtonContentWrapper: HTMLElement;
  @ViewChild("mainSpinnerButton") mainSpinnerButton: ElementRef;

  @Input("config") config: SpinnerButtonConfig;
  
  @Input("disabled") set SetDisabled(disabled: boolean) {
    this.config.disabled = disabled;
  }

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  spinnerSize: number;

  constructor(@Inject(PROGRESS_BUTTON_CONFIG) private rootConfig: SpinnerButtonConfig) {
  }

  ngOnInit(): void {
    this.mergeConfigs(this.config, this.rootConfig);
    if (!this.config.type) {
      this.config.type = "raised";
    }
    this.config.size = this.getConfigSize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled'] && !changes['disabled'].firstChange) {
      this.config.disabled = changes['disabled'].currentValue;
    }
  }

  @HostListener('click', ['$event'])
  public handleClick(event: MouseEvent): void {
    if (!this.config.disabled && !this.config.loading) {
      this.onClick.emit(event);
    }
  }

  getConfigSize(): string {
    if (!this.config.size) {
      return "normal";
    } else {
      if (!["small", "normal", "large"].includes(this.config.size)) {
        return "normal";
      }
    }
    return this.config.size;
  }

  getSpinnerSize(): number {
    switch (this.config.spinnerType) {
      case "spinner":
      default:
        switch (this.config.size) {
          case "small":
            return 10;
          case "normal":
          default:
            return 20;
          case "large":
            return 36;
        }
      case "ripple":
        switch (this.config.size) {
          case "small":
            return 18;
          case "normal":
          default:
            return 36;
          case "large":
            return 60;
        }
      case "dots":
        switch (this.config.size) {
          case "small":
            return 24;
          case "normal":
          default:
            return 48;
          case "large":
            return 80;
        }
    }

  }

  createButtonClasses(): string {
    var c = this.config.size + "-button";
    if (this.config.customClass) {
      c += ` ${this.config.customClass}`;
    }
    return c;
  }

  private mergeConfigs(currentConfig: SpinnerButtonConfig, rootConfig: SpinnerButtonConfig): SpinnerButtonConfig {
    for (const key in rootConfig) {
      if (currentConfig[key] === undefined) {
        currentConfig[key] = rootConfig[key];
      }
    }
    return currentConfig;
  }  
}
