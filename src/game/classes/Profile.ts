import type { BackpackItem } from './BackpackItem.js';

export class Profile {
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
    ping: boolean
    constructor(inventory: Profile.Inventory, prestige: number, level: number, xp: number, money: number, pCoins: number, joined: Date, daily: Date, badges: Profile.Badges, buddy: Profile.Buddy, xpBoost: Date, moneyBoost: Date, ping: boolean) {
        this.inventory = inventory;
        this.prestige = prestige;
        this.level = level;
        this.xp = xp;
        this.money = money;
        this.pCoins = pCoins;
        this.joined = joined;
        this.daily = daily;
        this.badges = badges;
        this.buddy = buddy;
        this.xpBoost = xpBoost;
        this.moneyBoost = moneyBoost;
        this.ping = ping;
    }

    get canPrestige() {
        return this.level === 100;
    }

    get canLevelUp() {
        return this.xp >= this.level * 500;
    }

    get hasXPBoost() {
        return this.xpBoost.getTime() > new Date().getTime();
    }

    get hasMoneyBoost() {
        return this.moneyBoost.getTime() > new Date().getTime();
    }

    getItem(item: string) {
        return this.inventory.find(i => i.name === item)!;
    } 

    hasItem(item: string) {
        return this.inventory.some(i => i.name === item);
    }

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
