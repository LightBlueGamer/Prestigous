import type { UserContextMenuCommandInteraction } from 'discord.js';
import { client } from '..';
import { getProfile, togglePing } from '../database/functions';

export default {
    devCmd: false,
    permLevel: 0,
    data: {
        name: 'toggle bot pings',
        type: 2,
    },
    async execute(interaction: UserContextMenuCommandInteraction) {
        const user = await client.users.fetch(interaction.targetId);
        if(user.id !== interaction.user.id) {
            return interaction.reply({
                content: `You may only toggle your own pings.`,
            })
        }
        
        await togglePing(user.id);
        const profile = await getProfile(user.id);
        return interaction.reply({
            content: `You have toggled your bot pings ${profile.ping === true ? 'on' : 'off'}.`,
        })
    },
};
