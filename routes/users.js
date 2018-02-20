const router = require('express').Router();
const checkAuth = require('../middleware/check-auth');
const UserController = require('../controllers/users');

/* GET users greeting bc idk. */
router.get('/', (req, res, next) => {
  res.send('hej');
});

router.post('/signup', UserController.user_signup);
router.post('/login', UserController.user_login);
router.delete('/:userId', checkAuth, UserController.user_delete);

module.exports = router;
