import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { getProfile, setGuildConfig } from "../database/functions";
import { hasPermission } from "../modules/functions";

export default {
    devCmd: false,
    permLevel: 0,
    data: new SlashCommandBuilder()
        .setName('configuration')
        .setDescription('Configuration for the server.')
        .addStringOption((option) => option
            .setName('config')
            .setDescription('The configuration to change.')
            .setRequired(true)
            .addChoices({ name: 'Level up messages', value: 'level' }, { name: 'Random rewards', value: 'reward' })
        ).addStringOption((option) => option
            .setName('channel')
            .setDescription('The channel to send notifications to. ("current" will send to the channel where the event triggered)')
            .setRequired(true)
            .setAutocomplete(true)
        )
        .toJSON(),
    async execute(interaction: ChatInputCommandInteraction) {
        const { guild, options, user } = interaction;
        const ping = (await getProfile(user.id)).ping;
        if(hasPermission((await guild?.members.fetch(user.id))!.permissions, 'Administrator')) {
            return interaction.reply({
                content: `You don't have permission to use this command.`,
                allowedMentions: {
                    repliedUser: ping,
                },
            });
        }
        
        const config = options.getString('config')!;
        const channel = options.getString('channel')!;
        await setGuildConfig(guild!.id!, channel, config);
        return interaction.reply({
            content: `${config === 'level' ? 'Level up' : 'Random reward'} notifications will now be sent to ${channel === 'current' ? 'the channel where the event triggered' : `<#${channel}>`}`,
            allowedMentions: {
                repliedUser: ping,
            },
        });
    }
}