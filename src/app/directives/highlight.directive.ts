import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input , OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() defaultColor = 'white';
  @Input('appHighlight') hilightColor = 'green';
  private backgroundColor;
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.hilightColor;
  };
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  constructor(private elementRef: ElementRef, private rendrer: Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.rendrer.setElementStyle(this.elementRef.nativeElement, "background-color", "green");
  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
