'use strict';
const Sequelize = require('sequelize');
const db = require('../db');

const Category = db.define('category', {
    tag: {
        type: Sequelize.STRING,
    }
    });

module.exports = Category;
