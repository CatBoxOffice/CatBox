const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
const main = async () => {
  // USERS (3 reg. + 1 admin)
  const user1 = await prisma.user.create({
    data: {
      username: "Nivek",
      email: "kevin@hotmail.com",
      isAdmin: true,
      password: await bcrypt.hash("kevinpw", 10),
      avatar:
        "https://www.google.com/search?q=dog+picture&tbm=isch&ved=2ahUKEwi2v6ua0PiAAxUgFN4AHZsPB8EQ2-cCegQIABAA&oq=dog+picture&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6CwgAEIAEELEDEIMBOgcIABCKBRBDUIY4WMdTYNZXaAJwAHgAgAFniAG8CJIBBDEzLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=_gvpZLbIOaCo-LYPm5-ciAw&rlz=1C5CHFA_enUS1013US1013#imgrc=PpmCvrB3OtU3hM",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "SemaJ",
      email: "james@gmail.com",
      isAdmin: false,
      password: await bcrypt.hash("jamespw", 10),
      avatar:
        "https://www.google.com/search?q=dog+picture&tbm=isch&ved=2ahUKEwi2v6ua0PiAAxUgFN4AHZsPB8EQ2-cCegQIABAA&oq=dog+picture&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6CwgAEIAEELEDEIMBOgcIABCKBRBDUIY4WMdTYNZXaAJwAHgAgAFniAG8CJIBBDEzLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=_gvpZLbIOaCo-LYPm5-ciAw&rlz=1C5CHFA_enUS1013US1013#imgrc=PpmCvrB3OtU3hM",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      username: "Trebor",
      email: "robert@aol.com",
      isAdmin: false,
      password: await bcrypt.hash("robertpw", 10),
      avatar:
        "https://www.google.com/search?q=dog+picture&tbm=isch&ved=2ahUKEwi2v6ua0PiAAxUgFN4AHZsPB8EQ2-cCegQIABAA&oq=dog+picture&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6CwgAEIAEELEDEIMBOgcIABCKBRBDUIY4WMdTYNZXaAJwAHgAgAFniAG8CJIBBDEzLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=_gvpZLbIOaCo-LYPm5-ciAw&rlz=1C5CHFA_enUS1013US1013#imgrc=PpmCvrB3OtU3hM",
    },
  });

  const user4 = await prisma.user.create({
    data: {
      username: "Uil",
      email: "liu@yahoo.com",
      isAdmin: false,
      password: await bcrypt.hash("liupw", 10),
      avatar:
        "https://www.google.com/search?q=dog+picture&tbm=isch&ved=2ahUKEwi2v6ua0PiAAxUgFN4AHZsPB8EQ2-cCegQIABAA&oq=dog+picture&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6CwgAEIAEELEDEIMBOgcIABCKBRBDUIY4WMdTYNZXaAJwAHgAgAFniAG8CJIBBDEzLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=_gvpZLbIOaCo-LYPm5-ciAw&rlz=1C5CHFA_enUS1013US1013#imgrc=PpmCvrB3OtU3hM",
    },
  });

  //GENRES:
  const genreHorror = await prisma.genre.create({
    data: {
      name: "Horror",
    },
  });

  const genreAction = await prisma.genre.create({
    data: {
      name: "Action",
    },
  });

  const genreRomantic = await prisma.genre.create({
    data: {
      name: "Romantic",
    },
  });

  const genreComedy = await prisma.genre.create({
    data: {
      name: "Comedy",
    },
  });

  // MOVIES (5)

  const movies1 = await prisma.movie.create({
    data: {
      title: "TopGun",
      description: "A movie about pilots trying to save the country",
      year: 1986,
      rating: "PG-13",
      director: "Tony Scott",
      studio: "Paramount Pictures",
      language: "English",
    },
  });

  const movies2 = await prisma.movie.create({
    data: {
      title: "Keith",
      description: "Fantastic film that shows us the meaning of love",
      year: 2008,
      rating: "PG-13",
      director: "Rebecca Hobbs",
      studio: "No Hands Productions",
      language: "English",
    },
  });

  const movies3 = await prisma.movie.create({
    data: {
      title: "Terminal",
      description: "Tom Hanks got stuck at a terminal, and has accent",
      year: 2004,
      rating: "PG-13",
      director: "Walter F. Parkes",
      studio: "Amblin Entertainment",
      language: "English",
    },
  });

  const movies4 = await prisma.movie.create({
    data: {
      title: "Maverick",
      description: " This movie has nothing to do with Tom Cruise",
      year: 1994,
      rating: "PG-13",
      director: "Paramount Pictures",
      studio: "Richard Donner",
      language: "English",
    },
  });

  const movies5 = await prisma.movie.create({
    data: {
      title: "The Avengers",
      description:
        " It s a long movie about a team saving the planet for the fifth time",
      year: 2012,
      rating: "PG-13",
      director: "Anthony Russo",
      studio: "Marvel Studios",
      language: "English",
    },
  });

  // Movie_Genres:
  const movie1_genre = await prisma.movies_Genres.create({
    data: {
      movieId: movies1.id,
      genreId: genreAction.id,
    },
  });

  const movie5_genre = await prisma.movies_Genres.create({
    data: {
      movieId: movies5.id,
      genreId: genreAction.id,
    },
  });

  const movie5_genre2 = await prisma.movies_Genres.create({
    data: {
      movieId: movies5.id,
      genreId: genreHorror.id,
    },
  });

  const movie3_genre = await prisma.movies_Genres.create({
    data: {
      movieId: movies3.id,
      genreId: genreComedy.id,
    },
  });

  const movie2_genre = await prisma.movies_Genres.create({
    data: {
      movieId: movies2.id,
      genreId: genreRomantic.id,
    },
  });

  // TAGS:

  const tag1 = await prisma.tag.create({
    data: {
      name: "Navy",
    },
  });

  const tag2 = await prisma.tag.create({
    data: {
      name: "Love",
    },
  });

  const tag3 = await prisma.tag.create({
    data: {
      name: "Travel",
    },
  });

  const tag4 = await prisma.tag.create({
    data: {
      name: "Gambling ",
    },
  });

  const tag5 = await prisma.tag.create({
    data: {
      name: "Superhero",
    },
  });

  //REVIEWS:

  const reviews1 = await prisma.review.create({
    data: {
      userId: user1.id,
      movieId: movies5.id,
      title: "I have never cried so much in my life",
      content: "It was a beautiful movie that brought a lot of joy in my day",
    },
  });

  const reviews2 = await prisma.review.create({
    data: {
      userId: user2.id,
      movieId: movies2.id,
      title: "Best movie I have seen",
      content: "Not too short, not too long. Simply, amazing",
    },
  });

  const reviews3 = await prisma.review.create({
    data: {
      userId: user3.id,
      movieId: movies3.id,
      title: "Fun afternoon movie",
      content: "My cat very and I loved it. The Ending made both of us cry",
    },
  });

  // REVIEW_TAGS:

  const review1_tags = await prisma.review_Tags.create({
    data: {
      reviewId: reviews1.id,
      tagId: tag1.id,
    },
  });

  const review2_tags = await prisma.review_Tags.create({
    data: {
      reviewId: reviews2.id,
      tagId: tag2.id,
    },
  });

  const review3_tags = await prisma.review_Tags.create({
    data: {
      reviewId: reviews3.id,
      tagId: tag3.id,
    },
  });

  const review4_tags = await prisma.review_Tags.create({
    data: {
      reviewId: reviews2.id,
      tagId: tag4.id,
    },
  });

  const review5_tags = await prisma.review_Tags.create({
    data: {
      reviewId: reviews3.id,
      tagId: tag5.id,
    },
  });

  console.log(`seeding complete`);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
