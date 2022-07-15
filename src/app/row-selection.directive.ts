import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appRowSelection]'
})
export class RowSelectionDirective {
  selected: boolean = false;

  @Input()
  appRowSelection;
  
  @Output()
  onSelectionChange: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) { }

  @HostListener("click")
  onClick() {
    this.selected = !this.selected;
    this.element.nativeElement.style.backgroundColor = this.selected ? "blue" : null;
    this.onSelectionChange.emit({selected: this.selected, value: this.appRowSelection});
  }
}
