const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render('profile', {
        logged_in: req.session.logged_in,
        user_id: req.session.user_id,
    });
})

module.exports = router;