import { Item } from "./Item.js";
import { Rarity } from "./Rarity.js";

export class BackpackItem extends Item {
    amount: number;
    constructor(name: string, rarity: Rarity, description: string, amount: number) {
        super(name, rarity, description);
        this.amount = amount;
    }
}