import { natural } from "src/shared/data-bound/numbers/numbers.module";

export interface AttributeType {
    readonly name: string;
}

export class Text implements AttributeType {

    readonly name = "Text";

    constructor(public length: natural) {

    }

}