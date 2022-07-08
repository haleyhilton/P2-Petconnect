const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render('login');
})

// TEST for David R's Sign up handlebars
router.get('/signup', async (req, res) => {
    res.render('signup');
})

module.exports = router;