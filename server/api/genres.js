const router = require("express").Router();
const { requireAdmin } = require("./utils");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all Genres
router.get(`/`, async (req, res) => {
  try {
    const allGenres = await prisma.genres.findMany();

    res.send(allGenres);
  } catch (error) {
    res.send({ message: `Genre not found`, error });
  }
});

// Get Genre with specified id
router.get(`/:id`, async (req, res) => {
  try {
    const genre = await prisma.genres.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!genre) {
      res.send({ error: true, message: "Genre Not Found" });
    } else {
      res.send(genre);
    }
  } catch (error) {
    res.send(error);
  }
});

// Create a new Genre
router.post(`/`, requireAdmin, async (req, res) => {
  try {
    const newGenre = await prisma.genres.create({
      data: req.body,
    });

    res.send({ message: `Genre created`, genres: newGenre });
  } catch (error) {
    res.send({ message: `Error creating Genre`, error });
  }
});

// Updates Genre with specified id
router.put(`/:id`, requireAdmin, async (req, res) => {
  try {
    const updateGenre = await prisma.genres.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    res.send({ message: `Genre updated`, genres: updateGenre });
  } catch (error) {
    res.send({ message: `Error updating Genre`, error });
  }
});

// Deletes a Genre
router.delete(`/:id`, requireAdmin, async (req, res) => {
  try {
    const deleteGenre = await prisma.genres.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.send({ message: `Genre deleted`, genres: deleteGenre });
  } catch (error) {
    res.send({ message: `Error deleting movie`, error });
  }
});

module.exports = router;