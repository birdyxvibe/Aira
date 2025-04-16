import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import interactionListener from '#listeners/interactionListener.js';
import messageListener from '#listeners/messageListener.js';
import start from '#listeners/ready.js'

// Setup Dependencies
dotenv.config();
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.once('ready', () => start(client))

client.on('messageCreate', (message) => messageListener(client, message));
client.on('interactionCreate', (interaction) => interactionListener(client, interaction));

client.login(process.env.BOT_TOKEN);
