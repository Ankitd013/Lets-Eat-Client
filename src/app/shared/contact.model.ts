export class Contact {
    _id:string;
    contactname: string;
    contactemail: string;
    contactphone: number;
    contactmessage: string;
    
    constructor(_id: string, contactname: string, contactemail: string, contactphone: number, contactmessage: string) {
        this._id = _id;
        this.contactname = contactname;
        this.contactemail = contactemail;
        this.contactphone = contactphone;
        this.contactmessage = contactmessage;
    }
}

