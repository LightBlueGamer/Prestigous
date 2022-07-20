import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { getInventory } from '../database/functions.js';
import { sortRarity } from '../modules/functions.js';

export default {
	devCmd: false,
	permLevel: 0,
	data: new SlashCommandBuilder()
		.setName('inventory')
		.setDescription('Checks your inventory.')
		.addNumberOption((option) => option.setName('page').setDescription('Page to go to'))
		.toJSON(),
	async execute(interaction) {
		const user = interaction.user;
		const items = await getInventory(user.id);
		console.log(items);
		const pgNum = interaction.options.getNumber('page') || 1;
		let page = !pgNum ? 1 : isNaN(pgNum) ? 1 : parseInt(pgNum);
		if (page * 25 > items.length) page = Math.ceil(items.length / 25);
		if (page <= 0) page = 1;
		const pageIdx = page - 1;
		const sorted = sortRarity(items);
		const spliced = sorted.slice(pageIdx * 25, pageIdx * 25 + 25);

		const fields = [];

		let username = user.username;
		const embed = new EmbedBuilder().setTitle(`${username.endsWith('s') ? (username += "'") : (username += "'s")}`);
		if (items.length > 0) {
			for (const item of items) {
				fields.push({ name: `${item.amount}x ${item.name}`, value: `${item.description}`, inline: true });
			}

			embed.setDescription(`Page ${page}/${Math.ceil(items.length / 25)}`);
			embed.addFields(fields);
		} else {
			embed.setDescription(`You don't have any items.`);
		}

		return interaction.reply({ embeds: [embed] });
	}
};
