import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { getProfile } from "../database/functions";
import { dailyReward } from "../modules/functions";

export default {
  devCmd: false,
  permLevel: 0,
  data: new SlashCommandBuilder()
    .setName("daily")
    .setDescription("Collect your daily rewards.")
    .toJSON(),
  async execute(interaction: ChatInputCommandInteraction) {
    const user = interaction.user;
    const profile = await getProfile(user.id);
    const expired = profile.daily.getTime() - Date.now() <= 0;

    if(expired) {
        const  { xp, money } = await dailyReward(user.id);
        return interaction.reply({
            content: `You collected your daily rewards! You received ${xp} XP and ${money} money and 1 lootbox.`,
            allowedMentions: {
                repliedUser: profile.ping,
            }
        })
    } else {
        return interaction.reply(
          `You can open your next daily crate <t:${Math.floor(
            profile.daily.getTime() / 1000
          )}:R>!`
        );
    }
  }
}