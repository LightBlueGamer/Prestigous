import { profiles } from './base.js';
import { client } from '../index.js';
export async function initProfile(key) {
    return profiles.set(key, {
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
        moneyBoost: new Date()
    });
}
export async function getProfile(key) {
    return profiles.get(key);
}
export async function hasProfile(key) {
    return profiles.has(key);
}
export async function getInventory(key) {
    return profiles.get(`${key}.inventory`);
}
export async function getUsers(id) {
    const users = [];
    const keys = await profiles.keys;
    for (const key of keys) {
        const profile = await getProfile(key);
        const user = await client.users.fetch(key);
        const tag = user.id === id ? `${user.tag} (you)` : `${user.tag}`;
        users.push({
            tag: tag,
            prestige: profile.prestige,
            level: profile.level,
            xp: profile.xp
        });
    }
    return users;
}
export async function getLeaders(page, users) {
    const sorted = users.sort((a, b) => b.prestige - a.prestige || b.level - a.level || b.xp - a.xp).slice((page - 1) * 10, (page - 1) * 10 + 10);
    const fields = sorted
        .map((v, i) => [
        {
            name: `#${i + 1} ${v.tag}`,
            value: `Prestige: ${v.prestige}\nLevel: ${v.level}\nExperience: ${v.xp}`,
            inline: true
        },
        i % 2
            ? {
                name: '\u200b',
                value: '\u200b',
                inline: true
            }
            : null
    ])
        .flat()
        .filter(Boolean);
    return { fields, sorted };
}
export async function addXp(key, amount) {
    return profiles.math(`${key}.xp`, '+', amount);
}
export async function addMoney(key, amount) {
    return profiles.math(`${key}.money`, '+', amount);
}
export async function canLevelUp(key) {
    const level = (await getProfile(key)).level;
    const xpNeeded = level * 500;
    const xpNext = xpNeeded - (await getProfile(key)).xp;
    const hasEnoughXp = xpNext <= 0 && level <= 100;
    return { hasEnoughXp, xpNext };
}
export async function levelUp(key) {
    await profiles.set(`${key}.xp`, 0);
    return profiles.inc(`${key}.level`);
}
export async function canPrestige(key) {
    const level = (await getProfile(key)).level;
    return level === 100;
}
export async function prestige(key) {
    await profiles.set(`${key}.level`, 0);
    return profiles.inc(`${key}.prestige`);
}
//# sourceMappingURL=functions.js.map