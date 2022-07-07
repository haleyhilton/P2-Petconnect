const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render('error');
})

module.exports = router;