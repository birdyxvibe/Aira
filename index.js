import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client';
import pkg from 'discord.js';
import { run } from './helpers/commandLoader.js'

// Setup Dependencies
dotenv.config()
const prisma = new PrismaClient();
const { Client, GatewayIntentBits, ActivityType } = pkg;
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
})

// Startup Script
client.once('ready', async () => {
    await console.log('🔥 Aira has started!')
    client.user.setPresence({
        activities: [{ name: 'Searching for Bugs!', type: ActivityType.Custom }],
        status: 'dnd',
    })
})

// Message Create
client.on('messageCreate', async message => {
    if(message.user.bot) return;
    
    if(message.content.includes('<@1260737627947143208>')){
        return message.reply('> `👋` Hi! I\'m Aira! You can access all my features by using the `/help` command!\n> `❓` If you require assistance, you may utilize `/support` to get help!')
    }
})

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;
    switch(interaction.commandName){
        case 'ping':
            await run(client, { name: 'ping', category: 'utilities' }, { interaction })
    }
})

client.login(process.env.BOT_TOKEN)