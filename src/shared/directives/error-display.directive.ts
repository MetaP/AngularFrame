import { AfterViewInit, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, OnInit, Type, ViewContainerRef } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { DummyComponent } from '../components/dummy/dummy.component';

@Directive({
  selector: '[mafErrorDisplay]'
})
export class ErrorDisplayDirective implements OnInit, AfterViewInit {

  private control!: AbstractControl;
  private dummy?: ComponentRef<DummyComponent>;
  
  constructor(
    private element: ElementRef,
    private ngControl: NgControl,
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    // this.control = <AbstractControl>this.ngControl.control;

    // this.viewContainerRef.
  }


  ngAfterViewInit(): void {
    this.dummy = this.viewContainerRef.createComponent(DummyComponent);
  }
}
