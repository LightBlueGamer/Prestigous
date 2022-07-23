import { Item } from './Item.js';
import type { Rarity } from './Rarity.js';

export class BackpackItem extends Item {
    amount: number;
    constructor(name: string, rarity: Rarity, description: string, type: string, amount: number) {
        super(name, rarity, description, type);
        this.amount = amount;
    }
}
