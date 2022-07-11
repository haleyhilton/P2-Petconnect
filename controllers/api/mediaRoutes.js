const router = require("express").Router();
const { Media, User, Dog, UserDog } = require("../../models");
const path = require("path");
const { request } = require("http");
const session = require("express-session");

// Returns profile pictures for a dog based on ID
router.get("/dog/:id", async (req, res) => {
  try {
    const dogData = await Media.findAll({ where: { dog_id: req.params.id } });

      if (!dogData) {
        res.status(400).json({ message: 'No Profile Found' });
        return;
      }

      const dog = dogData.map((photo) => photo.get({ plain: true }));

      res.render('dogpictures', {photos: dog});

    } catch (err) {
      res.status(400).json(err);
    }
})

// Returns pictures of dogs tied to a specific user - WORKING!!!
router.get("/user", async (req, res) => {
    try {
        // const userData = await Media.findAll({ where: { user_id: 1 } });
        // The above code works - not sure if req.session.user_id works but once it does, the entire code will work.
        const userData = await Media.findAll({ where: { user_id: req.session.user_id } });

        if (!userData) {
          res.status(400).json({ message: 'No Profile Found' });
          return;
        }

        const user = userData.map((photo) => photo.get({ plain: true }));

        res.render('userpictures', {photos: user});

      } catch (err) {
        res.status(400).json(err);
      }
  })

  module.exports = router;