export class Reguser {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    password: string;

    constructor(fullName: string, email: string, phone: string, address: string, password:string) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.password = password;
    }
}
