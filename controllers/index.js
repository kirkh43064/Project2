const router = require('express').Router();

const userRoutes = require('./api/userRoutes');
const reviewRoutes = require('./api/reviewRoute');
const homeRoutes = require('./api/homepageRoutes');

router.use('/', homeRoutes);
router.use('/api/users', userRoutes);
router.use('/api/review', reviewRoutes);

module.exports = router;