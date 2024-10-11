import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NamespaceDirective } from './namespace.directive';

// Create a simple host component to test the directive
@Component({
  template: `
    <div o-namespace="parent">
      <div o-namespace="child"></div>
    </div>
  `
})
class TestHostComponent {}

describe('NamespaceDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let parentDebugEl: DebugElement;
  let childDebugEl: DebugElement;
  let parentDirective: NamespaceDirective;
  let childDirective: NamespaceDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, NamespaceDirective]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();  // Triggers initial data binding

    // Access the directives
    parentDebugEl = fixture.debugElement.query(By.directive(NamespaceDirective));
    childDebugEl = parentDebugEl.query(By.directive(NamespaceDirective)); // Nested directive
    
    parentDirective = parentDebugEl.injector.get(NamespaceDirective);
    childDirective = childDebugEl.injector.get(NamespaceDirective);
  });

  it('should assign its own namespace when no parent directive exists', () => {
    expect(parentDirective.namespace).toBe('parent');
    expect(parentDirective.key).toBe('parent');
  });

  it('should concatenate parent and child namespaces correctly', () => {
    expect(childDirective.namespace).toBe('child');
    expect(childDirective.key).toBe('parent.child');
  });
});
