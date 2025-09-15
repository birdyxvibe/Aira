import { run } from '#helpers/commandHelper.js';

export const interactionListener = async (client, interaction) => {
	if (!interaction.isCommand()) { return; }
	run(client, interaction.commandName, interaction);
};
