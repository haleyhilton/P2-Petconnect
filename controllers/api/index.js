const router = require('express').Router();
const dogRoutes = require('./dogRoutes');
const userRoutes = require('./userRoutes');
const uploadRoutes = require('./imageRoutes');
const mediaRoutes = require('./mediaRoutes');

router.use('/dogs', dogRoutes);
router.use('/users', userRoutes);
router.use('/upload', uploadRoutes);
router.use('/media', mediaRoutes);

module.exports = router;
