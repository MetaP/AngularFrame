import { Validation } from "./data";

/**
 * The metadata describing an Attribute
 */
// export class MetaAttribute {
//     constructor(
//         public readonly name: string,
//         public readonly readonly: boolean = false,
//         public readonly validations: Validation[] | null = null) {
//     }
// }

export class AttributeDef {
    // readonly name!: string;
    readonly readonly?: boolean = false;
    readonly validation?: Validation[] | Validation | null = null;
}