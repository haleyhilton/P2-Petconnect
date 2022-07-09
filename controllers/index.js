const router = require('express').Router();

const apiRoutes = require('./api');
const errorRoutes = require('./errorRoutes');
const landingRoutes = require('./landingRoutes');
const loaderRoutes = require('./loaderRoutes');
const loginRoutes = require('./loginRoutes');
const profileRoutes = require('./profileRoutes');
const resultsRoutes = require('./resultsRoutes');
const searchRoutes = require('./searchRoutes');
const signupRoutes = require('./signupRoutes');

router.use('/api', apiRoutes);
router.use('/error', errorRoutes);
router.use('/', landingRoutes);
router.use('/loader', loaderRoutes);
router.use('/login', loginRoutes);
router.use('/profile', profileRoutes);
router.use('/results', resultsRoutes);
router.use('/search', searchRoutes);
router.use('/signup', signupRoutes);

module.exports = router;