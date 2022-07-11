const router = require('express').Router();
const { Dog } = require('../models')


router.get('/:breed', async (req, res) => {
    try {
        const dogData = await Dog.findAll({
            where: {
                breed: req.params.breed
            },
            raw: true
        })
        console.log(dogData)
        res.render('results', {dogs: dogData});

    } catch (err) {
        console.log(err)
    }
    
})

module.exports = router;