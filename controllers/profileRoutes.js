const router = require('express').Router();
const { User, Dog } = require('../models');

router.get('/', async (req, res) => {
    const userData = await User.findAll({
        include: [{ model: Dog }],
        where: {
            id: req.session.user_id,
        },
    });

    const user = (userData.map((project) => project.get({ plain: true })))[0];
    console.log(user)
    res.render('profile', {
        layout: 'main3',
        user,
        logged_in: req.session.logged_in,
    });
})

module.exports = router;