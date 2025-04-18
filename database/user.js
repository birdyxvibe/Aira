import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUser = async (discordId) => {
	let user =  await prisma.user.findUnique({ 
		where: { discordId } 
	});
	
	if (!user) {
		user = await createUser(discordId);
	}

	return user;
};

export const createUser = async (discordId) => {
	return await prisma.user.create({
		data: { discordId }
	});
};
