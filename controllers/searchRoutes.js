const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render('search');
})

module.exports = router;