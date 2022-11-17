import { FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { MetaEntity, Validation } from "./data";
import { ProgrammingError } from "./errors";

export type Entity = { 
    [key: string]: AtomValueType;
}

export type DataElement = DataAtom | DataMap | DataArray;

export type AtomValueType = string | number | Date;

export type DataAtom = AtomValueType | FormControl;

export class DataMap  {
    
    formGroup: FormGroup;

    private readonlyValues: { [key: string]: Observable<AtomValueType> };

    getElement(key: string): Observable<AtomValueType> | FormControl{
        return this.isReadonly(key)
            ? this.readonlyValues[key]
            : this.formGroup.controls[key] as FormControl
    }

    isReadonly(key: string): boolean {
        return (key in this.readonlyValues);
    }

    constructor(entity: Entity, metaEntity: MetaEntity | null = null) {

        this.readonlyValues = {};

        const controls = {} as any;

        for (var key in entity) {
            const attribute = entity[key];

            if (metaEntity) {
                // If there is metadata for the current attribute...
                const metaAttribute = metaEntity.attributes[key];

                // If the attribute is readonly, store its value. 
                if (metaAttribute.readonly) {
                    this.readonlyValues[key] = new BehaviorSubject(attribute);    
                } else {
                    // The attribut is updatable. Create a FormControl for it.
                    controls[key] = new FormControl(attribute, getAngularValidators(metaAttribute.validation));
                }
            } else {
                controls[key] = new FormControl(attribute);
            }
        }

        this.formGroup = new FormGroup(controls);
    }
}

function getAngularValidators(validation: Validation | Validation[] | null | undefined): ValidatorFn | ValidatorFn[] | null  {
    if (validation instanceof Validation) {
        return [ getAngularValidator(validation)];
    } else if (Array.isArray(validation)) {
        return validation.map(getAngularValidator);
    } else return null;
}

function getAngularValidator(validation: Validation) : ValidatorFn {
    switch(validation.name) {
        case 'required':
            return Validators.required;
        case 'min' :
            return Validators.min(validation.parameters!['value'] as number);
        case 'max' :
            return Validators.max(validation.parameters!['value'] as number);
        case 'minLen' :
            return Validators.minLength(validation.parameters!['value'] as number);
        case 'maxLen' :
            return Validators.maxLength(validation.parameters!['value'] as number);
        default:
            throw new ProgrammingError(`Validation type "${validation.name}" is not supported.`);
    }
}

// type Map<TEntity extends Entity> = {
//     [Property in keyof TEntity]: DataElement;
// }

// var lala: DataMap = {
//     formGroup: "string"
// }

export type DataArray = DataAtom[] | DataMap[];
