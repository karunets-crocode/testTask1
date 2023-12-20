const express = require('express');
const router = express.Router();
const userService = require('../services/userServices'); 

router.post('/update_balance/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { amount } = req.body;

    const updatedUser = await userService.updateBalance(userId, amount);

    res.json({ success: true, updatedBalance: updatedUser.balance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

module.exports = router;
