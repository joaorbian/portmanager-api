/*
  Warnings:

  - You are about to drop the column `tecnology_id` on the `users_has_technologies` table. All the data in the column will be lost.
  - Added the required column `technology_id` to the `users_has_technologies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users_has_technologies" DROP CONSTRAINT "users_has_technologies_tecnology_id_fkey";

-- AlterTable
ALTER TABLE "users_has_technologies" DROP COLUMN "tecnology_id",
ADD COLUMN     "technology_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "users_has_technologies" ADD CONSTRAINT "users_has_technologies_technology_id_fkey" FOREIGN KEY ("technology_id") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
