import { run } from '#helpers/commandHelper.js';

const interactionListener = async (client, interaction) => {
	if (!interaction.isCommand()) { return; }
	run(client, interaction);
};

export default interactionListener;
