const router = require('express').Router();
const dogRoutes = require('./dogRoutes');
const userRoutes = require('./userRoutes');
const mediaRoutes = require('./mediaRoutes');

router.use('/dogs', dogRoutes);
router.use('/users', userRoutes);
router.use('/media', mediaRoutes);


module.exports = router;
