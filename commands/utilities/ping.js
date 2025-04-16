import { EmbedBuilder } from 'discord.js';

/**
 * Ping command — checks bot latency.
 * @param {Client} client
 * @param {Interaction} interaction
 */

export const execute = (client, interaction) => {

	const pingEmbed = new EmbedBuilder()
		.setColor('#4495DA')
		.addFields([
			{ name: '`🕹️` Application Latency', value: `> How long the client takes to respond to your request.\n\`\`\`\n${Date.now() - interaction.createdTimestamp}ms\`\`\``, inline: true},
			{ name: '`⚙️` API Latency', value: `> How long Discord's API takes to respond to requests.\n\`\`\`\n${client.ws.ping === -1 ? 'Connecting...' : client.ws.ping+'ms'}\`\`\``, inline: true}
		]);

	interaction.reply({ embeds: [pingEmbed] });
};
