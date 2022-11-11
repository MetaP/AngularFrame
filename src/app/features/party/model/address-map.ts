import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { DataElement, DataMap } from "src/shared/data/data-model";
import { Address } from "./address";
import { Person } from "./person";

interface IAddressMap extends DataMap {
    // [key: string]: DataElement;

    comment: string;
    line1: FormControl;
    // natural: FormControl;

    //formGroup: FormGroup;

    // constructor(fb: FormBuilder, address: Address) {
    //     this.comment = address.comment;
    //     const formGroup  = fb.group({
    //         line1: [address.line1, Validators.maxLength(3)],
    //         // natural: [address.natural, Validators.min(5)]
    //       })
    //     this.line1 = formGroup.controls.line1 as FormControl;
    //     // this.natural = formGroup.controls.natural as FormControl;

    //     this.formGroup = formGroup;
    // }
}

// export class AddressMap implements IAddressMap {
//     comment: string;
//     line1: FormControl;

//     constructor(address: Address) {
//         this.comment = address.comment;
//         // const formGroup  = fb.group({
//         //     line1: [address.line1, Validators.maxLength(3)],
//         //     // natural: [address.natural, Validators.min(5)]
//         // })
//         // this.line1 = formGroup.controls.line1 as FormControl;
//         this.line1 = new FormControl(address.line1);
//     }
//     [key: string]: DataElement;
// }

// export class PersonMap implements DataMap {
//     [key: string]: DataElement;
    
//     firstName: FormControl<string|null>;
//     lastName: FormControl<string|null>;
//     address: AddressMap;

//     constructor(person: Person) {
//         this.firstName = new FormControl(person.firstName);
//         this.lastName = new FormControl(person.lastName);
//         this.address= new AddressMap(person.address)
//     }
// }