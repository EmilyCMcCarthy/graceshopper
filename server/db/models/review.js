const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      isTooLong()
        {
         if (this.content.length > 20) {
           throw new Error('Only 200 characters allowed!');
         }
       }
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      is: /[1-5]/i
    }
  }
});

module.exports = Review;
