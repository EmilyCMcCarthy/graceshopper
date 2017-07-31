'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Category = models.Category;
const ProductCategory = models.ProductCategory;
const Character = models.Character;


module.exports = router;

// EI: don't forget about query strings!
router.get('/', function (req, res, next) {
    Category.findAll()
    .then(category => res.json(category))
    .catch(next);

});


router.get('/:categoryId', function (req, res, next) {
    Category.findOne({ where: {id: req.params.categoryId}, include: {model: Character, as: "products"}})
    .then(category => res.json(category))
    .catch(next);
});

