const Sequelize = require('sequelize')
const db = require('../db')

// Rename this model to be Order/'order'
const Cart = db.define('cart', {
  status: {
    type: Sequelize.ENUM('pending', 'purchased')
  },
  total: {
    type: Sequelize.FLOAT // EI: make this a getter method, or store it as an integer to avoid floating point errors
  }
});

module.exports = Cart;
