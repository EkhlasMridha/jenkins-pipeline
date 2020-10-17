import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appScrollable]',
  exportAs:"appScrollable"
})
export class ScrollableDirective {
  @Input() scrollUnit: number;
  constructor(private elm:ElementRef) { }

  private get element():HTMLElement {
    return this.elm.nativeElement;
  }

  get isOverflow() {
    return this.element.scrollWidth > this.element.clientWidth;
  }

  scroll(direction: 1 | -1) {
    this.element.scrollLeft += this.scrollUnit * direction;
  }

  get canScrollStart() {
    return this.element.scrollLeft > 0;
  }

  get canScrollEnd() {
    return this.element.scrollLeft + this.element.clientWidth != this.element.scrollWidth;
  }
}
