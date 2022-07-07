const router = require('express').Router();

const apiRoutes = require('./api');
const landingRoutes = require('./landingRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/', landingRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);

module.exports = router;