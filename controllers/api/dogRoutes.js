const router = require('express').Router();
const { Dog, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const allDogData = await Dog.findAll({
            include: [{ model: User }],
        });
        res.status(200).json(allDogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// SEARCH AND FILTER UNDER CONSTRUCTION

router.get('/', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
    }
})

// END OF CONSTRUCTION

module.exports = router;