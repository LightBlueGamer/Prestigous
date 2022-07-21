import { profiles } from './base.js';
import { client } from '../index.js';
import { Profile } from '../game/classes/Profile.js';
import { User } from '../game/classes/User.js';

export async function initProfile(key: string) {
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

export async function getLeaders(page: number, users: User[]) {
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

export async function addXp(key: string, amount: number) {
	return profiles.math(`${key}.xp`, '+', amount);
}

export async function addMoney(key: string, amount: number) {
	return profiles.math(`${key}.money`, '+', amount);
}

export async function canLevelUp(key: string) {
	const level = (await getProfile(key)).level;
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
	const level = (await getProfile(key)).level;
	return level === 100;
}

export async function prestige(key: string) {
	await profiles.set(`${key}.level`, 0);
	return profiles.inc(`${key}.prestige`);
}
