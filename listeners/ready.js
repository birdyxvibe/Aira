import { ActivityType } from 'discord.js';

const start = (client) => {
	console.log('🔥 Aira has started!');
	client.user.setPresence({
		activities: [{ name: 'Searching for Bugs!', type: ActivityType.Custom }],
		status: 'dnd',
	});
};

export default start;
