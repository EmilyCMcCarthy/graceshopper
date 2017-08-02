const Sequelize = require('sequelize')
const db = require('../db')
const OrderItems = require('./orderItems')

// Rename this model to be Order/'order'
const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('pending', 'purchased')
  },
  total: {
    type: Sequelize.FLOAT // EI: make this a getter method, or store it as an integer to avoid floating point errors
  }
}
);

module.exports = Order;
