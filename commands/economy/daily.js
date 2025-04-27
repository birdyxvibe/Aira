import { EmbedBuilder } from 'discord.js';
import { PrismaClient} from '@prisma/client';

export const execute = async (client, interaction) => {
	const prisma = new PrismaClient();
	const user = await prisma.user.findUnique({
		where: { discordId: interaction.user.id }
	});

};
