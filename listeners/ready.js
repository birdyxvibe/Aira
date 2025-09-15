import { ActivityType } from 'discord.js';

export const start = (client) => {
	console.log('🔥 Aira has started!');
	client.user.setPresence({
		activities: [{ name: 'Searching for Bugs!', type: ActivityType.Custom }],
		status: 'dnd',
	});
};
