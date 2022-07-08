const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render('loading');
})

module.exports = router;