import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } from 'discord.js';
import commandMap from '#config/helpCommandMap.js';

/**
 * Help command — check active commands
 * @param {Client} client
 * @param {Interaction} interaction
 */
export const execute = async (client, interaction) => {
	const HelpEmbed = new EmbedBuilder()
		.setColor('#7C9AEE')
		.setTitle('`❓` Command Information')
		.setDescription('For further information on a command, select the command\'s corresponding category below.')
		.addFields([
			{ name: '`⚙️` Utilities', value: '`ping` `help`'}
		])
		.setFooter({ text: '⏳ This prompt will expire in 30 seconds.' });

	const helpHOMEbutton = new ButtonBuilder()
		.setCustomId('help-home')
		.setDisabled(true)
		.setEmoji('🏠')
		.setLabel('Home')
		.setStyle(ButtonStyle.Primary);
	
	const helpECONOMYbutton = new ButtonBuilder()
		.setCustomId('help-economy')
		.setDisabled(false)
		.setEmoji('💸')
		.setLabel('Economy')
		.setStyle(ButtonStyle.Success);

	const helpUTILITIESbutton = new ButtonBuilder()
		.setCustomId('help-utilities')
		.setDisabled(false)
		.setEmoji('⚙️')
		.setLabel('Utilities')
		.setStyle(ButtonStyle.Secondary);

	commandMap.home.button = helpHOMEbutton;
	commandMap.utilities.button = helpUTILITIESbutton;
	commandMap.economy.button = helpECONOMYbutton;

	let lastPageButton = helpHOMEbutton;

	const CategoriesRow = new ActionRowBuilder()
		.addComponents([helpHOMEbutton, helpECONOMYbutton, helpUTILITIESbutton]);

	const interactionResponse = await interaction.reply({ embeds: [HelpEmbed], components: [CategoriesRow] });

	const filter = itr => {
		const result = interaction.user === itr.user;
		if (!result) {
			itr.reply({ ephemeral: true, content: '`This is not your message! Use /help to generate it!`' });
		}
		return result;
	};

	const buttonCollector = interactionResponse.createMessageComponentCollector({ componentType: ComponentType.Button, time: 30_000, filter: filter });

	buttonCollector.on('collect', async itr => {
		await itr.deferUpdate();
		lastPageButton.setDisabled(false);

		const pageData = commandMap[itr.customId.slice(5)];

		const newEmbed = new EmbedBuilder()
			.setColor(pageData.color)
			.setTitle(pageData.title)
			.setDescription(pageData.description)
			.addFields(pageData.fields)
			.setFooter({ text: '⏳ This prompt will expire in 30 seconds.' });

		lastPageButton = pageData.button;
		lastPageButton.setDisabled(true);

		interaction.editReply({ embeds: [newEmbed], components: [CategoriesRow] });

		buttonCollector.resetTimer();
	});

	buttonCollector.on('end', async (collected) => {
		const message = await interaction.fetchReply();
		message.embeds[0].data.footer.text = '⌛ This prompt has expired.';
		interaction.editReply({ embeds: [message.embeds[0]], components: [] });
	});
};
