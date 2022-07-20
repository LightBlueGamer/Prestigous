import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { getProfile } from '../database/functions.js';

export default {
	devCmd: false,
	permLevel: 0,
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('Checks a users profile.')
		.addUserOption((option) => option.setName('user').setDescription('The user to show profile of.'))
		.toJSON(),
	async execute(interaction) {
		const user = interaction.options.getUser('user') || interaction.user;
		const profile = await getProfile(user.id);
		const joined = Math.round(profile.joined / 1000);
		const embed = new EmbedBuilder()
			.setTitle(user.tag)
			.setDescription(
				`Member since <t:${joined}:F> <t:${joined}:R>\nBuddy: ${profile?.buddy?.name ? profile.buddy.name : "You don't have a buddy!"}\n${
					profile?.badges?.length > 5 ? `You have ${profile.badges.length} badges!` : `${profile.badges.map((x) => x.icon).join(' | ')}`
				}`
			)
			.addFields([
				{ name: 'Prestige', value: `${profile.prestige}`, inline: true },
				{ name: 'Level', value: `${profile.level}`, inline: true },
				{ name: 'Experience', value: `${profile.xp}`, inline: true },
				{ name: 'Money', value: `${profile.money}`, inline: true },
				{ name: '\u200b', value: `\u200b`, inline: true },
				{ name: 'Prestigious Coins', value: `${profile.pCoins}`, inline: true }
			])
			.setColor(null);
		interaction.reply({ embeds: [embed] });
	}
};
