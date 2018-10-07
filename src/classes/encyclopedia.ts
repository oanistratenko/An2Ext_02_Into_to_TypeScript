import { ReferenceItem } from './reference-item';

class Encyclopedia extends ReferenceItem {

    constructor(newTitle: string,
                newYear: number,
                public edition: number) {
        super(newTitle, newYear)
    }

    printCitation() {
        console.log(`${this.title} - ${this.year}`)
    }

    printItem() {
        super.printItem();
        console.log(`Edition ${this.year}`)
    }
}

export { Encyclopedia };