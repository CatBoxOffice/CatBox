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
        "https://people.com/thmb/J5i96dLkdqMYBK9koINtQNH8nEk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2)/hulk-hogan-01-800-0cfd24984e1e45ea9c4c3a0b0e4745b4.jpg",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "SemaJ",
      email: "james@gmail.com",
      isAdmin: false,
      password: await bcrypt.hash("jamespw", 10),
      avatar:
        "https://staticg.sportskeeda.com/editor/2023/02/a7227-16752447762662-1920.jpg",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      username: "Trebor",
      email: "robert@aol.com",
      isAdmin: false,
      password: await bcrypt.hash("robertpw", 10),
      avatar:
        "https://www.the-sun.com/wp-content/uploads/sites/6/2023/06/wrestling-fighter-batista-wwe-smackdown-828738640-1.jpg",
    },
  });

  const user4 = await prisma.user.create({
    data: {
      username: "Uil",
      email: "liu@yahoo.com",
      isAdmin: false,
      password: await bcrypt.hash("liupw", 10),
      avatar:
        "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047",
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

  const genreRomance = await prisma.genre.create({
    data: {
      name: "Romance",
    },
  });

  const genreComedy = await prisma.genre.create({
    data: {
      name: "Comedy",
    },
  });

  const genreDrama = await prisma.genre.create({
    data: {
      name: "Drama",
    },
  });

  const genreSuperHero = await prisma.genre.create({
    data: {
      name: "SuperHero",
    },
  });

  // MOVIES (5)

  const movies1 = await prisma.movie.create({
    data: {
      title: "TopGun",
      description: "A movie about pilots trying to save the country",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
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
      poster:
        "https://cdn.traileraddict.com/content/image-entertainment/keith.jpg",
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
      poster:
        "https://www.originalfilmart.com/cdn/shop/products/Terminal_2004_original_film_art_1200x.jpg?v=1602086404",
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
      poster:
        "https://www.originalfilmart.com/cdn/shop/files/Maverick_1994_original_film_art.webp?v=1686774401",
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
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      year: 2012,
      rating: "PG-13",
      director: "Anthony Russo",
      studio: "Marvel Studios",
      language: "English",
    },
  });

  // Movie_Genres:
  await prisma.movies_Genres.create({
    data: {
      movieId: movies1.id,
      genreId: genreAction.id,
    },
  });

  await prisma.movies_Genres.create({
    data: {
      movieId: movies1.id,
      genreId: genreDrama.id,
    },
  });

  await prisma.movies_Genres.create({
    data: {
      movieId: movies2.id,
      genreId: genreRomance.id,
    },
  });

  await prisma.movies_Genres.create({
    data: {
      movieId: movies2.id,
      genreId: genreDrama.id,
    },
  });

  await prisma.movies_Genres.create({
    data: {
      movieId: movies3.id,
      genreId: genreComedy.id,
    },
  });

  await prisma.movies_Genres.create({
    data: {
      movieId: movies3.id,
      genreId: genreDrama.id,
    },
  });

  await prisma.movies_Genres.create({
    data: {
      movieId: movies4.id,
      genreId: genreComedy.id,
    },
  });

  await prisma.movies_Genres.create({
    data: {
      movieId: movies5.id,
      genreId: genreAction.id,
    },
  });

  await prisma.movies_Genres.create({
    data: {
      movieId: movies5.id,
      genreId: genreSuperHero.id,
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

  const reviews4 = await prisma.review.create({
    data: {
      userId: user1.id,
      movieId: movies1.id,
      title: "Such a cool movie",
      content: "LOTS OF PEW PEW AND BANG BANG AND WOOOOOWWW",
    },
  });

  const reviews5 = await prisma.review.create({
    data: {
      userId: user2.id,
      movieId: movies1.id,
      title: "It was Alright",
      content: "Not much of a gun fan but my boyfriend made me watch it",
    },
  });

  const reviews6 = await prisma.review.create({
    data: {
      userId: user3.id,
      movieId: movies5.id,
      title: "Never seen something like this before!",
      content: "Who thought the aliens would be so cool???",
    },
  });

  const reviews7 = await prisma.review.create({
    data: {
      userId: user3.id,
      movieId: movies4.id,
      title: "It was so emotional",
      content: "Ima go write in my notebook after this",
    },
  });

  // REVIEW_TAGS:

  await prisma.review_Tags.create({
    data: {
      reviewId: reviews1.id,
      tagId: tag1.id,
    },
  });

  await prisma.review_Tags.create({
    data: {
      reviewId: reviews2.id,
      tagId: tag2.id,
    },
  });

  await prisma.review_Tags.create({
    data: {
      reviewId: reviews3.id,
      tagId: tag3.id,
    },
  });

  await prisma.review_Tags.create({
    data: {
      reviewId: reviews2.id,
      tagId: tag4.id,
    },
  });

  await prisma.review_Tags.create({
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
