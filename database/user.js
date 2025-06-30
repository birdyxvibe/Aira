import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getUser = async (discordId) => {
	let user =  await prisma.user.findUnique({ 
		where: { discordId } 
	});
	
	if (!user) {
		user = await createUser(discordId);
	}

	return user;
};

const createUser = async (discordId) => {
	return await prisma.user.create({
		data: { discordId }
	});
};

const updateUser = async (discordId, data) => {
	return await prisma.user.update({
		where: { discordId },
		data: data,
	});
};

export default { getUser, createUser, updateUser };
