import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  //bluePrintCreated =

  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    if (this.newServerName !== '' && this.newServerContent !== '') {
      this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent,
      });
    }
  }

  onAddBluePrint() {
    if (this.newServerName !== '' && this.newServerContent !== '') {
      this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent,
      });
    }
  }

  onResetClicked() {
    //this.serverElements = [];
  }

  removeNode() {
    //this.serverElements.pop();
  }
}
