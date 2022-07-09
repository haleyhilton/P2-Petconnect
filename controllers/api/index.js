const router = require('express').Router();
const dogRoutes = require('./dogRoutes');
const userRoutes = require('./userRoutes');
const uploadRoutes = require('./imageRoutes');

router.use('/dogs', dogRoutes);
router.use('/users', userRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;
