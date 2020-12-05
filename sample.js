const Users = require('./models').Users;

Users.findAll().then(users => {
  console.log(users);
});