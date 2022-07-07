const router = require('express').Router();


//Haley landing.handlebars routes for testing purposes
router.get('/', async(req, res) => {
    res.render('landing');
})


// David Rios Profile routes for testing purposes
router.get('/profile', async (req, res) => {
    res.render('profile');
})

module.exports = router;