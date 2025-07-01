import { EmbedBuilder } from 'discord.js';
import user from '#database/user.js';

export const execute = async (client, interaction) => {
	
	const userData = await user.getUser(interaction.user.id);
	
	if (userData.nextDaily.getTime() > Date.now()) {
		const onCooldownResponse = new EmbedBuilder()
			.setColor('#ebf86c')
			.setTitle('`⏳` *Command on Cooldown*')
			.setDescription(`This command is currently on cooldown.\nYou may use it again <t:${Math.floor(userData.nextDaily.getTime()/1000)}:R>`);

		return interaction.reply({ embeds: [onCooldownResponse] });
	}

	const dailyReward = Math.floor(Math.random()*21)+5; //generate number between 5 and 25
	const successResponse = new EmbedBuilder()
		.setColor('#3aed3d')
		.setTitle('`📅` Daily Income Claimed!')
		.setDescription(`You have claimed your daily income of ${dailyReward}\`🪙\``);

	await user.updateUser(interaction.user.id, { 
		Coins: { increment: dailyReward },
		nextDaily: new Date(Date.now() + 86400000)
	});
	return interaction.reply({ embeds: [successResponse] });
};
