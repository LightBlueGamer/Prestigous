import type { Message } from 'discord.js';
import { addItem, addMoney, addXp, canLevelUp, getProfile, hasBooster, hasProfile, initProfile, levelUp } from '../database/functions.js';
import { random, send } from '../modules/functions.js';

const cooldown = new Set();
const globalBoosters = {
    xp: 2,
    money: 2,
};

export default {
    name: 'messageCreate',
    once: false,
    async execute(message: Message) {
        if (message.author.bot) return;
        if (!message.guild) return;

        const key = message.author.id;

        if (!(await hasProfile(key))) await initProfile(key);
        if (!cooldown.has(key)) {
            const xpBoost = await hasBooster(key, 'exp') ? 2 : 1;
            const moneyBoost = await hasBooster(key, 'money') ? 2 : 1;
            await addXp(key, random(10, 25) * globalBoosters.xp * xpBoost);
            await addMoney(key, random(25, 50) * globalBoosters.money * moneyBoost);
            cooldown.add(key);
            setTimeout(() => cooldown.delete(key), 1000 * 10);
        }

        if ((await canLevelUp(key)).hasEnoughXp) {
            await levelUp(key);
            if((await getProfile(key)).level % 5 === 0) {
                const { lootbox } = await import('../game/lootboxes');
                await addItem(key, lootbox);
                return send(`You have leveled up to level ${(await getProfile(key)).level} and got a lootbox!`, message, 'level');
            } else {
                return send(`You have leveled up to level ${(await getProfile(key)).level}!`, message, 'level');
            }
        }

        if (random(1, 1000) === 1) {
            const { messageTable } = await import('../game/loottables.js');
            const item = messageTable.getLoot();
            await addItem(key, item);
            send(`You just got a ${item.name}!`, message, 'reward');
        }
    },
};
