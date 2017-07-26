const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  status: {
    type: Sequelize.ENUM('pending', 'purchased')
  },
  total: {
    type: Sequelize.FLOAT
  }
});

module.exports = Cart;
