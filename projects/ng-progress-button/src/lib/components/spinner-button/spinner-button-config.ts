import { InjectionToken } from "@angular/core";

export class SpinnerButtonConfig {
    text?: string;
    type?: string = "raised"; //raised,stroked,flat
    backgroundColor?: string = "white";
    textColor?: string = "black";
    size?: string = "normal";
    loading?: boolean = false;
    customClass?: string;
    disabled?: boolean = false;
    spinnerType?: string = "spinner";
}

export const PROGRESS_BUTTON_CONFIG = new InjectionToken<SpinnerButtonConfig>('PROGRESS_BUTTON_CONFIG');