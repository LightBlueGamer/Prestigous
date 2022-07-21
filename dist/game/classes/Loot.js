import { Item } from "./Item.js";
export class Loot extends Item {
    weight;
    constructor(name, rarity, description, weight) {
        super(name, rarity, description);
        this.weight = weight;
    }
}
//# sourceMappingURL=Loot.js.map