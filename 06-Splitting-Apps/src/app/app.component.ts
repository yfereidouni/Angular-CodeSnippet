import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Element } from './shared/element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: Element[] = [
    {
      type: 'Server',
      name: 'DevOps',
      content: 'Centralize Version Control',
    },
    {
      type: 'BluePrint',
      name: 'DevOps',
      content: 'Centralize Version Control',
    },
  ];

  onServerAdded(serverData: {
    serverType: string;
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: serverData.serverType,
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintAdded(bluePrintData: {
    serverType: string;
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: bluePrintData.serverType,
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent,
    });
  }

  onReset() {
    this.serverElements = [];
  }

  onRemove(removeData: {
    serverType: string;
    serverName: string;
    serverContent: string;
  }) {
    let deletedIndex = this.serverElements.findIndex(
      (c) =>
        c.type === removeData.serverType &&
        c.name === removeData.serverName &&
        c.content === removeData.serverContent
    );

    this.serverElements.splice(deletedIndex, 1);

    //console.log(removeData.serverType + " | "+ removeData.serverName + " | " + removeData.serverContent);
    //this.serverElements.pop();
  }
}
