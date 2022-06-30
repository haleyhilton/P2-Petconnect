const router = require('express').Router();
const { User, Dog } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const allUserData = await User.findAll({
            include: [{ model: Dog }],
        });
        res.status(200).json(allUserData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;