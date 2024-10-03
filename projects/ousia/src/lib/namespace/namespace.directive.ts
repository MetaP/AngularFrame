import { Directive, Host, Input, Optional, SkipSelf } from '@angular/core';

@Directive({
  selector: '[oNamespace]'
})
export class NamespaceDirective {

  @Input('oNamespace') namespace: string = '';

  get namespacePath(): string {
    return this.parentNamespaceDirective
      ? this.parentNamespaceDirective.namespacePath + '.' + this.namespace
      : this.namespace;
  }

  constructor(@SkipSelf() @Optional() private parentNamespaceDirective: NamespaceDirective) { }
}
