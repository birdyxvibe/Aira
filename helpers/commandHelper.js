import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL  } from 'url';
import commands from '#config/commands.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const run = async(client, command, interaction) => {
	const commandInfo = commands[command];
	const commandName = commandInfo.name;
	const commandCategory = commandInfo.category;

	const commandPath = path.join(__dirname, '..', 'commands', commandCategory, `${commandName}.js`);

	if (!fs.existsSync(commandPath)) {
		return interaction.reply(`**Error Code:** \`404\`\n> \`❌\` Could not find a command by the name of **${commandName}** in the **${commandCategory}** directory`);
	}

	try {
		const commandUrl = pathToFileURL(commandPath);
		const commandModule = await import(commandUrl.toString());

		if (typeof commandModule.execute !== 'function') {
			return interaction.reply(`**Error Code:** \`404\`\n> \`❌\` Could not find an execute function in **${commandName}** in the **${commandCategory}** directory`);
		}

		await commandModule.execute(client, interaction);
	} catch (e) {
		console.error(e);
		return interaction.reply(`**Error Code:** \`500\`\n> \`❌\` Something went wrong while executing **\`${commandCategory}/${commandName}\`**`);
	}
};
