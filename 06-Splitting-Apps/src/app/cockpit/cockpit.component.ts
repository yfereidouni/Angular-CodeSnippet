import { outputAst } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverType:string;
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    serverType:string;
    serverName: string;
    serverContent: string;
  }>();

  @Output() resetServerElements = new EventEmitter<{}>();
  

  newServerType = '';
  newServerName = '';
  newServerContent = '';

  nodes: Element[]=[];

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    if (this.newServerName !== '' && this.newServerContent !== '') {
      this.serverCreated.emit({
        serverType: 'Server',
        serverName: this.newServerName,
        serverContent: this.newServerContent,
      });
    }
  }

  onAddBluePrint() {
    if (this.newServerName !== '' && this.newServerContent !== '') {
      this.serverCreated.emit({
        serverType: 'BluePrint',
        serverName: this.newServerName,
        serverContent: this.newServerContent,
      });
    }
  }

  onResetClicked() {
    this.resetServerElements.emit({
      serverType: 'Server',
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  
}
