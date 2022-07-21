import { LootTable } from "./Loottable.js";
import { Rarity } from "./Rarity.js";

export class Lootbox {
    name: string;
    rarity: Rarity;
    loottable: LootTable;
    price: number;
    description: string;
    constructor(name: string, rarity: Rarity, loottable: LootTable, price: number, description: string) {
        this.name = name;
        this.rarity = rarity;
        this.loottable = loottable;
        this.price = price;
        this.description = description;
    }
}