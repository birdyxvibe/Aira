import { EmbedBuilder } from 'discord.js';
import { getUser, updateUser } from '#database/user';

export const execute = async (client, interaction) => {
	
	const user = await getUser(interaction.user.id);
	
	if (user.nextDaily.getTime() > Date.now()) {
		const onCooldownEmbed = new EmbedBuilder()
			.setColor('#d48e85')
			.setTitle('`⏳` Command on Cooldown')
			.setDescription(`Your daily income is on cooldown!\n> You may claim it again <t:${Math.floor(user.nextDaily.getTime/1000)}:R:>!`);

		return interaction.reply({ embeds: [onCooldownEmbed] });
	}

	await updateUser(interaction.user.id, { 
		Coins: { increment: 10 },
		nextDaily: new Date(Date.now() + 86400000)
	});

};
