import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL  } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const run = async(client, command, interaction) => {
	const category = command.category;
	const commandName = command.name;

	const commandPath = path.join(__dirname, '..', 'commands', category, `${commandName}.js`);

	if (!fs.existsSync(commandPath)) {
		return interaction.reply(`**Error Code:** \`404\`\n> \`❌\` Could not find a command by the name of **${commandName}** in the **${category}** directory`);
	}

	try {
		const commandUrl = pathToFileURL(commandPath);
		const commandModule = await import(commandUrl);

		if (typeof commandModule.execute !== 'function') {
			return interaction.reply(`**Error Code:** \`404\`\n> \`❌\` Could not find an execute function in **${commandName}** in the **${category}** directory`);
		}

		await commandModule.execute(client, interaction);
	} catch (e) {
		console.error(e);
		return interaction.reply(`**Error Code:** \`500\`\n> \`❌\` Something went wrong while executing **\`${category}/${commandName}\`**`);
	}
};
