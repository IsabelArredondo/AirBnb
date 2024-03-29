// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const spotsRouter = require('./spots.js');
const usersRouter = require('./users.js');
const reviewsRouter = require('./reviews');
const bookingRouter = require('./booking');
const imagesRouter = require('./images');
const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/spots', spotsRouter)
router.use('/users', usersRouter);
router.use('/reviews', reviewsRouter);
router.use('/booking', bookingRouter);
router.use('/images', imagesRouter);
//do this every time you create a new folder

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

router.get('/restore-user',(req, res) => {
  return res.json(req.user);
}
);

router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
});

module.exports = router;