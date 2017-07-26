'use strict';
var Sequelize = require('sequelize');
var db = require('../db');


module.exports = db.define('character', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    inventory: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
    }, {
     instanceMethods: {
        decreaseInventory: function(num){
            if (num > this.inventory){
                throw new Error('Sorry, we have only' + this.inventory + 'at this moment' );
            }
            else {
                this.inventory = this.inventory - num;
            }
            return this.inventory;
        }
    }
});