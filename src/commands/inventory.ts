import { SlashCommandBuilder, EmbedBuilder, EmbedField, CommandInteraction } from 'discord.js';
import { getInventory } from '../database/functions.js';
import { sortRarity } from '../modules/functions.js';

export default {
    devCmd: false,
    permLevel: 0,
    data: new SlashCommandBuilder()
        .setName('inventory')
        .setDescription('Checks your inventory.')
        .addNumberOption((option) => option.setName('page').setDescription('Page to go to').setRequired(true))
        .toJSON(),
    async execute(interaction: CommandInteraction) {
        const { user } = interaction;
        const items = await getInventory(user.id);
        const sorted = sortRarity(items);
        let page: number = parseInt(interaction.options.get('page')!.toString()) || 1;
        if (page * 25 > items.length) page = Math.ceil(items.length / 25);
        if (page <= 0) page = 1;
        const fields: EmbedField[] = [];
        let { username } = user;
        const embed = new EmbedBuilder().setTitle(`${username.endsWith('s') ? (username += "'") : (username += "'s")}`);
        if (items.length > 0) {
            for (const item of sorted) {
                fields.push({ name: `${item.amount}x ${item.name}`, value: `${item.description}`, inline: true });
            }

            embed.setDescription(`Page ${page}/${Math.ceil(items.length / 25)}`);
            embed.addFields(fields);
        } else {
            embed.setDescription(`You don't have any items.`);
        }

        return interaction.reply({ embeds: [embed] });
    },
};
