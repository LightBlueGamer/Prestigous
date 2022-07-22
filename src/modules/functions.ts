import { config } from '../../config.js';
import sortArray from 'sort-array';
import type { Interaction, Message } from 'discord.js';
import type { BackpackItem } from '../game/classes/BackpackItem.js';

export function permlevel(interaction: Interaction | Message) {
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
        customOrders: {
            rarity: ['Artifact', 'Mythic', 'Legendary', 'Epic', 'Very Rare', 'Rare', 'Uncommon', 'Common'],
        },
    });
}

export function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}
