const router = require("express").Router();

router.get(`/`, (req, res) => {
  res.send(`Welcome to the api router`);
});

router.use(`movies`, require(`./movies`));
router.use(`users`, require(`./users`));
router.use(`reviews`, require(`./reviews`));
router.use(`genres`, require(`./genres`));
router.use(`tags`, require(`./tags`));

module.exports = router;
