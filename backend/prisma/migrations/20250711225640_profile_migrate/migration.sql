/*
  Warnings:

  - You are about to drop the column `Postcode` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `phone` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postcode` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "Postcode",
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "postcode" TEXT NOT NULL;
