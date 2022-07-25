import { SlashCommandBuilder, CommandInteraction } from 'discord.js';
import { getItem, hasItem, removeItem, useItem } from '../database/functions';

export default {
    devCmd: false,
    permLevel: 0,
    data: new SlashCommandBuilder()
        .setName('use')
        .setDescription('Use a item in your inventory.')
        .addStringOption((option) => option.setName('item').setDescription('Item to use.').setRequired(true).setAutocomplete(true))
        .toJSON(),
    async execute(interaction: CommandInteraction) {
        const user = interaction.user;
        const item = interaction.options.get('item')?.value?.toString()!;

        if(!hasItem(user.id, item)) {
            return interaction.reply({
                content: `You don't have that item.`,
            });
        } else {
            const bpItem = await getItem(user.id, item);
            const content = await useItem(user.id, bpItem);
            await removeItem(user.id, bpItem);
            return interaction.reply({
                content,
            });
        }
    }
}