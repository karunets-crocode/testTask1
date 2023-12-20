const User = require('../models/user');

const getUserById = async userId => {
  return User.findByPk(userId);
};

const updateBalance = async (userId, amount) => {
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

module.exports = {
  updateBalance,
};
