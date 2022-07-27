import type { Rarity } from './Rarity.js';

export class Pet {
    name: string;
    rarity: Rarity;
    weight: number;
    constructor(name: string, rarity: Rarity, weight: number) {
        this.name = name;
        this.rarity = rarity;
        this.weight = weight;
    }
}
