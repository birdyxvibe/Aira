/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `discordId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[DiscordId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `DiscordId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."User_discordId_key";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "createdAt",
DROP COLUMN "discordId",
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "DailyIncomeNext" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "DailyStreak" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "DiscordId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_DiscordId_key" ON "public"."User"("DiscordId");
