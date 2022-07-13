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
        /* dog_name: user.dogs[0].name,
        dog_breed: user.dogs[0].breed,
        dog_age: user.dogs[0].age,
        dog_size: user.dogs[0].size,
        dog_sex: user.dogs[0].sex,
        dog_color: user.dogs[0].color,
        dog_forsale: user.dogs[0].for_sale,
        dog_description: user.dogs[0].description, */
        dogs: user.dogs,
        logged_in: req.session.logged_in,
    });
})

module.exports = router;