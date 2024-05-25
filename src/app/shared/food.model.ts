export class Food {
    _id: string;
    fname: string;
    fdesc: string;
    fprice: number;
    fpic: string;
    category_id: string ;
    count:number;

    constructor(_id: string, fname: string, fdesc: string, fprice: number, fpic: string, category_id: string, count: number) {
        this._id = _id;
        this.fname = fname;
        this.fdesc = fdesc;
        this.fprice = fprice;
        this.fpic = fpic;
        this.category_id = category_id;
        this.count = count;
    } 
}

