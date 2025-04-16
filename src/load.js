import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import data from './commands.json' with { type: 'json' };
import dotenv from 'dotenv';
dotenv.config();

const clientId = '1260737627947143208';
const guildId = '1262391269275996252';

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

(async () => {
	try {
		console.log(`📝 Refreshing ${data.length} commands...`);

		const cmds = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: data }
		);

		console.log(`📝 Refreshed ${cmds.length} commands!`);
	} catch (err) {
		console.error(err);
		console.log('⚠️ Oops! Something went wrong, please try again!');
	}
})();
