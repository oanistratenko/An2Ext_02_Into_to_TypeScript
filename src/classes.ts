// Task #7.3
import * as Interfaces from "./interfaces";

// Task #4
class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

// Task #5.1
class ReferenceItem {
    //title: string;
    //year: number;
    //edition: number;

    // constructor(newTitle: string, newYear: number){
    //     console.log(`Creating a new ReferenceItem...`);
    //     this.title = newTitle;
    //     this.year = newYear;
    // } 
    constructor(public title: string, protected year: number){
    } 
    
    // Task #5.4
    private _publisher: string;
    static department : string;

    public get publisher(): string {
        return this._publisher.toUpperCase();
    }
    public set publisher(newPublisher : string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }  
}

export { UniversityLibrarian, ReferenceItem };