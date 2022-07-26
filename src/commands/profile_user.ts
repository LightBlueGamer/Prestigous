import { EmbedBuilder, UserContextMenuCommandInteraction } from 'discord.js';
import { client } from '..';
import { getProfile, hasBooster } from '../database/functions';

export default {
    devCmd: false,
    permLevel: 0,
    data: {
        name: 'check user profile',
        type: 2,
    },
    async execute(interaction: UserContextMenuCommandInteraction) {
        const user = await client.users.fetch(interaction.targetId);
        const profile = await getProfile(user.id);
        const joined = Math.round(profile.joined.getTime() / 1000);
        const xpBoost = await hasBooster(user.id, 'exp') ? `2x XP expires <t:${Math.round(profile.xpBoost.getTime() / 1000)}:R>` : "You don't have a active XP Boost.";
        const moneyBoost = await hasBooster(user.id, 'money') ? `2x Money expires <t:${Math.round(profile.moneyBoost.getTime() / 1000)}:R>` : "You don't have a active Money Boost.";
        const embed = new EmbedBuilder()
            .setTitle(user.tag)
            .setDescription(
                `Member since <t:${joined}:F> <t:${joined}:R>\nBuddy: ${profile?.buddy?.name ? profile.buddy.name : "You don't have a buddy!"}\n${
                    profile?.badges?.length > 5 ? `You have ${profile.badges.length} badges!` : `${profile.badges.map((x) => x.icon).join(' | ')}`
                }`,
            )
            .addFields([
                { name: 'Prestige', value: `${profile.prestige}`, inline: true },
                { name: 'Level', value: `${profile.level}`, inline: true },
                { name: 'Experience', value: `${profile.xp}`, inline: true },
                { name: 'Money', value: `${profile.money}`, inline: true },
                { name: 'Prestigious Coins', value: `${profile.pCoins}`, inline: true },
                { name: 'Boosters', value: `${xpBoost}\n${moneyBoost}`, inline: true },
            ])
            .setColor('Random');

        interaction.reply({ embeds: [embed] });
    },
};
