import { AttributeType } from "./attribute-type";
import { ModelElement } from "./model-element";

export class ModelAttribute extends ModelElement{
    constructor(
        name: string, 
        parent: ModelElement,
        public readonly type: AttributeType,
        public readonly descriptionKey: string
    ) {
        super(name, parent);
    }
}