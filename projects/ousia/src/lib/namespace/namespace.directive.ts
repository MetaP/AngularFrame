import { Directive, Host, Input, Optional, SkipSelf } from '@angular/core';

@Directive({
  selector: '[o-namespace]'
})
export class NamespaceDirective {

  @Input('o-namespace') namespace: string = '';

  get namespacePath(): string {
    return this.parentNamespaceDirective
      ? this.parentNamespaceDirective.namespacePath + '.' + this.namespace
      : this.namespace;
  }

  constructor(@SkipSelf() @Optional() private parentNamespaceDirective: NamespaceDirective) { }
}
