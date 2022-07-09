const router = require('express').Router();

// TEST for David R's Sign up handlebars
router.get('/', async (req, res) => {
    res.render('signup');
})

module.exports = router;