import { Rarity } from "./Rarity.js";

export class Pet {
    name: string;
    rarity: Rarity;
    constructor(name: string, rarity: Rarity) {
        this.name = name;
        this.rarity = rarity;
    }
}