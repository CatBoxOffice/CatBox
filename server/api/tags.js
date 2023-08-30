const router = require("express").Router();
const { requireAdmin, requireUser } = require("./utils");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get(`/`, async (req, res) => {
  try {
    const allTags = await prisma.tag.findMany({
      include: {
        Review_Tags: {
          select: {
            review: true,
          },
        },
      },
    });

    res.send(allTags);
  } catch (error) {
    res.send({ message: `Tags not found`, error });
  }
});

router.get(`/:id`, async (req, res) => {
  try {
    const tag = await prisma.tag.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        Review_Tags: {
          select: {
            review: true,
          },
        },
      },
    });

    tag ? res.send(tag) : res.send({ error: true, message: `Tag not found` });
  } catch (error) {
    res.send({ message: `Error getting tag`, error });
  }
});

router.post(`/`, requireUser, async (req, res) => {
  try {
    const newTag = await prisma.tag.create({
      data: req.body,
    });

    res.send({ message: `Tag created`, movie: newTag });
  } catch (error) {
    res.send({ message: `Error creating tag`, error });
  }
});

router.put(`/:id`, requireUser, async (req, res) => {
  try {
    const updateTag = await prisma.tag.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    res.send({ message: `Tag updated`, movie: updateTag });
  } catch (error) {
    res.send({ message: `Error updating tag`, error });
  }
});

router.delete(`/:id`, requireAdmin, async (req, res) => {
  try {
    const deleteTag = await prisma.tag.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.send({ message: `Tag deleted`, movie: deleteTag });
  } catch (error) {
    res.send({ message: `Error deleting tag`, error });
  }
});

module.exports = router;
