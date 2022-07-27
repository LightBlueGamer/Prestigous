import { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } from 'discord.js';
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
    async execute(interaction: ChatInputCommandInteraction) {
        const { user } = interaction;
        const items = await getInventory(user.id);
        const sorted = sortRarity(items);
        const pgNum = interaction.options.getNumber('page')!;
        let page = typeof pgNum === 'number' ? pgNum : 1;
        if (page * 25 > items.length) page = Math.ceil(items.length / 25);
        if (page <= 0) page = 1;
        const sliced = sorted.slice((page - 1) * 25, (page - 1) * 25 + 25);
        let { username } = user;
        const embed = new EmbedBuilder().setTitle(`${username.endsWith('s') ? (username += "'") : (username += "'s")} inventory`)
            .setDescription(sliced.length > 0 ? sliced.map(item => `${item.amount}x ${item.name}`).join('\n') : `You don't have any items.`)
            .setFooter({text: `Page ${page}/${Math.ceil(items.length / 25) > 0 ? Math.ceil(items.length / 25) : 1}`})
            .setColor('Random');

        return interaction.reply({ embeds: [embed] });
    },
};
