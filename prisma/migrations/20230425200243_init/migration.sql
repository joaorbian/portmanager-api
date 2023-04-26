-- AlterTable
ALTER TABLE "languages" ADD COLUMN     "icon" TEXT;

-- CreateTable
CREATE TABLE "users_has_language" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,

    CONSTRAINT "users_has_language_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_has_language" ADD CONSTRAINT "users_has_language_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_has_language" ADD CONSTRAINT "users_has_language_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
