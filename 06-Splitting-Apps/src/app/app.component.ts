import { Component } from '@angular/core';
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

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'Server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintAdded(bluePrintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'BluePrint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent,
    });
  }
}
