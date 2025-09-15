import { EmbedBuilder } from 'discord.js';
import * as userDatabase from '#database/user.js';

/**
 * Daily Command - Returns daily income
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').ChatInputCommandInteraction | import('discord.js').ButtonInteraction} interaction
 */
export const execute = async (client, interaction) => {
	
	const user = await userDatabase.getUser(interaction.user.id);
	
	const dailyIncomeNext = user.DailyIncomeNext.getTime();
	if (dailyIncomeNext > Date.now()) {
		const onCooldownEmbed = new EmbedBuilder()
			.setColor('#d48e85')
			.setTitle('`⏳` Command on Cooldown')
			.setDescription(`Your daily income is on cooldown!\n> You may claim it again <t:${Math.floor(dailyIncomeNext/1000)}:R>!`);

		return interaction.reply({ embeds: [onCooldownEmbed] });
	}

	let effectiveStreak;
	if (dailyIncomeNext + 24*60*60*1000 < Date.now()) {
		effectiveStreak = 1;
	} else {
		effectiveStreak = user.DailyStreak+1;
	}

	let coinIncome = Math.floor(Math.random()*11)+5; // Generate 5-15 Coins for Income

	const dailyIncomeEmbed = new EmbedBuilder()
		.setColor([0, Math.floor(Math.random()*100)+120, 0])
		.setTitle('`🗓️` Daily Income Claimed')
		.setDescription(`You have claimed your daily income of **${coinIncome} coins**!\nYour streak is now **${effectiveStreak} days**!`);

	// Chance to increase income, scaling with current streak.
	const aditionalIncomeChance = Math.min(effectiveStreak, 30);
	const CHANCE_AT_CAP = 0.9;
	if (Math.random()*CHANCE_AT_CAP < aditionalIncomeChance/30) { 
		const bonusIncome = Math.floor(Math.random()*5)+1;
		coinIncome += bonusIncome;
		dailyIncomeEmbed.addFields({ name: '`🪙` Bonus Coins', value: `Your streak helped you earn **${bonusIncome} additional coins**!` });
		dailyIncomeEmbed.setFooter({ text: `You earned a total of ${coinIncome} coins!` });
	}
	
	interaction.reply({ embeds: [dailyIncomeEmbed] });

	await userDatabase.updateUser(interaction.user.id, { 
		Coins: { increment: coinIncome },
		DailyIncomeNext: new Date(Date.now() + 5*1000),
		DailyStreak: effectiveStreak
	});

};
