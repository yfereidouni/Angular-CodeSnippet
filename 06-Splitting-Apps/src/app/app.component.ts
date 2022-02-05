import { Component } from '@angular/core';
import { Node } from './shared/node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newServerName = '';
  newServerContent = '';
  serverElements: Node[] = [];

  title = '06-Splitting-Apps';

  onServerClicked() {
    if (this.newServerName !== '' && this.newServerContent !== '') {
      this.serverElements.push(
        new Node('Server', this.newServerName, this.newServerContent)
      );
    }
  }

  onBlueprintClicked() {
    if (this.newServerName !== '' && this.newServerContent !== '') {
      this.serverElements.push(
        new Node('BluePrint', this.newServerName, this.newServerContent)
      );
    }
  }

  onResetClicked() {
    this.serverElements = [];
  }

  removeNode() {
    this.serverElements.pop();
  }
}
