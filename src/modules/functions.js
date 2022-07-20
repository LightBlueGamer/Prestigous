import { config } from '../../config.js';
import sortArray from 'sort-array';

export function permlevel(interaction) {
	let permlvl = 0;

	const permOrder = config.permLevels.slice(0).sort((p, c) => (p.level < c.level ? 1 : -1));
	while (permOrder.length) {
		const currentLevel = permOrder.shift();
		if (currentLevel.check(interaction)) {
			permlvl = currentLevel.level;
			break;
		}
	}
	return permlvl;
}

export function sortRarity(arr) {
	return sortArray(arr, {
		order: 'rarity',
		by: 'rarity',
		customOrders: {
			rarity: ['Artefact', 'Mythic', 'Legendary', 'Epic', 'Very Rare', 'Rare', 'Uncommon', 'Common']
		}
	});
}
