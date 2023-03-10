import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { SpinnerButtonConfig } from './spinner-button-config';

@Component({
  selector: 'ng-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent implements OnInit, OnChanges {

  @ViewChild("spinnerButtonContentWrapper") spinnerButtonContentWrapper: HTMLElement;
  @ViewChild("mainSpinnerButton") mainSpinnerButton: ElementRef;

  @Input("config") config: SpinnerButtonConfig = new SpinnerButtonConfig();
  @Input("disabled") disabled: boolean = false;

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  spinnerSize: number;

  constructor() { }

  ngOnInit(): void {
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
}
