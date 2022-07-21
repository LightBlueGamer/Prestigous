import { Rarity } from "./Rarity.js";

export class Item {
    name: string;
    rarity: Rarity;
    description: string;
    constructor(name: string, rarity: Rarity, description: string) {
        this.name = name;
        this.rarity = rarity;
        this.description = description;
    }
}