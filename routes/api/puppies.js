const router = require('express').Router();
const puppiesCtrl = require('../../controllers/api/puppies');


router.get('/', puppiesCtrl.index);
router.post('/', puppiesCtrl.create)

module.exports = router;