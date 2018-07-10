class Item {
    private _name: string;
    private _count: number;
    private readonly _id: number;
    constructor(name: string, count: number, id:number){
        this._name = name;
        this._count = count;
        this._id = id;
    }
    get count(): number {
        return this._count;
    }
    get name(): string {
        return this._name;
    }
    get id(): number {
        return this._id;
    }
}

export default  Item 