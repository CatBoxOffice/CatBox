-- DropIndex
DROP INDEX "Movies_Genres_movieId_key";

-- DropIndex
DROP INDEX "Review_Tags_reviewId_key";

-- AlterTable
ALTER TABLE "Movies_Genres" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Movies_Genres_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Review_Tags" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Review_Tags_pkey" PRIMARY KEY ("id");
