import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[mpfAttribute]'
})
export class AttributeDirective {

  @Input() mpfAttribute!: string;

  @Input() captionKey?: string;

  constructor() { }


}
