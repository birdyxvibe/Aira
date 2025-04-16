import { EmbedBuilder } from 'discord.js';
import { getUser, createUser } from '#database/user.js';

/**
 * ID command — Returns your User's ID in the Database
 * @param {Client} client
 * @param {Interaction} interaction
 */

export const execute = async (client, interaction) => {

	let user = await getUser(interaction.user.id);

	const idEmbed = new EmbedBuilder()
		.setColor('#7A7A7A')
		.setDescription(`Your **ID** is ${user.id}, you have ${user.Coins} Coins!`);

	interaction.reply({ embeds: [idEmbed] });
};
