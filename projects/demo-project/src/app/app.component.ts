import { Component } from '@angular/core';
import { SpinnerButtonConfig } from 'projects/ng-progress-button/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-project';

  pbConfig: SpinnerButtonConfig = {
    text: "Open dossier",
    backgroundColor: "#5C739D",
    textColor: "white",
    size: "normal",
    customClass: "custom-button",
    spinnerType: "spinner"
  };

  onButtonClick(event: any) {
    this.pbConfig.loading = true;
    setTimeout(() => {
      this.pbConfig.loading = false;
    }, 3000);
  }
}
