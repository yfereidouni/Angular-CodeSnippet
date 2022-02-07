import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element!: {
    type: string;
    name: string;
    content: string;
  };

  @Output() removeServerElement = new EventEmitter<{
    serverType:string;
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onRemoveClicked() {
    //console.log(this)
    this.removeServerElement.emit({
      serverType: this.element.type,
      serverName: this.element.name,
      serverContent: this.element.content,
    });
  }
}
