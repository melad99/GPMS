const router = require('express').Router();
const api = require('./api');
const pages = require('./pages');
const { clientError, serverError } = require('../controllers');

router.use('/api/v1', api);
router.use(pages);
router.use(clientError);
router.use(serverError);

module.exports = router;
