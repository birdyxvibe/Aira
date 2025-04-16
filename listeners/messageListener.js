
const messageListener = async (client, message) => {

	if (message.author.bot) { return; }
    
	if (message.content.includes('<@1260737627947143208>')) {
		return message.reply('> `👋` Hi! I\'m Aira! You can access all my features by using the `/help` command!\n> `❓` If you require assistance, you may utilize `/support` to get help!');
	}

};

export default messageListener;