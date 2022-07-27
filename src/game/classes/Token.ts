export class Token {
    name: string;
    amount: number;
    type: string;
    constructor(name: string, amount: number, type: string) {
        this.name = name;
        this.amount = amount;
        this.type = type;
    }
}