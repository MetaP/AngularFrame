import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";

export type Entity = { 
    [key: string]: AtomValueType;
}

export type DataElement = DataAtom | DataMap | DataArray;

export type AtomValueType = string | number | Date;

export type DataAtom = AtomValueType | FormControl;

// export interface DataMap {
//     readonlyPart?: { [key: string]: DataElement},
//     UpdatablePart?: FormGroup
// }

// export class DataMapBase {
//     [key: string]: DataElement;
// }

export class DataMap  {
    
    formGroup: FormGroup;

    private readonlyKeys: string[];
    private readonlyValues: { [key: string]: Observable<AtomValueType> };

    getElement(key: string): Observable<AtomValueType> | FormControl{
        return this.isReadonly(key)
            ? this.readonlyValues[key]
            : this.formGroup.controls[key] as FormControl
    }

    isReadonly(key: string): boolean {
       return this.readonlyKeys.includes(key);
    }

    constructor(entity: Entity, readonlyAttributes: string[] = []) {

        this.readonlyKeys = readonlyAttributes;
        this.readonlyValues = {};

        const controls = {} as any;

        for (var key in entity) {
            const attribute = entity[key];

            // Store the value of readonly attributes.
            if (readonlyAttributes.includes(key)) {
                this.readonlyValues[key] = new BehaviorSubject(attribute);    
            } else { // If the attribute is updatable, add a FormControl with the same name to the controls object.
                controls[key] = new FormControl(attribute);
            }
        }

        this.formGroup = new FormGroup(controls);
    }
}

// type Map<TEntity extends Entity> = {
//     [Property in keyof TEntity]: DataElement;
// }

// var lala: DataMap = {
//     formGroup: "string"
// }

export type DataArray = DataAtom[] | DataMap[];
