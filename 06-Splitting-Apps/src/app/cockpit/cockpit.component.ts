import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverType: string;
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    serverType: string;
    serverName: string;
    serverContent: string;
  }>();

  @Output() resetServerElements = new EventEmitter<{}>();

  newServerType = '';
  //newServerName = '';
  //newServerContent = '';
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput!: ElementRef;

  nodes: Element[] = [];

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverNameInput: HTMLInputElement) {
    //console.log(serverNameInput.value);
    //if (this.newServerName !== '' && this.newServerContent !== '') {
    if (
      serverNameInput.value !== '' &&
      this.serverContentInput.nativeElement.value !== ''
    ) {
      this.serverCreated.emit({
        serverType: 'Server',
        serverName: serverNameInput.value,
        serverContent: this.serverContentInput.nativeElement.value,
      });
    }
  }

  onAddBluePrint(serverNameInput: HTMLInputElement) {
    //console.log(serverNameInput.value);
    //if (this.newServerName !== '' && this.newServerContent !== '') {
    if (
      serverNameInput.value !== '' &&
      this.serverContentInput.nativeElement.value !== ''
    ) {
      this.serverCreated.emit({
        serverType: 'BluePrint',
        serverName: serverNameInput.value,
        serverContent: this.serverContentInput.nativeElement.value,
      });
    }
  }

  onResetClicked(serverNameInput: HTMLInputElement) {
    this.resetServerElements.emit({
      serverType: 'Server',
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
