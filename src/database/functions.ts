import { configuration, profiles } from './base.js';
import { client } from '../index.js';
import type { Profile } from '../game/classes/Profile.js';
import type { User } from '../game/classes/User.js';
import type { Item } from '../game/classes/Item.js';
import { BackpackItem } from '../game/classes/BackpackItem.js';
import type { APIEmbedField } from 'discord.js';
import type { Loot } from '../game/classes/Loot.js';
import type { Lootbox } from '../game/classes/Lootbox.js';
import type { Booster } from '../game/classes/Booster.js';
import * as boosters from '../game/boosters.js';
import * as tokens from '../game/tokens.js';
import type { Token } from '../game/classes/Token.js';

export async function initProfile(key: string) {
    const user = await client.users.fetch(key);
    return profiles.set(key, {
        tag: user.tag,
        inventory: [],
        prestige: 0,
        level: 1,
        xp: 0,
        money: 0,
        pCoins: 0,
        joined: new Date(),
        daily: new Date(),
        badges: [],
        buddy: {},
        xpBoost: new Date(),
        moneyBoost: new Date(),
        ping: false,
    });
}

export async function getProfile(key: string): Promise<Profile> {
    return profiles.get(key);
}

export async function hasProfile(key: string) {
    return profiles.has(key);
}

export async function getInventory(key: string): Promise<Profile.Inventory> {
    return profiles.get(`${key}.inventory`);
}

export async function getUsers(id: string) {
    const users: User[] = [];
    const keys = await profiles.keys;

    for (const key of keys) {
        const profile = await getProfile(key);
        const tag = key === id ? `${profile.tag} (you)` : `${profile.tag}`;

        if(profile.tag !== undefined) {
            users.push({
                tag,
                prestige: profile.prestige,
                level: profile.level,
                xp: profile.xp,
            });
        }
    }

    return users;
}

export async function getLeaders(page: number, users: User[]) {
    const sorted = users.sort((a, b) => b.prestige - a.prestige || b.level - a.level || b.xp - a.xp)
    const sliced = sorted.slice((page - 1) * 10, (page - 1) * 10 + 10);
    const fields: APIEmbedField[] = [];

    for(let i = 0; i < sliced.length; i++) {
        const ind = sliced[i]
        if(i & 1) {
            fields.push({
                name: `\u200b`,
                value: `\u200b`,
                inline: true,
            });

            fields.push({
                name: `${sorted.indexOf(ind)+1}. ${ind.tag}`,
                value: `Prestige: ${ind.prestige} Level: ${ind.level}  XP: ${ind.xp}`,
                inline: true,
            });
        } else {
            fields.push({
                name: `${sorted.indexOf(ind)+1}. ${ind.tag}`,
                value: `Prestige: ${ind.prestige} Level: ${ind.level} XP: ${ind.xp}`,
                inline: true,
            });
        }
    }

    return { fields, sorted };
}

export async function addXp(key: string, amount: number) {
    return profiles.math(`${key}.xp`, '+', amount);
}

export async function addMoney(key: string, amount: number) {
    return profiles.math(`${key}.money`, '+', amount);
}

export async function removeMoney(key: string, amount: number) {
    return profiles.math(`${key}.money`, '-', amount);
}

export async function canLevelUp(key: string) {
    const { level } = await getProfile(key);
    const xpNeeded = level * 500;
    const xpNext = xpNeeded - (await getProfile(key)).xp;
    const hasEnoughXp = xpNext <= 0 && level <= 100;
    return { hasEnoughXp, xpNext };
}

export async function levelUp(key: string) {
    await profiles.set(`${key}.xp`, 0);
    return profiles.inc(`${key}.level`);
}

export async function canPrestige(key: string) {
    const { level } = await getProfile(key);
    return level === 100;
}

export async function prestige(key: string) {
    await profiles.set(`${key}.level`, 0);
    return profiles.inc(`${key}.prestige`);
}

export async function addItem(key: string, item: Item, amount: number = 1) {
    const inventory = await getInventory(key);
    const invItem = inventory.find((i) => i.name === item.name)!;
    const itemIndex = inventory.indexOf(invItem);
    if (invItem) {
        await profiles.math(`${key}.inventory[${itemIndex}].amount`, '+', amount);
    } else {
        const newItem = new BackpackItem(item.name, item.rarity, item.description, amount, item.type);
        await profiles.push(`${key}.inventory`, newItem, false);
    }
}

export async function removeItem(key: string, item: Loot | BackpackItem | Lootbox) {
    const inventory = await getInventory(key);
    const invItem = inventory.find((i) => i.name === item.name)!;
    const itemIndex = inventory.indexOf(invItem);
    if (invItem.amount > 1) {
        await profiles.dec(`${key}.inventory[${itemIndex}].amount`);
    } else {
        await profiles.remove(`${key}.inventory`, (itm: BackpackItem) => itm.name === item.name);
    }
}

export async function hasItem(key: string, item: string | Loot | BackpackItem | Lootbox) {
    const inventory = await getInventory(key);
    if(typeof item === 'string') return inventory.some((v) => v.name === item);
    else return inventory.some((v) => v.name === item.name);
}

export async function getItem(key: string, item: string | Loot | BackpackItem | Lootbox) {
    const inventory = await getInventory(key);
    return inventory.find((v) => v.name === item)!
}

export async function togglePing(key: string) {
    const profile = await getProfile(key);
    const curState = profile.ping;
    return profiles.set(`${key}.ping`, !curState);
}

export async function addBooster(key: string, booster: Booster) {
    const profile = await getProfile(key);
    const xpDate = profile.xpBoost.getTime();
    const moneyDate = profile.moneyBoost.getTime();
    let string;

    switch (await hasBooster(key, booster.type)) {
        case true:
            switch (booster.type) {
                case 'exp':
                    await profiles.set(`${key}.xpBoost`, new Date(xpDate + (24 * booster.days) * 60 * 60 * 1000));
                    string = `XP booster extended for ${booster.days * 24} hours!`;
                    break;

                case 'money':
                    await profiles.set(`${key}.moneyBoost`, new Date(moneyDate + (24 * booster.days) * 60 * 60 * 1000));
                    string = `Money booster extended for ${booster.days * 24} hours!`;
                    break;
            
                default:
                    string = 'Invalid booster type!';
                    break;
            }

            break;
            
        default:
            switch (booster.type) {
                case 'exp':
                    await profiles.set(`${key}.xpBoost`, new Date(Date.now() + (24 * booster.days) * 60 * 60 * 1000));
                    string = `XP booster activated for ${booster.days * 24} hours!`;
                    break;

                case 'money':
                    await profiles.set(`${key}.moneyBoost`, new Date(Date.now() + (24 * booster.days) * 60 * 60 * 1000));
                    string = `Money booster activated for ${booster.days * 24} hours!`;
                    break;
                
                default:
                    string = 'Invalid booster type!';
                    break;
            }

            break;
    }

    return string;
}

export async function hasBooster(key: string, type: string) {    
    const profile = await getProfile(key);
    const xpDate = profile.xpBoost.getTime();
    const moneyDate = profile.moneyBoost.getTime();

    if (type === 'exp') {
        return xpDate > new Date().getTime();
    } else if (type === 'money') {
        return moneyDate > new Date().getTime();
    } else {
        return false;
    }
}

export async function getBooster(name: string) {
    return (Object.values(boosters)).find((v) => v.name === name)!;
}

export async function getToken(name: string) {
    return (Object.values(tokens)).find((v) => v.name === name)!;
}

export async function useItem(key: string, item: BackpackItem) {
    let string;
    switch (item.type) {
        case 'booster':
            const booster = await getBooster(item.name);
            string = await addBooster(key, booster);
            break;

        case 'token':
            const token = await getToken(item.name);
            string = await useToken(key, token);
            break;
    
        default:
            string = 'This item has no use yet!';
            break;
    }

    return string;
    
}

export async function getTotalItems(item: Item) {
    const items: number[] = [];
    const keys = await profiles.keys;
    for(const key of keys) {
        const inventory = await getInventory(key);
        items.push(...inventory.filter((i) => i.name === item.name).map((i) => i.amount));
    }

    return items.reduce((a, b) => a + b, 0);
}

export async function useToken(key: string, token: Token) {
    profiles.math(`${key}.level`, '+', token.amount);
    return `You used a level token and gained ${token.amount} levels! Your now at level ${(await getProfile(key)).level}.`;
}

export async function initConfig(key: string) {
    return configuration.set(key, {
        levelMessages: "current",
        randomRewards: "current",
    })
}

export async function getGuildConfig(key: string) {
    return configuration.get(key);
}

export async function setGuildConfig(key: string, channel: string, type: string) {
    if(type === 'level') {
        return configuration.set(`${key}.levelMessages`, channel);
    } else if(type === 'reward') {
        return configuration.set(`${key}.randomRewards`, channel);
    } else {
        return 'Invalid config type!';
    }
}