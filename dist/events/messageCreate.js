import { addMoney, addXp, canLevelUp, getProfile, hasProfile, initProfile, levelUp } from '../database/functions.js';
import { random } from '../modules/functions.js';
const cooldown = new Set();
const globalBoosters = {
    xp: 4,
    money: 4
};
export default {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        if (message.author.bot)
            return;
        if (!message.guild)
            return;
        const key = message.author.id;
        if (!(await hasProfile(key)))
            await initProfile(key);
        if (!cooldown.has(key)) {
            await addXp(key, random(10, 25) * globalBoosters.xp);
            await addMoney(key, random(25, 50) * globalBoosters.money);
            cooldown.add(key);
            setTimeout(() => cooldown.delete(key), 1000 * 10);
        }
        if ((await canLevelUp(key)).hasEnoughXp) {
            await levelUp(key);
            message.reply({
                content: `You have leveled up to level ${(await getProfile(key)).level}!`,
                allowedMentions: {
                    repliedUser: false
                }
            });
        }
    }
};
//# sourceMappingURL=messageCreate.js.map