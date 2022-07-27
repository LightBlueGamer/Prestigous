import { permlevel } from '../modules/functions.js';
import { commands } from '../index.js';
import { getInventory, hasProfile, initProfile } from '../database/functions.js';
import { AutocompleteInteraction, ChannelType, CommandInteraction, InteractionType } from 'discord.js';
import type { Command } from '../game/classes/Command.js';
import * as boxes from '../game/lootboxes.js';
import * as lootItems from '../game/loot.js';

export default {
    name: 'interactionCreate',
    once: false,
    async execute(interaction: CommandInteraction | AutocompleteInteraction) {

        if (interaction.type === InteractionType.ApplicationCommandAutocomplete) {
            const focusedValue = interaction.options.getFocused();
            const inventory = await getInventory(interaction.user.id);
            const lootboxes = Object.values(boxes);
            const loots = Object.values(lootItems);
            let choices;
            const useTypes = ['booster', 'token'];
            if(interaction.commandName === 'use') choices = inventory.filter(x => useTypes.includes(x.type!)).map(x => x.name);
            if(interaction.commandName === 'open') choices = inventory.filter(x => x.type === 'lootbox').map(x => x.name);
            if(interaction.commandName === 'shop') choices = lootboxes.map(x => `1x ${x.name} $${x.price}`);
            if(interaction.commandName === 'search') {
                const type = interaction.options.getString('type')!;
                if(type === 'lootbox') choices = lootboxes.map(x => x.name);
                else choices = loots.map(x => x.name);
            }

            if(interaction.commandName === 'configuration') {
                choices = interaction.guild?.channels.cache.filter(x => x.type === ChannelType.GuildText).map(x => ({name: `${x.parent?.name}/${x.name}`, value: x.id}));
                choices!.push({name: 'Current', value: 'current'});
                const filtered = choices?.filter(choice => choice.name.toLowerCase().startsWith(focusedValue.toLowerCase())).slice(0, 25);
                return await interaction.respond(filtered?.map(choice => ({ name: choice.name, value: choice.value }))!);
            }

            const filtered = choices?.filter(choice => choice.toLowerCase().startsWith(focusedValue.toLowerCase())).slice(0, 25);
            await interaction.respond(filtered?.map(choice => ({ name: choice, value: choice }))!);
        }

        if (interaction.type !== InteractionType.ApplicationCommand) return;

        const { user } = interaction;

        if (user.bot) return;
        if (!(await hasProfile(user.id))) await initProfile(user.id);

        const command: Command | undefined = commands.get(interaction.commandName);
        if (!command) return;
        const level = permlevel(interaction);
        if (level < command.permLevel) {
            return await interaction.reply({
                content: `This command can only be used by level ${command.permLevel} users.`,
                ephemeral: true,
            });
        }

        if (!interaction.inGuild()) {
            return interaction.reply({
                content: `Commands can only be used inside servers!`,
                ephemeral: true,
            });
        }

        try {
            return command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true,
            });
        }
    },
};
