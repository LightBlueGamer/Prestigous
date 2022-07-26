import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { addItem, getProfile, removeMoney } from "../database/functions.js";
import * as lootboxes from '../game/lootboxes.js';

export default {
    devCmd: false,
    permLevel: 0,
    data: new SlashCommandBuilder()
        .setName('shop')
        .setDescription('Buy items from the shop.')
        .addStringOption((option) => option.setName('item').setDescription('Lootbox to buy.').setRequired(true).setAutocomplete(true))
        .toJSON(),
    async execute(interaction: CommandInteraction) {
        const user = interaction.user;
        const item = interaction.options.get('item')?.value?.toString()!;
        const box = (Object.entries(lootboxes)).find((_v, i, o) => o[i][1].name.replace(/\s/gim, '') === item.replace(/\d+x|\$\d+|\s/gim, ''))?.[1]!;
        const profile = await getProfile(user.id);

        if(profile.money < box.price) {
            return interaction.reply({
                content: `You don't have enough money to buy that. You need $${box.price - profile.money} more.`,
                allowedMentions: {
                    repliedUser: profile.ping,
                }
            });
        }

        await addItem(user.id, box);
        await removeMoney(user.id, box.price);

        return interaction.reply({
            content: `You bought a ${box.name} for $${box.price}!`,
            allowedMentions: {
                repliedUser: profile.ping,
            }
        });
    }
};