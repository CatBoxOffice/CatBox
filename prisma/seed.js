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
        "https://media.istockphoto.com/id/1288973455/photo/stone-pebble-gray.jpg?s=612x612&w=0&k=20&c=Vw4HIdybWHjFKNp83p7ii_P571d9488_b-GXwBwmSbU=",
    },
  });

  // New Users:

  const user6 = await prisma.user.create({
    data: {
      username: "MrMovieMan",
      email: "mrmovieman@gmail.com",
      isAdmin: false,
      password: await bcrypt.hash("liupw", 10),
      avatar:
        "https://hc.edu/news-and-events/wp-content/uploads/sites/12/2017/08/MR.MOVIEMAN-1-800x400.jpg",
    },
  });

  const user7 = await prisma.user.create({
    data: {
      username: "DanTheMan23",
      email: "dantheman23@gmail.com",
      isAdmin: false,
      password: await bcrypt.hash("liupw", 10),
      avatar:
        "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/lions/mtk8ljbpqqjaqxyxthgc",
    },
  });

  const user8 = await prisma.user.create({
    data: {
      username: "GardenGal69",
      email: "gardengal@gmail.com",
      isAdmin: false,
      password: await bcrypt.hash("liupw", 10),
      avatar:
        "https://yt3.googleusercontent.com/s5cJewuN6fyNj-vfKMxgFhl9AiRGz66owu3mcYWcJ1CfX0VN5cXOeAQcj2IApkoxPYIAfLI__Q=s900-c-k-c0x00ffffff-no-rj",
    },
  });

  const user9 = await prisma.user.create({
    data: {
      username: "LaFlamaBlanca",
      email: "kennypowers@gmail.com",
      isAdmin: false,
      password: await bcrypt.hash("liupw", 10),
      avatar:
        "https://www.bradleyscout.com/wp-content/uploads/2023/04/cccc2154da115c27a01d88808e961f7a.jpeg",
    },
  });

  const user10 = await prisma.user.create({
    data: {
      username: "ProcrastinatorPete",
      email: "pete@officejob.com",
      isAdmin: false,
      password: await bcrypt.hash("liupw", 10),
      avatar:
        "https://st.depositphotos.com/1011643/3244/i/450/depositphotos_32449847-office-worker-looking-at-the-camera.jpg",
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

  // List of Recent Films:

  const movies6 = await prisma.movie.create({
    data: {
      title: "Oppenheimer",
      description:
        "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      poster:
        "https://m.media-amazon.com/images/I/71xDtUSyAKL._AC_SL1500_.jpg",
      year: 2023,
      rating: "R",
      director: "Christopher Nolan",
      studio: "Universal/Syncopy",
      language: "English",
    },
  });

  const movies7 = await prisma.movie.create({
    data: {
      title: "Barbie",
      description:
        "Barbie suffers a crisis that leads her to question her world and her existence.",
      poster:
        "https://m.media-amazon.com/images/I/71BgdzmFDAL._AC_SL1500_.jpg",
      year: 2023,
      rating: "PG-13",
      director: "Greta Gerwig",
      studio: "Warner Bros.",
      language: "English",
    },
  });

  const movies8 = await prisma.movie.create({
    data: {
      title: "Blue Beetle",
      description:
        "An alien scarab chooses Jaime Reyes to be its symbiotic host, forever changing his destiny as he becomes the superhero known as Blue Beetle.",
      poster:
        "https://www.movieposters.com/cdn/shop/files/blue-beetle_hyapde37_480x.progressive.jpg?v=1688499635",
      year: 2023,
      rating: "PG-13",
      director: "Angel Manuel Soto",
      studio: "Warner Bros.",
      language: "English",
    },
  });

  const movies9 = await prisma.movie.create({
    data: {
      title: "They Live 35th Anniversary",
      description:
        "They influence our decisions without us knowing it. They numb our senses without us feeling it. They control our lives without us realizing it. They live. Rerelease of the 1988 cult classic.",
      poster:
        "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1687746802/amc-cdn/production/2/movies/73900/73860/PosterDynamic/154070.jpg",
      year: 2023,
      rating: "R",
      director: "John Carpenter",
      studio: "Universal/Alive Films",
      language: "English",
    },
  });

  const movies10 = await prisma.movie.create({
    data: {
      title: "Mission: Impossible - Dead Reckoning Part One",
      description:
        "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.",
      poster:
        "https://www.movieposters.com/cdn/shop/files/mission_impossible__dead_reckoning_part_one_ver2_480x.progressive.jpg?v=1686066143",
      year: 2023,
      rating: "PG-13",
      director: "Christopher McQuarrie",
      studio: "Paramount Pictures",
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

  // New Reviews:

  const reviews8 = await prisma.review.create({
    data: {
      userId: user10.id,
      movieId: movies6.id,
      title: "Oppen-hellyeah",
      content: "Chris Nolan is so sick a directing, bro. No cap frfr",
    },
  });

  const reviews9 = await prisma.review.create({
    data: {
      userId: user10.id,
      movieId: movies7.id,
      title: "Barbie's tight, bro",
      content: "Margo Robbie's a total smoke show, bro. No cap frfr. Movie's a little too pink though, bro frfr.",
    },
  });

  const reviews10 = await prisma.review.create({
    data: {
      userId: user8.id,
      movieId: movies6.id,
      title: "Not for me...",
      content: "All that nuclear radiation must be terrible for everyone's plants.",
    },
  });

  const reviews11 = await prisma.review.create({
    data: {
      userId: user8.id,
      movieId: movies7.id,
      title: "Love love love",
      content: "Loved this movie. Reminded me off all my Barbie dolls I used to have.",
    },
  });

  const reviews12 = await prisma.review.create({
    data: {
      userId: user9.id,
      movieId: movies8.id,
      title: "Pretty dope flick",
      content: "Took Stevie to see this movie. He paid, of course. Entertaining movie",
    },
  });

  const reviews13 = await prisma.review.create({
    data: {
      userId: user9.id,
      movieId: movies9.id,
      title: "Better than ever!",
      content: "John Carpenter's movies are always awesome...especially on the big screen!",
    },
  });

  const reviews14 = await prisma.review.create({
    data: {
      userId: user7.id,
      movieId: movies10.id,
      title: "Best action franchise",
      content: "Tom Cruise is the man. Goes hard with the stunts and looks great running.",
    },
  });

  const reviews15 = await prisma.review.create({
    data: {
      userId: user7.id,
      movieId: movies8.id,
      title: "Horrible waste of time",
      content: "I would have rather watched Mission Impossible again...I blame my nephew, Gabriel.",
    },
  });

  const reviews16 = await prisma.review.create({
    data: {
      userId: user6.id,
      movieId: movies10.id,
      title: "Not the best M.I. movie but still good",
      content: "I love seeing this franchise grow but would have liked more razzle dazzle.",
    },
  });

  const reviews17 = await prisma.review.create({
    data: {
      userId: user6.id,
      movieId: movies9.id,
      title: "John Carpenter is the best",
      content: "Happy they did another theatrical run of this cult masterpiece. Wore out my VHS copy 13 years ago.",
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
