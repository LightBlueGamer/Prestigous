import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { addItem, getProfile, removeMoney } from "../database/functions.js";
import { Item } from "../game/classes/Item.js";
import * as lootboxes from '../game/lootboxes.js';

export default {
    devCmd: false,
    permLevel: 0,
    data: new SlashCommandBuilder()
        .setName('shop')
        .setDescription('Buy items from the shop.')
        .addStringOption((option) => option.setName('item').setDescription('Lootbox to buy.').setRequired(true).setAutocomplete(true))
        .addNumberOption((option) => option.setName('amount').setDescription('Amount of items to buy.').setRequired(false))
        .toJSON(),
    async execute(interaction: ChatInputCommandInteraction) {
        const user = interaction.user;
        const item = interaction.options.getString('item')!;
        const amount = interaction.options.getNumber('amount') || 1;
        const box = (Object.values(lootboxes)).find((v) => v.name.replace(/\s/gim, '') === item.replace(/\d+x|\$\d+|\s/gim, ''))!;
        const profile = await getProfile(user.id);

        if(profile.money < box.price * amount) {
            return interaction.reply({
                content: `You don't have enough money to buy that. You need $${box.price - profile.money} more.`,
                allowedMentions: {
                    repliedUser: profile.ping,
                }
            });
        }

        const toAdd = new Item(box.name, box.rarity, box.description, 'lootbox');

        await addItem(user.id, toAdd, amount);
        await removeMoney(user.id, box.price * amount);

        return interaction.reply({
            content: `You bought a ${box.name} for $${box.price * amount}!`,
            allowedMentions: {
                repliedUser: profile.ping,
            }
        });
    }
};