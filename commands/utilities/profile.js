import { EmbedBuilder } from 'discord.js';
import user from '#database/user';

/**
 * Ping command — checks bot latency.
 * @param {Client} client
 * @param {Interaction} interaction
 */
export const execute = async (client, interaction) => {

	const userData = user.getUser(interaction.user.id);

	const profileEmbed = new EmbedBuilder()
		.setColor('#6691C2')
		.setTitle(`\`ID-${userData.id}\` ${interaction.user.username}`)
		.setThumbnail(interaction.user.displayAvatarURL());

	interaction.reply({ embeds: [profileEmbed] });
};
