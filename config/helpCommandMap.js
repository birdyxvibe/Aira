// Maps out all commands to be displayed in the `/help` command. 
export default {
	'home': {
		button: null,
		color: '#7C9AEE',
		title: '`❓` Command Information',
		description: 'For further information on a command, select the command\'s corresponding category below.',
		fields: [
			{ name: '`⚙️` Utilities', value: '`ping` `help` `profile`'},
			{ name: '`⚙️` Utilities', value: '`ping` `help` `profile`'},
		]
	},
	'utilities': {
		button: null,
		color: '#4C5460',
		title: '`⚙️` Utilities Information',
		description: 'Below is information on the **utilities** commands.',
		fields: [
			{ name: '`❓` help', value: '> View this help menu', inline: true },
			{ name: '`📶` ping', value: '> View the application\'s latency', inline: true }
		]
	},
	'economy': {
		button: null,
		color: '#',
		title: '`💸` Economy Information',
		description: 'Below is information on the **economy** commands.',
		fields: [
			{ name: '`📆` daily', value: '> Claim your daily income', inline: true },
		]
	}
};
