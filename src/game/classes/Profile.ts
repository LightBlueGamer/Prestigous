import { BackpackItem } from "./BackpackItem.js";

export interface Profile {
    inventory: Profile.Inventory;
    prestige: number;
    level: number;
    xp: number;
    money: number;
    pCoins: number;
    joined: Date;
    daily: Date;
    badges: Profile.Badges;
    buddy: Profile.Buddy;
    xpBoost: Date;
    moneyBoost: Date;
}

export namespace Profile {
    export type Inventory = BackpackItem[];

    export type Badges = Badge[];

    export interface Badge {
        icon: string;
        name: string;
        description: string;
    }

    export interface Buddy {
        name: string;
    }
}