import type { Guild } from "discord.js";
import { initConfig } from "../database/functions";

export default {
    name: 'guildCreate',
    once: false,
    async execute(guild: Guild) {
        initConfig(guild.id);
    }
}