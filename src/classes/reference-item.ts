class ReferenceItem {

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

export { ReferenceItem };