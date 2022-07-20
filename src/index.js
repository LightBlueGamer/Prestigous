import { Client, GatewayIntentBits, Collection } from "discord.js";
import { readdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
  ],
});

const eventFiles = readdirSync(`${__dirname}/events`).filter((x) =>
  x.endsWith(".js")
);
export const commandFiles = readdirSync(`${__dirname}/commands`).filter((x) =>
  x.endsWith("js")
);

export const events = new Collection();
export const commands = new Collection();

(async () => {
  for (const file of commandFiles) {
    const command = (await import(`./commands/${file}`)).default;
    commands.set(command.data.name, command);
  }
  for (const file of eventFiles) {
    const event = (await import(`./events/${file}`)).default;
    events.set(event.name, event);
    if (event.once)
      client.once(event.name, (...args) => event.execute(...args));
    else client.on(event.name, (...args) => event.execute(...args));
  }
})();

import "dotenv/config";
client.login(process.env.DISCORD_TOKEN);
