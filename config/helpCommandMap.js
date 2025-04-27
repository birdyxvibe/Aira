export default {
	'home': {
		button: null,
		color: '#7C9AEE',
		title: '`❓` Command Information',
		description: 'For further information on a command, select the command\'s corresponding category below.',
		fields: [
			{ name: '`⚙️` Utilities', value: '`ping` `help`'}	
		]
	},
	'utilities': {
		button: null,
		color: '#4C5460',
		title: '`⚙️` Utilities Information',
		description: 'Below is information on the **utilities** commands.',
		fields: [
			{ name: '`❓` help', value: '> View this help menu', inline: true},
			{ name: '`📶` ping', value: '> View the application\'s latency', inline: true}
		]
	},
};
