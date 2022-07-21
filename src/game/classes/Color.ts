import type { HexColorString } from "discord.js";

export class Color {
    name: string;
    color: HexColorString
    constructor(name: string, color: HexColorString) {
        this.name = name;
        this.color = color;
    }
}