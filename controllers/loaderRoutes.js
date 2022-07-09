const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render('loader');
})

module.exports = router;