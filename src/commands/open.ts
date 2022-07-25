import { CommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { addItem, hasItem, removeItem } from '../database/functions.js';
import * as lootboxes from '../game/lootboxes.js';

export default {
    devCmd: false,
    permLevel: 0,
    data: new SlashCommandBuilder()
    .setName('open')
    .setDescription('Opens a lootbox')
    .addStringOption((option) => 
    option
    .setName('lootbox')
    .setDescription('The lootbox to open.')
    .setRequired(true)
    .setAutocomplete(true)
    )
    .toJSON(),
    async execute(interaction: CommandInteraction) {
        const { user } = interaction;
        const toOpen = interaction.options.get("lootbox")?.value;
        const box = (Object.entries(lootboxes)).find((_v, i, o) => o[i][0] === toOpen)?.[1]!;
        const loot = box.loottable.getLoot();
        if(await hasItem(user.id, box)) await removeItem(user.id, box);
        else {
            return interaction.reply({
                content: `You don't have any ${box.name}`
            }
        )}

        await addItem(user.id, loot);

        const embed = new EmbedBuilder()
        .setTitle(`You got a ${loot.name} from your ${box.name}!`)
        .setColor('Random')

        return interaction.reply({
            embeds: [ embed ]
        });
    },
};
