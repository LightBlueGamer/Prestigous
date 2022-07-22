import { Item } from './Item.js';
import type { Rarity } from './Rarity.js';

export class Loot extends Item {
    weight: number;
    constructor(name: string, rarity: Rarity, description: string, weight: number) {
        super(name, rarity, description);
        this.weight = weight;
    }
}
