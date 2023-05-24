/*
  Warnings:

  - You are about to drop the column `page` on the `Book` table. All the data in the column will be lost.
  - Added the required column `pages` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "page",
ADD COLUMN     "pages" INTEGER NOT NULL;
