'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Character = models.Character;
const Category = models.Category;

module.exports = router;

// EI: don't forget about query strings!
router.get('/', function (req, res, next) {
    Character.findAll({include: {model: Category, as: "tags"}})
    .then(character => res.json(character))
    .catch(next);

});


router.get('/:characterId', function (req, res, next) {
    Character.findById(req.params.characterId)
    .then(character => res.json(character))
    .catch(next);
});

router.get('/:characterId/categories', function (req, res, next){
    Character.findOne({ where: {id: req.params.characterId}, include: {model: Category, as: "tags"}})
    .then(character => res.json(character.tags))
    .catch(next);
});

