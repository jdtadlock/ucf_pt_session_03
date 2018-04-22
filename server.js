const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api_routes = require('./routes/api_routes');
const port = process.env.PORT || 5000;
const config = require('./config');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${config.db_user}:${config.db_pass}@ds117605.mlab.com:17605/test_db`);
// mongoose.Promise = Promise;

// User.find({})
//   .then(users => {
//     console.log(users); // Array of all the users
//   })
//   .then(somethingElse)
//   .then(() => {
//     console.log('final thing');
//   })
//   .catch(err => console.log(err));


const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', api_routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on ${port}`));