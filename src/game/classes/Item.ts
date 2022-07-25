import type { Rarity } from './Rarity.js';

export class Item {
    name: string;
    rarity: Rarity;
    description: string;
    type?: string;
    constructor(name: string, rarity: Rarity, description: string, type?: string) {
        this.name = name;
        this.rarity = rarity;
        this.description = description;
        this.type = type;
    }
}
