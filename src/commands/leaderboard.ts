import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { getLeaders, getUsers } from '../database/functions.js';

export default {
	devCmd: false,
	permLevel: 0,
	data: new SlashCommandBuilder()
		.setName('leaderboard')
		.setDescription('Checks the season leaderboard.')
		.addNumberOption((option) => option.setName('page').setDescription('Page to go to'))
		.toJSON(),
	async execute(interaction) {
		const user = interaction.user;
		const users = await getUsers(user.id);
		const pgNum = interaction.options.getNumber('page') || 1;
		let page = !pgNum ? 1 : isNaN(pgNum) ? 1 : parseInt(pgNum);
		if (page * 25 > users.length) page = Math.ceil(users.length / 25);
		if (page <= 0) page = 1;

		const { fields, sorted } = await getLeaders(page, users);

		const embed = new EmbedBuilder()
			.setTitle(`Prestigious leaderboard top ${(page - 1) * 10 + 10}`)
			.setDescription(`Page ${page}/${Math.ceil(users.length / 10)}`)
			.setFooter({ text: `You are #${sorted.findIndex((x) => x.tag.includes(user.tag)) + 1} out of ${sorted.length}.` })
			.addFields(fields);

		interaction.reply({ embeds: [embed] });
	}
};
