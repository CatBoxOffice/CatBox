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

  const user5 = await prisma.user.create({
    data: {
      username: "BruceTheBugGuy",
      email: "Bugs4Ever@gmail.com",
      isAdmin: false,
      password: await bcrypt.hash("liupw", 10),
      avatar:
        "https://events.discoverstillwater.com/wp-content/uploads/sites/events.discoverstillwater.com/images/2020/07/event-featured-Fre-1595106038.jpeg",
    },
  });

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

  const genreScienceFiction = await prisma.genre.create({
    data: {
      name: "Science Fiction",
    },
  });

  const genreAdventure = await prisma.genre.create({
    data: {
      name: "Adventure",
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
      name: "Superhero",
    },
  });

  // MOVIES (5)

  const movies1 = await prisma.movie.create({
    data: {
      title: "Top Gun",
      description: "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
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
      description: "Natalie, head of her curriculum activities in high school and riding on a tennis scholarship for college, gets Keith as her Chemistry lab partner. As Natalie can be uptight, Keith proves to be the opposite, even while hiding a secret.",
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
      title: "The Terminal",
      description: "An Eastern European tourist unexpectedly finds himself stranded in JFK airport, and must take up temporary residence there.",
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
      description: "Bret Maverick, needing money for a poker tournament, faces various comic mishaps and challenges, including a charming woman thief.",
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
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
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
      poster: "https://m.media-amazon.com/images/I/71xDtUSyAKL._AC_SL1500_.jpg",
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
      poster: "https://m.media-amazon.com/images/I/71BgdzmFDAL._AC_SL1500_.jpg",
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

  const movies11 = await prisma.movie.create({
    data: {
      title: "Boogie Nights",
      description:
        "Back when sex was safe, pleasure was a business and business was booming, an idealistic porn producer aspires to elevate his craft to an art when he discovers a hot young talent.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2E2YWYxY2QtZmJmZi00MjJlLWFiYWItZTk5Y2IyMWQ1ZThhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      year: 1997,
      rating: "R",
      director: "Paul Thomas Anderson",
      studio: "New Line Cinema",
      language: "English",
    },
  });

  const movies12 = await prisma.movie.create({
    data: {
      title: "Koyaanisqatsi",
      description:
        "A collection of expertly photographed phenomena with no conventional plot. The footage focuses on nature, humanity, and the relationship between them.",
      poster:
        "https://upload.wikimedia.org/wikipedia/commons/8/8d/Koyaanisqatsi_%281982_poster%29.jpg",
      year: 1983,
      rating: "Not Rated",
      director: "Godfrey Reggio",
      studio: "American Zoetrope",
      language: "English",
    },
  });

  const movies13 = await prisma.movie.create({
    data: {
      title: "Apocalypto",
      description:
        " As the Mayan kingdom faces its decline, a young man is taken on a perilous journey to a world ruled by fear and oppression.",
      poster: "https://m.media-amazon.com/images/I/71d+Ko8zA4L.jpg",
      year: 2006,
      rating: "R",
      director: "Mel Gibson",
      studio: "Icon Productions",
      language: "Maya",
    },
  });

  const movies14 = await prisma.movie.create({
    data: {
      title: "Children of Men",
      description:
        "In 2027, in a chaotic world in which women have somehow become infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea.",
      poster:
        "https://www.originalfilmart.com/cdn/shop/files/children_of_men_2006_original_film_art_60df9302-646d-4ac9-8a1c-c9d0e57d2cad.webp?v=1683923881",
      year: 2006,
      rating: "R",
      director: "Alfonso Cuarón",
      studio: "Universal Pictures",
      language: "English",
    },
  });

  const movies15 = await prisma.movie.create({
    data: {
      title: "Everything Everywhere All at Once",
      description:
        "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
      poster: "https://m.media-amazon.com/images/I/61yIwId5-bL._AC_SL1500_.jpg",
      year: 2022,
      rating: "R",
      director: "Daniels",
      studio: "A24",
      language: "English, Mandarin, Cantonese",
    },
  });

  const movies16 = await prisma.movie.create({
    data: {
      title: "The Unbearable Weight of Massive Talent",
      description:
        "Moviestar Nick Cage is channeling his iconic characters as he's caught between a superfan and a CIA agent.",
      poster:
        "https://www.movieposters.com/cdn/shop/products/the-unbearable-weight-of-massive-talent_mqp1qkhd_0584a5d1-6407-4055-b2be-ad2f17e65f4f_480x.progressive.jpg?v=1652820942",
      year: 2022,
      rating: "R",
      director: "Tom Gormican",
      studio: "Burr! Productions",
      language: "English, Spanish",
    },
  });

  const movies17 = await prisma.movie.create({
    data: {
      title: "Old Boy",
      description:
        "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
      poster:
        "https://m.media-amazon.com/images/I/51x2uSLzv3L._AC_UF894,1000_QL80_.jpg",
      year: 2003,
      rating: "R",
      director: "Park Chan-wook",
      studio: "Show East",
      language: "Korean",
    },
  });

  const movies18 = await prisma.movie.create({
    data: {
      title: "Amores Perros",
      description:
        "A horrific car accident connects three stories, each involving characters dealing with loss, regret, and life's harsh realities, all in the name of love.",
      poster: "https://m.media-amazon.com/images/I/818ggxbKJbL._SL1500_.jpg",
      year: 2000,
      rating: "R",
      director: "Alejandro G. Iñárritu",
      studio: "Altavista Films",
      language: "Spanish",
    },
  });

  const movies19 = await prisma.movie.create({
    data: {
      title: "Skyscraper",
      description:
        "A security expert must infiltrate a burning skyscraper, 225 stories above ground, when his family is trapped inside by criminals.",
      poster:
        "https://m.media-amazon.com/images/I/51P9koT97WL._AC_UF894,1000_QL80_.jpg",
      year: 2018,
      rating: "PG-13",
      director: "Rawson Marshall Thurber",
      studio: "Legendary Entertainment",
      language: "English",
    },
  });

  const movies20 = await prisma.movie.create({
    data: {
      title: "Grown Ups",
      description:
        "After their high school basketball coach passes away, five good friends and former teammates reunite for a Fourth of July holiday weekend.",
      poster:
        "https://m.media-amazon.com/images/I/51AMyXw-IHL._AC_UF894,1000_QL80_.jpg",
      year: 2010,
      rating: "PG-13",
      director: "Dennis Dugan",
      studio: "Columbia Pictures",
      language: "English",
    },
  });

  const movies21 = await prisma.movie.create({
    data: {
      title: "Piranha 3D",
      description:
        "After a sudden underwater tremor sets free scores of the prehistoric man-eating fish, an unlikely group of strangers must band together to stop themselves from becoming fish food for the area's new razor-toothed residents.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTU3NDg2NTY4Nl5BMl5BanBnXkFtZTcwMTM0OTE3Mw@@._V1_.jpg",
      year: 2010,
      rating: "R",
      director: "Alexandre Aja",
      studio: "Dimension Films",
      language: "English",
    },
  });

  const movies22 = await prisma.movie.create({
    data: {
      title: "Steel",
      description:
        "A scientist for the military turns himself into a cartoon-like superhero when a version of one of his own weapons is being used against enemies.",
      poster:
        "https://m.media-amazon.com/images/I/51mMI9adzcL._AC_UF894,1000_QL80_.jpg",
      year: 1997,
      rating: "PG-13",
      director: "Kenneth Johnson",
      studio: "Warner Bros.",
      language: "English",
    },
  });

  // Movie_Genres:

  // ACTION GENRE:
  await prisma.movies_Genres.createMany({
    data: [
      {
        movieId: movies1.id,
        genreId: genreAction.id,
      },
      {
        movieId: movies5.id,
        genreId: genreAction.id,
      },
      {
        movieId: movies10.id,
        genreId: genreAction.id,
      },
      {
        movieId: movies22.id,
        genreId: genreAction.id,
      },
      {
        movieId: movies19.id,
        genreId: genreAction.id,
      },
      {
        movieId: movies17.id,
        genreId: genreAction.id,
      },
      {
        movieId: movies15.id,
        genreId: genreAction.id,
      },
      {
        movieId: movies13.id,
        genreId: genreAction.id,
      },
    ],
  });

  // DRAMA GENRE
  await prisma.movies_Genres.createMany({
    data: [
      {
        movieId: movies1.id,
        genreId: genreDrama.id,
      },
      {
        movieId: movies2.id,
        genreId: genreDrama.id,
      },
      {
        movieId: movies3.id,
        genreId: genreDrama.id,
      },
      {
        movieId: movies6.id,
        genreId: genreDrama.id,
      },
      {
        movieId: movies18.id,
        genreId: genreDrama.id,
      },
      {
        movieId: movies17.id,
        genreId: genreDrama.id,
      },
      {
        movieId: movies11.id,
        genreId: genreDrama.id,
      },
    ],
  });

  // ADVENTURE GENRE
  await prisma.movies_Genres.createMany({
    data: [
      {
        movieId: movies15.id,
        genreId: genreAdventure.id,
      },
      {
        movieId: movies14.id,
        genreId: genreAdventure.id,
      },
      {
        movieId: movies13.id,
        genreId: genreAdventure.id,
      },
      {
        movieId: movies19.id,
        genreId: genreAdventure.id,
      },
      {
        movieId: movies10.id,
        genreId: genreAdventure.id,
      },
      {
        movieId: movies4.id,
        genreId: genreAdventure.id,
      },
    ],
  });

  // SCIENCE FICTION GENRE
  await prisma.movies_Genres.createMany({
    data: [
      {
        movieId: movies15.id,
        genreId: genreScienceFiction.id,
      },
      {
        movieId: movies14.id,
        genreId: genreScienceFiction.id,
      },
    ],
  });

  // ROMANCE GENRE
  await prisma.movies_Genres.create({
    data: {
      movieId: movies2.id,
      genreId: genreRomance.id,
    },
  });

  // COMEDY GENRE
  await prisma.movies_Genres.createMany({
    data: [
      {
        movieId: movies3.id,
        genreId: genreComedy.id,
      },
      {
        movieId: movies4.id,
        genreId: genreComedy.id,
      },
      {
        movieId: movies7.id,
        genreId: genreComedy.id,
      },
      {
        movieId: movies21.id,
        genreId: genreComedy.id,
      },
      {
        movieId: movies20.id,
        genreId: genreComedy.id,
      },
      {
        movieId: movies16.id,
        genreId: genreComedy.id,
      },
    ],
  });

  // SUPERHERO GENRE
  await prisma.movies_Genres.createMany({
    data: [
      {
        movieId: movies5.id,
        genreId: genreSuperHero.id,
      },
      {
        movieId: movies8.id,
        genreId: genreSuperHero.id,
      },
      {
        movieId: movies22.id,
        genreId: genreSuperHero.id,
      },
    ],
  });

  // HORROR GENRE
  await prisma.movies_Genres.createMany({
    data: [
      {
        movieId: movies9.id,
        genreId: genreHorror.id,
      },
      {
        movieId: movies21.id,
        genreId: genreHorror.id,
      },
    ],
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
      grade: 93,
      title: "I have never cried so much in my life",
      content: "It was a beautiful movie that brought a lot of joy in my day",
    },
  });

  const reviews2 = await prisma.review.create({
    data: {
      userId: user2.id,
      movieId: movies2.id,
      grade: 97,
      title: "Best movie I have seen",
      content: "Not too short, not too long. Simply, amazing",
    },
  });

  const reviews3 = await prisma.review.create({
    data: {
      userId: user3.id,
      movieId: movies3.id,
      grade: 88,
      title: "Fun afternoon movie",
      content: "My cat very and I loved it. The Ending made both of us cry",
    },
  });

  const reviews4 = await prisma.review.create({
    data: {
      userId: user1.id,
      movieId: movies1.id,
      grade: 92,
      title: "Such a cool movie",
      content: "LOTS OF PEW PEW AND BANG BANG AND WOOOOOWWW",
    },
  });

  const reviews5 = await prisma.review.create({
    data: {
      userId: user2.id,
      movieId: movies1.id,
      grade: 65,
      title: "It was Alright",
      content: "Not much of a gun fan but my friend made me watch it",
    },
  });

  const reviews6 = await prisma.review.create({
    data: {
      userId: user3.id,
      movieId: movies5.id,
      grade: 82,
      title: "Never seen something like this before!",
      content: "Who thought the aliens would be so cool???",
    },
  });

  const reviews7 = await prisma.review.create({
    data: {
      userId: user3.id,
      movieId: movies4.id,
      grade: 90,
      title: "It was so emotional",
      content: "Ima go write in my notebook after this",
    },
  });

  // New Reviews:

  const reviews8 = await prisma.review.create({
    data: {
      userId: user10.id,
      movieId: movies6.id,
      grade: 98,
      title: "Oppen-hellyeah",
      content: "Chris Nolan is so sick a directing, bro. No cap frfr",
    },
  });

  const reviews9 = await prisma.review.create({
    data: {
      userId: user10.id,
      movieId: movies7.id,
      grade: 94,
      title: "Barbie's straight gas, bro",
      content:
        "Margo Robbie's a total smoke show, bro. No cap frfr. Movie's a little too pink though, bro frfr.",
    },
  });

  const reviews10 = await prisma.review.create({
    data: {
      userId: user8.id,
      movieId: movies6.id,
      grade: 50,
      title: "Not for me...",
      content:
        "All that nuclear radiation must be terrible for everyone's plants.",
    },
  });

  const reviews11 = await prisma.review.create({
    data: {
      userId: user8.id,
      movieId: movies7.id,
      grade: 99,
      title: "Love love love",
      content:
        "Loved this movie. Reminded me off all my Barbie dolls I used to have.",
    },
  });

  const reviews12 = await prisma.review.create({
    data: {
      userId: user9.id,
      movieId: movies8.id,
      grade: 89,
      title: "Pretty dope flick",
      content:
        "Took Stevie to see this movie. He paid, of course. Entertaining movie",
    },
  });

  const reviews13 = await prisma.review.create({
    data: {
      userId: user9.id,
      movieId: movies9.id,
      grade: 96,
      title: "Better than ever!",
      content:
        "John Carpenter's movies are always awesome...especially on the big screen!",
    },
  });

  const reviews14 = await prisma.review.create({
    data: {
      userId: user7.id,
      movieId: movies10.id,
      grade: 91,
      title: "Best action franchise",
      content:
        "Tom Cruise is the man. Goes hard with the stunts and looks great running.",
    },
  });

  const reviews15 = await prisma.review.create({
    data: {
      userId: user7.id,
      movieId: movies8.id,
      grade: 35,
      title: "Horrible waste of time",
      content:
        "I would have rather watched Mission Impossible again...I blame my nephew, Gabriel.",
    },
  });

  const reviews16 = await prisma.review.create({
    data: {
      userId: user6.id,
      movieId: movies10.id,
      grade: 77,
      title: "Not the best M.I. movie but still good",
      content:
        "I love seeing this franchise grow but would have liked more razzle dazzle.",
    },
  });

  const reviews17 = await prisma.review.create({
    data: {
      userId: user6.id,
      movieId: movies9.id,
      grade: 93,
      title: "John Carpenter is the best",
      content:
        "Happy they did another theatrical run of this cult masterpiece. Wore out my VHS copy 13 years ago.",
    },
  });

  const reviews18 = await prisma.review.create({
    data: {
      userId: user5.id,
      movieId: movies2.id,
      grade: 25,
      title: "Movie needed more bugs",
      content:
        "I kept looking for bugs but couldn't find any...it's a shame. BugGuy out.",
    },
  });

  const reviews19 = await prisma.review.create({
    data: {
      userId: user5.id,
      movieId: movies8.id,
      grade: 10,
      title: "Not an accurate portayal of a Beetle",
      content:
        "Trust me, I collect Beetles and none of them have traits like this. BugGuy out.",
    },
  });

  const reviews20 = await prisma.review.create({
    data: {
      userId: user4.id,
      movieId: movies10.id,
      grade: 95,
      title: "An absolute must",
      content: "Loved it but would have been better if Hugh Jackman was in it.",
    },
  });

  // Even more reviews:

  const reviews21 = await prisma.review.create({
    data: {
      userId: user1.id,
      movieId: movies22.id,
      grade: 2,
      title: "Why did this get made?",
      content:
        "I understand Shaq was hot in the 90's by good lord. Into the catbox you go!",
    },
  });

  const reviews22 = await prisma.review.create({
    data: {
      userId: user2.id,
      movieId: movies16.id,
      grade: 75,
      title: "Liked it but didn't love it",
      content:
        "Felt the story was too silly to be believable. Pedro Pascal is a wonderful actor though. No catbox for you.",
    },
  });

  const reviews23 = await prisma.review.create({
    data: {
      userId: user3.id,
      movieId: movies21.id,
      grade: 45,
      title: "Good but terrible...idk",
      content: "Cheesy genre film that I lost interest in quickly.",
    },
  });

  const reviews24 = await prisma.review.create({
    data: {
      userId: user4.id,
      movieId: movies20.id,
      grade: 60,
      title: "Had potential but wound up suckin",
      content:
        "This movie is a prime case of wishing Chris Farley was still alive...you'd get a cheeseburger for that.",
    },
  });

  const reviews25 = await prisma.review.create({
    data: {
      userId: user5.id,
      movieId: movies17.id,
      grade: 78,
      title: "I don't speak Korean",
      content:
        "But I'm pretty sure they were talking about how cool bugs are. BugGuy out",
    },
  });

  const reviews26 = await prisma.review.create({
    data: {
      userId: user6.id,
      movieId: movies15.id,
      grade: 50,
      title: "I didn't get it",
      content:
        "Came off as vulgar and confusing. Jamie Lee Curtis still got it goin on though...golly",
    },
  });

  const reviews27 = await prisma.review.create({
    data: {
      userId: user7.id,
      movieId: movies13.id,
      grade: 90,
      title: "Incredible movie",
      content:
        "Jaguar Paw is the coolest. He's one tough customer. I'd shake that man's hand if I could.",
    },
  });

  const reviews28 = await prisma.review.create({
    data: {
      userId: user8.id,
      movieId: movies14.id,
      grade: 60,
      title: "I wouldn't want to live in that world",
      content:
        "The post-apocalyptic world has lots of vegitation but not the fun plants...only the sad ones.",
    },
  });

  const reviews29 = await prisma.review.create({
    data: {
      userId: user9.id,
      movieId: movies11.id,
      grade: 55,
      title: "Not a Marky Mark guy",
      content:
        "I could probably take him in a fight. I was distracted during the movie cuz I wanted to fight him.",
    },
  });

  const reviews30 = await prisma.review.create({
    data: {
      userId: user10.id,
      movieId: movies15.id,
      grade: 85,
      title: "Great fight scenes",
      content:
        "Didn't really get any of the story line but the fighting was tight, bro. So sick. All that fighting and stuff.",
    },
  });

  const reviews31 = await prisma.review.create({
    data: {
      userId: user10.id,
      movieId: movies18.id,
      grade: 82,
      title: "A bit of a downer",
      content:
        "I watched this at work and my boss asked why I was crying and I told him I had something in my eye. Bro doesn't know I just watch and review movies all day frfr tight bro.",
    },
  });

  const reviews32 = await prisma.review.create({
    data: {
      userId: user1.id,
      movieId: movies12.id,
      grade: 100,
      title: "My absolute favorite",
      content:
        "Sometimes you don't need dialogue or narrative. The power of beautiful imagery and an incredible soundtrack makes this film so special.",
    },
  });

  const reviews33 = await prisma.review.create({
    data: {
      userId: user2.id,
      movieId: movies17.id,
      grade: 95,
      title: "One of the best international films",
      content: "Everything about this film is amazing",
    },
  });

  const reviews34 = await prisma.review.create({
    data: {
      userId: user4.id,
      movieId: movies18.id,
      grade: 78,
      title: "Sad but beautiful",
      content: "Kinda ruins your day but still worth watching",
    },
  });

  const reviews35 = await prisma.review.create({
    data: {
      userId: user4.id,
      movieId: movies19.id,
      grade: 40,
      title: "This was really bad",
      content:
        "I usually like movies with The Rock but this one is just too bad.",
    },
  });

  const reviews36 = await prisma.review.create({
    data: {
      userId: user5.id,
      movieId: movies22.id,
      grade: 100,
      title: "You just don't get it",
      content:
        "Everyone hates this movie but I think it's great...so do my bugs. BugGuy out.",
    },
  });

  const reviews37 = await prisma.review.create({
    data: {
      userId: user6.id,
      movieId: movies12.id,
      grade: 100,
      title: "Influential",
      content:
        "The synchronicity of motion control time lapse filmmaking and Philip Glass's score is a treat that was ahead of it's time.",
    },
  });

  const reviews38 = await prisma.review.create({
    data: {
      userId: user7.id,
      movieId: movies16.id,
      grade: 95,
      title: "Nicholas Cage is a National Treasure",
      content:
        "I'm not saying that because of that incredible movie...someone should give him the key to America",
    },
  });

  const reviews39 = await prisma.review.create({
    data: {
      userId: user8.id,
      movieId: movies15.id,
      grade: 80,
      title: "Makes me want to put googly eyes on my plants",
      content:
        "If Jobu Tupaki came around my garden I'd throw salt on her like I do for snails.",
    },
  });

  const reviews40 = await prisma.review.create({
    data: {
      userId: user9.id,
      movieId: movies20.id,
      grade: 100,
      title: "I love this movie",
      content: "This movie gets a lot of hate but Adam Sandler is the man.",
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
