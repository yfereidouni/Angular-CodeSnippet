import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('heading') header!: ElementRef;

  @ContentChild('contentParagraph') paragraph!: ElementRef;

  @Input('srvElement') element!: {
    type: string;
    name: string;
    content: string;
  };

  @Output() removeServerElement = new EventEmitter<{
    serverType: string;
    serverName: string;
    serverContent: string;
  }>();

  constructor() {
    //console.log('==> Constructor was executed!');
  }

  ngOnInit(): void {
    //console.log('==> ngOnInit was executed!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('==> ngOnChanges was executed!');
    //console.log(changes);
  }

  ngDoCheck(): void {
    //console.log('==> ngDoCheck was executed!');
  }

  ngAfterContentInit(): void {
    //console.log('==> ngAfterContentInit was executed!');

    console.log('paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    //console.log('==> ngAfterContentChecked was executed!');
  }

  ngAfterViewInit(): void {
    //console.log('==> ngAfterViewInit was executed!');

    // This property only have value in ngAfterViewInit
    console.log('content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    //console.log('==> ngAfterViewChecked was executed!');
  }

  ngOnDestroy(): void {
    //console.log('==> ngOnDestroy was executed!');
  }

  onRemoveClicked() {
    //console.log(this)
    this.removeServerElement.emit({
      serverType: this.element.type,
      serverName: this.element.name,
      serverContent: this.element.content,
    });
  }
}
