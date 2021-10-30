const router = require('express').Router();

const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoute');
const homeRoutes = require('./api/homepage-routes');

router.use('/', homeRoutes);
router.use('/api/users', userRoutes);
router.use('/api', reviewRoutes);

module.exports = router;