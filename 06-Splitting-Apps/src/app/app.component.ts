import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newServerName = '';
  newServerContent = '';
  showCard = false;
  serverElements = [];
  bluprints = [];

  title = '06-Splitting-Apps';

  onServerClicked() {
    // this.serverElements.push({
    //   type:'server',
    //   name: this.newServerName,
    //   content: this.newServerContent;
    // })
  }
  onBlueprintClicked() {
    // this.serverElements.push({
    //   type:'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent;
    // })
  }
}
