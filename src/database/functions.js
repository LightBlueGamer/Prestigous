import { profiles } from './base.js';
import { client } from '../index.js';

export async function initProfile(key) {
	return await profiles.set(key, {
		inventory: [],
		prestige: 0,
		level: 1,
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
	return await profiles.get(key);
}

export async function hasProfile(key) {
	return await profiles.has(key);
}

export async function getInventory(key) {
	return await profiles.get(`${key}.inventory`);
}

export async function getUsers(id) {
	const users = [];
	const keys = await profiles.keys;

	for (const key of keys) {
		const profile = await getProfile(key);
		const user = await client.users.fetch(key);
		const tag = user.id === id ? `${user.tag} (you)` : `${user.tag}`;

		users.push({
			tag,
			prestige: profile.prestige,
			level: profile.level
		});
	}

	return users;
}

export async function getLeaders(page, users) {
	const sorted = users.sort((a, b) => b.prestige - a.prestige || b.level - a.level).slice((page - 1) * 10, (page - 1) * 10 + 10);
	const fields = sorted
		.map((v, i) => [
			{
				name: `#${i + 1} ${v.tag}`,
				value: `Prestige: ${v.prestige}\nLevel: ${v.level}`,
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
