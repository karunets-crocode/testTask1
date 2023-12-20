const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const User = require('./models/user'); 
const userController = require('./controllers/userController');

const app = express();
const PORT = 2000;

sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch(error => {
    console.error('Error syncing the database:', error);
  });

app.use(bodyParser.json());

app.use('/api/user', userController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
