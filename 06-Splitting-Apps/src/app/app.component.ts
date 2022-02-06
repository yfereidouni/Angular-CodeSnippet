import { Component, OnInit } from '@angular/core';
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
}
