const router = require('express').Router();

const apiRoutes = require('./api');
const errorRoutes = require('./errorRoutes');
const landingRoutes = require('./landingRoutes');
const loadingRoutes = require('./loadingRoutes');
const loginRoutes = require('./loginRoutes');
const profileRoutes = require('./profileRoutes');
const resultsRoutes = require('./resultsRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/api', apiRoutes);
router.use('/error', errorRoutes);
router.use('/', landingRoutes);
router.use('/loading', loadingRoutes);
router.use('/login', loginRoutes);
router.use('/profile', profileRoutes);
router.use('/results', resultsRoutes);
router.use('/search', searchRoutes);

module.exports = router;