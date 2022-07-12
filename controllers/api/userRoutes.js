const router = require('express').Router();
const { User, Dog } = require('../../models');

//basic get all users route
router.get('/', async (req, res) => {
    try {
        const allUserData = await User.findAll({
            include: [{ model: Dog }],
        });
        res.status(200).json(allUserData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//basic get by id route
router.get('/:id', async (req, res) => {
  try {
      const allUserData = await User.findAll({
          include: [{ model: Dog }],
          where: {
            id: req.params.id,
          },
      });
      res.status(200).json(allUserData);
  } catch (err) {
      res.status(500).json(err);
  }
});

//route for logging in
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
    
        if (!userData) {
          res.status(400).json({ message: 'Incorrect username or password, please try again' });
          return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res.status(400).json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        // Create session variables based on the logged in user
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        res.status(400).json(err);
      }
});

//post route for creating new users
router.post('/signup', async (req, res) => {
    try {
        User.create(req.body).then((user) => {
            res.status(200).json(user);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//route for logging out
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(200).end();
    }
});


router.post('/', async (req, res) => {
  try {
      const bioPost = await User.create(req.body, {
          where: {
            id: req.session.id
          }
      })
      res.status(200).json(bioPost)
  } catch (err) {
    res.status(500).json(err)
  }
})


// updating a bio description
router.put('/', async (req, res) => {
  try {
      const bioPost = await User.update(req.body, {
          where: {
            id: req.session.id
          }
      })
      res.status(200).json(bioPost)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;