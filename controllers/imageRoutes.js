const router = require("express").Router();
const multer = require("multer");
const { Media, User, Dog, UserDog } = require("../models");
const path = require("path");
const { request } = require("http");
const session = require("express-session");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/media");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: fileStorageEngine });

router.get("/", async (req, res) => {
  res.render("upload");
});

// Allows the upload of photos for the user profile.
router.post("/", upload.single("image"), async (req, res) => {
  try {
    let fileName = `./public/media/${req.file.filename}`;
    const media = await Media.create({
      picture_url: fileName,
      user_id: req.session.user_id,
      //should work if the sessions work
      dog_id: null,
    });
    media.save();

    // const mediaPut = await Media.findOne({ where: { user_id: req.session.user_id }})
    // await mediaPut.update({ profile_url: fileName })

    res.render('results', {
      logged_in: req.session.logged_in,
    });
  } catch {
    res.status(400).send("Failed");
  }
  console.log("Image Uploaded");
});

// Allows the upload of photos for the dog profile.
router.post("/dog/:id", upload.single("image"), async (req, res) => {
  try {
    console.log(req.file.filename);
    let fileName = `./public/media/${req.file.filename}`;
    const media = await Media.create({
      picture_url: fileName,
      user_id: null,
      dog_id: req.params.id,
    });
    // req.file.buffer
    media.save();
    res.send("Image Uploaded");
  } catch {
    res.status(400).send("Failed");
  }
  console.log("Image Uploaded");
});

module.exports = router;
