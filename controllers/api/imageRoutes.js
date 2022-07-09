const router = require('express').Router();
const multer = require('multer');
const { Media, User, Dog } = require('../../models');
const path = require('path');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/media')
    },
    filename: (req, file, cb) => {
      console.log(file)
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({storage: fileStorageEngine})

router.get('/', async(req, res) => {
    res.render('upload');
})

router.post('/', upload.single("image"), async(req, res) => {
  try {
    console.log(req.file.filename)
    let fileName = `./public/media/${req.file.filename}`;
    console.log(typeof(fileName))
    const media = await Media.create({ picture_url: fileName, user_id: User.id, dog_id: Dog.id })
    // req.file.buffer
    media.save();
    res.send('Image Uploaded');
  }
  catch {
    res.status(400).send("Failed")
  }
    console.log("Image Uploaded")
})

module.exports = router;