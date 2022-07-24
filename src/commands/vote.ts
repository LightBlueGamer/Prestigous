import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { getProfile } from '../database/functions';

export default {
    devCmd: false,
    permLevel: 0,
    data: new SlashCommandBuilder().setName('vote').setDescription('Vote for the bot on TopGG').toJSON(),
    async execute(interaction: CommandInteraction) {
        const ping = (await getProfile(interaction.user.id)).ping;
        interaction.reply({
            content: `You can vote for the bot on TopGG here: <https://top.gg/bot/994973502975262980/vote>`,
            allowedMentions: {
                repliedUser: ping,
            },
        })
    },
};
