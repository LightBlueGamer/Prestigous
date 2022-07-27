import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { getTotalItems } from "../database/functions";
import type { Loot } from "../game/classes/Loot";
import type { Lootbox } from "../game/classes/Lootbox";
import * as lootItems from "../game/loot.js";
import * as boxes from "../game/lootboxes.js";
import * as tables from "../game/loottables.js";

export default {
    devCmd: false,
    permLevel: 0,
    data: new SlashCommandBuilder()
        .setName('search')
        .setDescription('Search for items, lootboxes.')
        .addStringOption((option) => option
            .setName('type')
            .setDescription('What type to search for')
            .setRequired(true)
            .addChoices({ name: 'Items', value: 'item' }, { name: 'Lootboxes', value: 'lootbox' })
        )
        .addStringOption((option) => option
            .setName('query')
            .setDescription('What to search for')
            .setRequired(true)
            .setAutocomplete(true)
        )
        .toJSON(),
    async execute(interaction: ChatInputCommandInteraction) {
        const type = interaction.options.getString('type')!;
        const query = interaction.options.getString('query')!;
        let result: Lootbox | Loot;
        const embed = new EmbedBuilder();

        if(type === 'lootbox') {
            result = Object.values(boxes).find(x => x.name === query)!;
            embed.addFields([
                { name: 'Rarity', value: `${result.rarity.name}`, inline: true },
                { name: 'Price', value: `$${result.price}`, inline: true },
            ])
        } else {
            const loot = Object.values(lootItems);
            const loottable = Object.values(tables).filter(x => x.loot.some((y) => y.name === query));
            result = loot.find((x) => x.name === query)!;
            let totalWeight = 0;
            for (const lootItem of loot) {
                if(loottable.some(x => x.loot.some((y) => y.name === lootItem.name))) totalWeight += lootItem.weight;
            }

            const totalItems = await getTotalItems(result)

            embed.addFields([
                { name: 'Rarity', value: `${result.rarity.name}`, inline: true },
                { name: 'Chance', value: `${result.weight > 0 ? `${result.weight/result.weight} in ${Math.round(totalWeight/result.weight)}` : 'Unobtainable'}`, inline: true },
                { name: 'Obtained from', value: `${result.weight > 0 ? `${loottable.map(x => x.name).join('\n')}` : 'Unobtainable'}`, inline: true },
            ])
            .setFooter({
                text: `There are currently ${totalItems} ${result.name}${result.name.endsWith('s') ? '' : 's'} in the game.`,
            })
        }

        embed.setTitle(`${result.name}`)
        .setDescription(`${result.description}`)
        .setColor(result.rarity.color.color);

        return interaction.reply({
            embeds: [ embed ]
        });

    }
}