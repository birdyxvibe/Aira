import fs from 'fs';
import path from 'path';

import * as utilities from './commands/utilities/'

export const run = async(client, command, args) => {
    const category = command.category;
    const commandname = command.name;

    const commandPath = path.join(__dirname, 'commands', category, `${commandname}.js`);

    if(!fs.existsSync(commandPath)){
        return args.interaction.reply(`\`ErrorCode: \`\`**1-404**\`> \`❌\` Could not find a command in directory \`${commandPath}\`.`)
    }

    try {
        const commandMudle = await import(commandPath);

        if(typeof commandModule.execute !== 'function'){
            return args.interaction.reply(`\`ErrorCode: \`\`**1-404**\`> \`❌\` Could not find an executable path command in directory \`${commandPath}\`.`)
        }

        await commandModule.execute(client, args);
    } catch(e) {
        return args.interaction.reply(`\`ErrorCode: \`\`**1-404**\`> \`❌\` Something went wrong while locating \`${commandPath}\`.`)
    }
}