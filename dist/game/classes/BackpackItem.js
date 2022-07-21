import { Item } from "./Item.js";
export class BackpackItem extends Item {
    amount;
    constructor(name, rarity, description, amount) {
        super(name, rarity, description);
        this.amount = amount;
    }
}
//# sourceMappingURL=BackpackItem.js.map