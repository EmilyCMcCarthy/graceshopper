'use strict';
var Sequelize = require('sequelize');
var db = require('../db');



const Character = db.define('character', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING, //Sequelize.ARRAY(Sequelize.STRING)
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    inventory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
    }, {});

module.exports = Character;

Character.prototype.decreaseInventory = function(num) {
    if (num > this.inventory){
                return new Error('Sorry, we have only' + this.inventory + 'at this moment' );
            }
    else {
                this.inventory = this.inventory - num;
                return this.inventory;
            }
            
};

Character.prototype.increaseInventory = function(num) {
    this.inventory = this.inventory + num;
    return this.inventory;
};