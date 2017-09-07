import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSuccess]'
})
export class SuccessDirective {

  @HostBinding("class.success")
  shouldBeGreen: boolean = true;

  @Input()
  set appSuccess(val: boolean) {
    this.shouldBeGreen = val;
  }

  constructor() { }

}
