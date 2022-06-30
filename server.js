const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const multer = require('multer')

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname)
  }
})

const upload = multer({storage: fileStorageEngine})

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  });
  