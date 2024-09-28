import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { NamespaceDirective } from 'ousia';

@Component({
  selector: 'maf-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.scss']
})
export class TryComponent implements AfterViewInit {

  @ViewChildren(NamespaceDirective) namespaceDirectives?: QueryList<NamespaceDirective>;

  ngAfterViewInit(): void {
    this.namespaceDirectives?.forEach(directive => {
      console.log(`** Namespace: ${directive.namespace} - Path: ${directive.namespacePath}`);
    });
  }
}
