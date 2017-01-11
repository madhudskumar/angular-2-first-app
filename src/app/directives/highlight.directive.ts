import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private backgroundColor = 'white';
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = "green";
  };
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  constructor(private elementRef: ElementRef, private rendrer: Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.rendrer.setElementStyle(this.elementRef.nativeElement, "background-color", "green");
  }

}
