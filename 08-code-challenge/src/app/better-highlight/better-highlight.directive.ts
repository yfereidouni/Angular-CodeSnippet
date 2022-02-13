import { Directive, ElementRef, HostListener, OnInit, Renderer2,HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'coral';

  // @HostBinding('style.background-Color') backgroundColor:string = 'transparent';
  @HostBinding('style.background-Color') backgroundColor:string = this.defaultColor;

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  
  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','wheat',);
    //this.backgroundColor='wheat';
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventdata:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','coral',);
    // this.backgroundColor='coral';
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventdata:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent',);
    // this.backgroundColor='transparent';
    this.backgroundColor = this.defaultColor;
  }
}
