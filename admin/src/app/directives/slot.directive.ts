import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSlot]'
})
export class SlotDirective {
  @Input() appSlot: string = '';

  constructor(public template: TemplateRef<any>) {}
}
