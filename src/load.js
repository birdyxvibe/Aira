import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import data from './commands.js';
import dotenv from 'dotenv';
dotenv.config();

const clientId = process.env.clientID;
const guildId = process.env.guildID ?? null;

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

(async () => {
	try {
		console.log(`📝 Refreshing ${data.length} commands...`);

		let cmds;
		if (guildId) {
			cmds = await rest.put(
				Routes.applicationGuildCommands(clientId, guildId),
				{ body: data }
			);
		} else {
			cmds = await rest.put(
				Routes.applicationCommands(clientId),
				{ body: data }
			);
		}

		//@ts-ignore
		console.log(`📝 Refreshed ${cmds.length} ${guildId ? 'GUILD' : 'CLIENT'} commands!`);
		
	} catch (err) {
		console.error(err);
		console.log('⚠️ Oops! Something went wrong, please try again!');
	}
})();
