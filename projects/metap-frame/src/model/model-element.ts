export class ModelElement {
    constructor(
        public name: string, 
        public parent?: ModelElement
    ) {}

    get id(): string {
        return parent ? this.parent!.id + '.' + this.name : this.name;
    }
}