import type { Loot } from './Loot.js';

export class LootTable {
    name: string;
    loot: Loot[];
    constructor(name: string, loot: Loot[]) {
        this.name = name;
        this.loot = loot;
    }

    getLoot(): Loot {
        let totalWeight = 0;
        for (const loot of this.loot) {
            totalWeight += loot.weight;
        }

        let randomNumber = Math.floor(Math.random() * totalWeight);
        let counter = 0;
        while (randomNumber > 0) {
            randomNumber -= this.loot[counter].weight;
            counter++;
        }

        return this.loot[counter - 1];
    }
}
