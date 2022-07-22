import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from 'discord.js';
import { getLeaders, getUsers } from '../database/functions.js';

export default {
    devCmd: false,
    permLevel: 0,
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Checks the season leaderboard.')
        .addNumberOption((option) => option.setName('page').setDescription('Page to go to').setRequired(true))
        .toJSON(),
    async execute(interaction: CommandInteraction) {
        const { user } = interaction;
        const users = await getUsers(user.id);
        await interaction.deferReply();
        let page = parseInt(interaction.options.get('page')!.toString() || '1') || 1;
        if (page * 25 > users.length) page = Math.ceil(users.length / 25);
        if (page <= 0) page = 1;

        const { fields, sorted } = await getLeaders(page, users);
        const embed = new EmbedBuilder()
            .setTitle(`Prestigious leaderboard top ${(page - 1) * 10 + 10}`)
            .setDescription(`Page ${page}/${Math.ceil(users.length / 10)}`)
            .setFooter({ text: `You are #${sorted.findIndex((x) => x.tag.includes(user.tag)) + 1} out of ${sorted.length}.` })
            .addFields(fields);

        interaction.editReply({ embeds: [embed] });
    },
};
