import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SpinnerButtonConfig } from './spinner-button-config';

@Component({
  selector: 'ng-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent implements OnInit {

  @ViewChild("spinnerButtonContentWrapper") spinnerButtonContentWrapper: HTMLElement;
  @ViewChild("mainSpinnerButton") mainSpinnerButton: ElementRef;

  @Input("config") config: SpinnerButtonConfig = new SpinnerButtonConfig();

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  spinnerSize: number;

  constructor() { }

  ngOnInit(): void {
    this.config.size = this.getConfigSize();

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
    switch (this.config.size) {
      case "small":
        return 12;
      case "normal":
      default:
        return 24;
      case "large":
        return 40;
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
