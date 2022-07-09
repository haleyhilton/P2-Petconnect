const router = require('express').Router();


//Haley landing.handlebars routes for testing purposes
router.get('/', async(req, res) => {
    res.render('landing', {
        logged_in: req.session.logged_in
    });
})

module.exports = router;