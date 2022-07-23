import { Item } from './Item.js';
import type { Rarity } from './Rarity.js';

export class Loot extends Item {
    weight: number;
    constructor(name: string, rarity: Rarity, description: string, type: string, weight: number) {
        super(name, rarity, description, type);
        this.weight = weight;
    }
}
