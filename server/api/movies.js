const router = require("express").Router();
const { requireAdmin } = require("./utils");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get(`/`, async (req, res) => {
  try {
    const allMovies = await prisma.movie.findMany();

    res.send(allMovies);
  } catch (error) {
    res.send({ message: `Movies not found`, error });
  }
});

router.get(`/:id`, async (req, res) => {
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    movie
      ? res.send(movie)
      : res.send({ error: true, message: `Movie not found` });
  } catch (error) {
    res.send({ message: `Error getting movie`, error });
  }
});

router.post(`/`, requireAdmin, async (req, res) => {
  try {
    const newMovie = await prisma.movie.create({
      data: req.body,
    });

    res.send({ message: `Movie created`, movie: newMovie });
  } catch (error) {
    res.send({ message: `Error creating movie`, error });
  }
});

router.put(`/:id`, requireAdmin, async (req, res) => {
  try {
    const updateMovie = await prisma.movie.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    res.send({ message: `Movie updated`, movie: updateMovie });
  } catch (error) {
    res.send({ message: `Error updating movie`, error });
  }
});

router.delete(`/:id`, requireAdmin, async (req, res) => {
  try {
    const deleteMovie = await prisma.movie.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.send({ message: `Movie deleted`, movie: deleteMovie });
  } catch (error) {
    res.send({ message: `Error deleting movie`, error });
  }
});

module.exports = router;
