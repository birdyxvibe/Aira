import { run } from '#helpers/commandHelper.js';

const interactionListener = async (client, interaction) => {
	if (!interaction.isCommand()) { return; }

	switch (interaction.commandName) {
	case 'ping':
	case 'id':
		run(client, { name: interaction.commandName, category: 'utilities' }, interaction);
		break;
	}

};

export default interactionListener;
