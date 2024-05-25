export class Order {
    _id: string;
    fname: string;
    fdesc: string;
    cname: string;
    cemail: string;
    cphone: string;
    caddress: string;
    quan: number;
    price: number;
    date: string;
    
    constructor(
        _id: string,
        fname: string,
        fdesc: string,
        cname: string,
        cemail: string,
        cphone: string,
        caddress: string,
        quan: number,
        price: number,
        date: string
    ) {
        this._id = _id;
        this.fname = fname;
        this.fdesc = fdesc;
        this.cname = cname;
        this.cemail = cemail;
        this.cphone = cphone;
        this.caddress = caddress;
        this.quan = quan;
        this.price = price;
        this.date = date;
    }
}
