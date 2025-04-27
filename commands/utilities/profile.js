import { EmbedBuilder } from 'discord.js';
import { PrismaClient } from '@prisma/client';

/**
 * Ping command — checks bot latency.
 * @param {Client} client
 * @param {Interaction} interaction
 */
export const execute = async (client, interaction) => {

	const prisma = new PrismaClient();
	const user = await prisma.user.findUnique({
		where: { discordId: interaction.user.id }
	});

	const profileEmbed = new EmbedBuilder()
		.setColor('#6691C2')
		.setTitle(`\`ID-${user.id}\` ${interaction.user.username}`)
		.setThumbnail(interaction.user.displayAvatarURL());

	interaction.reply({ embeds: [profileEmbed] });
};
