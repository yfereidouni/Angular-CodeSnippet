import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css'],
})
export class NodeComponent implements OnInit {
  @Input('srvElement') node!: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit(): void {}
}
