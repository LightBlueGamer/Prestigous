import { permlevel } from '../modules/functions.js';
import { commands } from '../index.js';
import { getInventory, hasProfile, initProfile } from '../database/functions.js';
import { AutocompleteInteraction, CommandInteraction, InteractionType } from 'discord.js';
import type { Command } from '../game/classes/Command.js';

export default {
    name: 'interactionCreate',
    once: false,
    async execute(interaction: CommandInteraction | AutocompleteInteraction) {

        if (interaction.type === InteractionType.ApplicationCommandAutocomplete) {
            const focusedValue = interaction.options.getFocused();
            const inventory = await getInventory(interaction.user.id);
            let choices;
            if(interaction.commandName === 'use') choices = inventory.map(x => x.name);
            if(interaction.commandName === 'open') choices = inventory.filter(x => x.type === 'lootbox').map(x => x.name);

            const filtered = choices?.filter(choice => choice.startsWith(focusedValue));
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
