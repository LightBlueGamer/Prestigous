import { permlevel } from '../modules/functions.js';
import { commands } from '../index.js';
import { hasProfile, initProfile } from '../database/functions.js';
import { InteractionType } from 'discord.js';
import type { Command } from '../game/classes/Command.js';

export default {
    name: 'interactionCreate',
    once: false,
    async execute(interaction) {
        if (interaction.type === InteractionType.MessageComponent) return;

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
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true,
            });
        }
    },
};
