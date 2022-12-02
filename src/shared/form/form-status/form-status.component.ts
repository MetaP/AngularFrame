import { Component, HostBinding, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
    selector: 'maf-form-status',
    templateUrl: './form-status.component.html'
})
export class FormStatusComponent implements OnInit {

    // Give the component a class with the same name, so that we can attach the styling to 
    // the class (.maf-form-status) instead of to the element type (maf-form-status).
    @HostBinding('class') class = 'maf-form-status';

    formGroup?: FormGroup;

    constructor(
        private controlContainer: ControlContainer
    ) {

    }

    ngOnInit(): void {
        this.formGroup = this.controlContainer?.control as FormGroup;
    }
}
