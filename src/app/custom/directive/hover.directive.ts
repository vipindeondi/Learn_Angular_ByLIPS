import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input('appHover') color: string;

  constructor(private el: ElementRef, private renderor: Renderer2) { }

  ngOnInit() {
    console.log(this.el.nativeElement);
    console.log(this.color);
  }

  @HostListener('mouseover') onmouseover() {
    console.log('on mouseover event');
    // this.el.nativeElement.style.background='steelblue';
    this.renderor.setStyle(this.el.nativeElement, 'color', 'white');
    this.renderor.setStyle(this.el.nativeElement, 'background', 'steelblue');
  }

  @HostListener('mouseout') onmouseout() {
    this.renderor.setStyle(this.el.nativeElement, 'color', 'black');
    this.renderor.setStyle(this.el.nativeElement, 'background', 'transparent');


  }
}
