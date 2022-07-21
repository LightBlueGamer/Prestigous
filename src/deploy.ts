import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import { __dirname } from './index.js';
import { config } from '../config.js';

const { guildId } = config;

import 'dotenv/config';
const token: string = process.env.DISCORD_TOKEN!;
const clientId: string = process.env!.CLIENT_ID!;

import { commandFiles } from './index.js';
import { Command } from './game/classes/Command.js';

const commands: Command.Data[] = [];
const development: Command.Data[] = [];

for (const file of commandFiles) {
	const command: Command = (await import(`./commands/${file}`)).default;
	if (command.devCmd) development.push(command.data);
	else commands.push(command.data);
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		await rest.put(Routes.applicationCommands(clientId), { body: commands });
		await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: development });
		console.log(`Commands have been registered.`);
	} catch (error) {
		console.error(error);
	}
})();
