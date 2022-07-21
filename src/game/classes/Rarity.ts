import type { Color } from "./Color.js";
export class Rarity {
    name: string;
    color: Color;
    description: string;
    constructor(name: string, color: Color, description: string) {
        this.name = name;
        this.color = color;
        this.description = description;
    }
}
