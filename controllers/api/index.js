const router = require('express').Router();
const dogRoutes = require('./dogRoutes');
const userRoutes = require('./userRoutes');

router.use('/dogs', dogRoutes);
router.use('/users', userRoutes);

module.exports = router;
