import { run } from '#helpers/commandHelper.js';

const interactionListener = async (client, interaction) => {
	if (!interaction.isCommand()) { return; }
	run(client, interaction.commandName, interaction);
};

export default interactionListener;
