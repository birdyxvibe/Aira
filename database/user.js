const prisma = require('@prisma/client')

async function getUser(discordId) {
    return await prisma.user.findUnique({ where: { discordId } });
}

async function createUser(user){
    
}