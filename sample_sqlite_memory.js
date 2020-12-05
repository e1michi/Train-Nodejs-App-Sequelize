const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
  firstName : {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName : {
    type: DataTypes.STRING
  }
}, {
});
(async()=>{
  await User.sync({ force: true});
  let user = await User.create({
    firstName : 'alice',
    lastName : 'husigi'
  });
  user = await User.create({
    firstName : 'Kaz',
    lastName : 'TAKAHASHI'
  });
  const rows = await sequelize.query('select * from Users');
  console.log(rows);
})();