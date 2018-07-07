class Item {
    private _name: string;
    private _count: number;

    constructor(name: string, count: number){
        this._name = name;
        this._count = count;
    }
    get count(): number {
        return this._count;
    }
    get name(): string {
        return this._name;
    }
}

export default  Item 