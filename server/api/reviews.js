const router = require("express").Router();
const { requireUser } = require("./utils");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Returns all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      include: {
        user: {
          select: {
            username: true,
          },
        },
        movie: true,
        Review_Tags: {
          select: {
            tags: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    res.send(reviews);
  } catch (error) {
    res.send(error);
  }
});

//Returns review with specified id
router.get("/:id", async (req, res) => {
  try {
    const review = await prisma.review.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
        movie: true,
        Review_Tags: {
          select: {
            tags: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    if (!review) {
      res.send({ error: true, message: "Review Not Found" });
    } else {
      res.send(review);
    }
  } catch (error) {
    res.send(error);
  }
});

//Creates a new review
router.post("/", requireUser, async (req, res) => {
  try {
    const review = await prisma.review.create({
      data: req.body,
    });

    res.send(review);
  } catch (error) {
    res.send(error);
  }
});

//Updates review with specified id
router.put("/:id", requireUser, async (req, res) => {
  try {
    const review = await prisma.review.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    if (!review) {
      res.send({ error: true, message: "Review Not Found" });
    } else {
      res.send(review);
    }
  } catch (error) {
    res.send(error);
  }
});

//Deletes a review
router.delete("/:id", requireUser, async (req, res) => {
  try {
    const review = await prisma.review.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!review) {
      res.send({ error: true, message: "Review Not Found" });
    } else {
      res.send(review);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
