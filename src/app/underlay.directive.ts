import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnderlay]';
})
export class UnderlayDirective {

  @Input() isActive: boolean;

  constructor(el: ElementRef) {
      el.nativeElement.style.display = 'none';
  }
   


}
