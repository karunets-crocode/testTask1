const User = require('../models/user.js');

const getUserById = async userId => {
  return User.findByPk(userId);
};

const updateBalance_DOWN = async (userId, amount) => {
  const user = await getUserById(userId);

  if (!user) {
    console.error(`User with userId ${userId} not found`);
    throw new Error('User not found');
  }

  if (user.balance < amount) {
    console.error('Insufficient funds');
    throw new Error('Insufficient funds');
  }

  user.balance -= amount;
  await user.save();

  console.log('User found:', user); 

  return user;
};

const updateBalance_UP = async (userId, amount) => {
  const user = await getUserById(userId);

  if (!user) {
    console.error(`User with userId ${userId} not found`);
    throw new Error('User not found');
  }

  user.balance += Number(amount);
  await user.save();

  console.log('User found:', user); 

  return user;
};

module.exports = {
  updateBalance_UP,
  updateBalance_DOWN
};
