/*
  Warnings:

  - You are about to drop the column `userId` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `tecnologies` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `tecnologies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `tecnologies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_userId_fkey";

-- DropForeignKey
ALTER TABLE "tecnologies" DROP CONSTRAINT "tecnologies_userId_fkey";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tecnologies" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "projects_user_id_key" ON "projects"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "tecnologies_user_id_key" ON "tecnologies"("user_id");

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnologies" ADD CONSTRAINT "tecnologies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
