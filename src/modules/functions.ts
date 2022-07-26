import { config } from '../../config.js';
import sortArray from 'sort-array';
import type { CommandInteraction, Message } from 'discord.js';
import type { BackpackItem } from '../game/classes/BackpackItem.js';
import { Item } from '../game/classes/Item.js';
import { addItem, addMoney, addXp } from '../database/functions.js';
import { client } from '../index.js';
import { profiles } from '../database/base.js';

export function permlevel(interaction: CommandInteraction | Message) {
    let permlvl = 0;
    const permOrder = config.permLevels.slice(0).sort((p: { level: number }, c: { level: number }) => (p.level < c.level ? 1 : -1));
    while (permOrder.length) {
        const currentLevel = permOrder.shift();
        if (currentLevel.check(interaction)) {
            permlvl = currentLevel.level;
            break;
        }
    }

    return permlvl;
}

export function sortRarity(arr: BackpackItem[]) {
    return sortArray(arr, {
        by: 'comp',
        order: 'rarity',
        customOrders: {
            rarity: ['Artifact', 'Mythic', 'Legendary', 'Epic', 'Very Rare', 'Rare', 'Uncommon', 'Common'],
        },
        computed: {
            comp: (row) => row.rarity.name,
        },
    });
}

export function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export async function voteReward(key: string, type: string) {
    const user = await client.users.fetch(key);
    const { lootbox } = await import('../game/lootboxes');
    const lootboxItem = new Item(lootbox.name, lootbox.rarity, lootbox.description, 'lootbox');
    const xp = random(250, 1000);
    const money = random(500, 1500);
    if(type === 'upvote') {
        await addItem(key, lootboxItem);
        await addXp(key, xp);
        await addMoney(key, money);
    }

    user.send(`You have voted and received 1 lootbox and ${xp} xp and $${money} money!`);
}

export async function dailyReward(key: string) {
    const { lootbox } = await import('../game/lootboxes');
    const lootboxItem = new Item(lootbox.name, lootbox.rarity, lootbox.description, 'lootbox');
    const xp = random(500, 1500);
    const money = random(1000, 2500);
    await addItem(key, lootboxItem);
    await addXp(key, xp);
    await addMoney(key, money);
    await profiles.set(`${key}.daily`, new Date(Date.now() + 24 * 60 * 60 * 1000));
    return { xp, money };
}