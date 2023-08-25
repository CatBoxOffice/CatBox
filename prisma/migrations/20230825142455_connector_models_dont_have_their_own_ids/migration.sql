/*
  Warnings:

  - The primary key for the `Movies_Genres` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Movies_Genres` table. All the data in the column will be lost.
  - The primary key for the `Review_Tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Review_Tags` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[movieId]` on the table `Movies_Genres` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reviewId]` on the table `Review_Tags` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Movies_Genres" DROP CONSTRAINT "Movies_Genres_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "Review_Tags" DROP CONSTRAINT "Review_Tags_pkey",
DROP COLUMN "id";

-- CreateIndex
CREATE UNIQUE INDEX "Movies_Genres_movieId_key" ON "Movies_Genres"("movieId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_Tags_reviewId_key" ON "Review_Tags"("reviewId");
