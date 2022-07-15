import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  color: string = "red";

  constructor(private element: ElementRef) {
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.element.nativeElement.style.color = this.color;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.element.nativeElement.style.color = null;
  }

}
