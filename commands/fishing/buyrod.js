import { EmbedBuilder } from 'discord.js';
import user from '#database/user.js';
import fishingUser from '#database/fishinguser.js';

export const execute = async (client, interaction) => {
	
	const userData = await user.getUser(interaction.user.id);
	const fishingData = await fishingUser.getUser(interaction.user.id);
	
	const selectedRod = interaction.options.getString('rod') ?? null;

	if (selectedRod === null) {
		const fishingRodShopEmbed = new EmbedBuilder()
			.setColor('#44ddf8')
			.setTitle('`🎣` *Fishing Rod Shop*')
			.setDescription('Below are the available rods for purchase, their prices, and their specifications')
			.addFields([
				{ name: '`🌿` Twig Rod', value: '* 50 Uses \n * 0% Chance to Skip Bait\n`💰` **25 Coins**', inline: true },
				{ name: `${locked(5, fishingData)}\`🪵\` Reinforced Rod`, value: '* 250 Uses \n * 5% Chance to Skip Bait\n* Level 5\n`💰` **100 Coins**', inline: true },
				{ name: `${locked(15, fishingData)}\`⚙️\` Composite Rod`, value: '* 675 Uses \n * 10% Chance to Skip Bait\n* Level 15\n`💰` **250 Coins**', inline: true },
				{ name: `${locked(30, fishingData)}\`🧲\` Titanium Rod`, value: '* 999 Uses \n * 20% Chance to Skip Bait\n* Level 30\n`💰` **375 Coins**', inline: true },
				{ name: `${locked(50, fishingData)}\`✨\` Ethereal Rod`, value: '* 1500 Uses \n * 30% Chance to Skip Bait\n* Level 50\n`💰` **500 Coins**', inline: true },
				{ name: `${locked(75, fishingData)}\`👻\` Phantom Rod`, value: '* 2650 Uses \n * 40% Chance to Skip Bait\n* Level 75\n`💰` **750 Coins**', inline: true },
				{ name: `${locked(100, fishingData)}\`🌌\` Stellar Rod`, value: '* 5000 Uses \n * 50% Chance to Skip Bait\n* Level 100\n`💰` **1250 Coins**', inline: true },
			]);

		return interaction.reply({ embeds: [fishingRodShopEmbed] });
	}
	
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

function locked(lv, data) {
	const level = data.level;
	if (level >= lv) { return ''; };
	return '🔒';
}
