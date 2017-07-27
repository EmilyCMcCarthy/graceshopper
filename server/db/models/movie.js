const Sequelize = require('sequelize')
const db = require('../db')

const Movie = db.define('movie', {
   name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        },
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
  }
});

module.exports = Movie;
