const Sequelize = require('sequelize')
const db = require('../db')

const OrderItems = db.define('orderItems', {
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

module.exports = OrderItems;
