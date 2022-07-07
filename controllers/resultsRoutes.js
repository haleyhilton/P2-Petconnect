const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render('results');
})

module.exports = router;