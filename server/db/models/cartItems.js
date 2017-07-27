const Sequelize = require('sequelize')
const db = require('../db')

const CartItems = db.define('cart_items', {
  characterId: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  subtotal: {
    type: Sequelize.FLOAT // EI: make this a getter method
  }
});

module.exports = CartItems;
