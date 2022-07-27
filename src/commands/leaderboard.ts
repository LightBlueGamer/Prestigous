import { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } from 'discord.js';
import { getLeaders, getUsers } from '../database/functions.js';

export default {
    devCmd: false,
    permLevel: 0,
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Checks the season leaderboard.')
        .addNumberOption((option) => option.setName('page').setDescription('Page to go to'))
        .toJSON(),
    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.deferReply()
        const { user } = interaction;
        const users = await getUsers(user.id);
        const pgNum = interaction.options.getNumber('page')!;
        let page = typeof pgNum === 'number' ? pgNum : 1;
        if (page * 10 > users.length) page = Math.ceil(users.length / 10);
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
