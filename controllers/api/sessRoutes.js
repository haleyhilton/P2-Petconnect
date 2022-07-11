const router = require('express').Router();

//route to obtain session variables
router.get('/', async (req, res) => {
    try {
      console.log("Hello!: " + req.session.logged_in);
      res.status(200).json(req.session);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;