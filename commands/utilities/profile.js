import { EmbedBuilder } from 'discord.js';
import * as userDatabase from '#database/user.js';

/**
 * Profile Command - Displays Profile Information
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').ChatInputCommandInteraction | import('discord.js').ButtonInteraction} interaction
 */
export const execute = async (client, interaction) => {

	const userData = await userDatabase.getUser(interaction.user.id);

	const profileEmbed = new EmbedBuilder()
		.setColor('#6691C2')
		.setTitle(`\`ID-${userData.id}\` ${interaction.user.username}`)
		.setDescription(`Coins: ${userData.Coins}`)
		.setThumbnail(interaction.user.displayAvatarURL());

	interaction.reply({ embeds: [profileEmbed] });
};
