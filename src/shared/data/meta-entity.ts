import { AttributeDef, StandardValidation } from "./data";

// export class MetaEntity {
//     constructor(
//         public readonly name: string,
//         public readonly attributes: MetaAttribute[]
//     ) {}
// }


/**
 * The metadata describing an Entity
 */
 export interface MetaEntity {
    readonly name: string;
    readonly attributes: MetaAttributes;
}

export type MetaAttributes = { 
    [key: string]: AttributeDef;
}