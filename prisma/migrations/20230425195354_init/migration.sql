/*
  Warnings:

  - You are about to drop the column `language` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `projects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tecnologies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_user_id_fkey";

-- DropForeignKey
ALTER TABLE "tecnologies" DROP CONSTRAINT "tecnologies_user_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "language";

-- DropTable
DROP TABLE "projects";

-- DropTable
DROP TABLE "tecnologies";

-- CreateTable
CREATE TABLE "languages" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technologies" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "icon" TEXT,
    "name" TEXT,

    CONSTRAINT "technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_has_technologies" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "tecnology_id" INTEGER NOT NULL,

    CONSTRAINT "users_has_technologies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_has_technologies" ADD CONSTRAINT "users_has_technologies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_has_technologies" ADD CONSTRAINT "users_has_technologies_tecnology_id_fkey" FOREIGN KEY ("tecnology_id") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
