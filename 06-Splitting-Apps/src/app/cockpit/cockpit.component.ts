import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  onServerClicked() {
    // this.serverCreated.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent,
    // });
  }

  onBlueprintClicked() {
    // if (this.newServerName !== '' && this.newServerContent !== '') {
    //   this.serverElements.push(
    //     new Node('BluePrint', this.newServerName, this.newServerContent)
    //   );
    // }
  }

  onResetClicked() {
    //this.serverElements = [];
  }

  removeNode() {
    //this.serverElements.pop();
  }
}
