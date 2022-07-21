export class LootTable {
    loot;
    constructor(loot) {
        this.loot = loot;
    }
    getLoot() {
        let totalWeight = 0;
        for (let loot of this.loot) {
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
//# sourceMappingURL=Loottable.js.map