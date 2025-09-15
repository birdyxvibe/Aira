// @ts-check

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * 
 * @param {string} DiscordId 
 * @returns {Promise<import('@prisma/client').User>};}
 */
const getUser = async (DiscordId) => {
	let user =  await prisma.user.findUnique({ where: { DiscordId } });

	if (!user) { user = await createUser(DiscordId); }
	
	return user;
};

const createUser = async (DiscordId) => {
	return await prisma.user.create({
		data: { DiscordId }
	});
};

/**
 * 
 * @param {string} DiscordId 
 * @param {import('@prisma/client').Prisma.UserUpdateInput} data 
 * @returns {Promise<import('@prisma/client').User>}
 */
const updateUser = async (DiscordId, data) => {
	return await prisma.user.update({
		where: { DiscordId },
		data: data,
	});
};

export { getUser, createUser, updateUser };
