/*
  Warnings:

  - You are about to drop the column `Banner` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the `Profiles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `banner` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profiles" DROP CONSTRAINT "Profiles_userId_fkey";

-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "Banner",
ADD COLUMN     "banner" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "job" TEXT NOT NULL,
ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "Profiles";

-- CreateTable
CREATE TABLE "Tecnologies" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Tecnologies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tecnologies" ADD CONSTRAINT "Tecnologies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
