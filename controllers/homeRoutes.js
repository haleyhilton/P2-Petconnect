const { append } = require('express/lib/response');

const router = require('express').Router();


//Haley landing.handlebars routes for testing purposes
router.get('/', async(req, res) => {
    res.render('landing');
})


module.exports = router;