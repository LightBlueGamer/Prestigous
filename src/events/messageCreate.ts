import type { Message } from 'discord.js';
import { addItem, addMoney, addXp, canLevelUp, getProfile, hasBooster, hasProfile, initProfile, levelUp } from '../database/functions.js';
import { Item } from '../game/classes/Item.js';
import { random } from '../modules/functions.js';

const cooldown = new Set();
const globalBoosters = {
    xp: 1,
    money: 1,
};

export default {
    name: 'messageCreate',
    once: false,
    async execute(message: Message) {
        console.log('test')
        if (message.author.bot) return;
        if (!message.guild) return;

        const key = message.author.id;

        if (!(await hasProfile(key))) await initProfile(key);
        console.log(cooldown)
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
            const ping = (await getProfile(key)).ping;
            message.reply({
                content: `You have leveled up to level ${(await getProfile(key)).level}!`,
                allowedMentions: {
                    repliedUser: ping,
                },
            });
        }

        if (random(1, 1000) === 1) {
            const { lootbox } = await import('../game/lootboxes');
            const lootboxItem = new Item(lootbox.name, lootbox.rarity, lootbox.description, 'lootbox');
            const ping = (await getProfile(key)).ping;
            await addItem(key, lootboxItem);
            message.reply({
                content: `You just got a lootbox! you can open it with the /open command!`,
                allowedMentions: {
                    repliedUser: ping,
                },
            });
        }
    },
};
