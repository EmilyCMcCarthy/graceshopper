const router = require('express').Router();
const {User, Character} = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll({})
    .then(users => res.json(users))
    .catch(next);
});

router.get('/:userId', (req, res, next) => {
    User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next);
});

router.delete('/:useId', function (req, res, next) {
    const id = req.params.useId;

  User.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

// update use?

router.get('/', (req, res, next) => {
  Character.findAll({})
    .then(characters => res.json(characters))
    .catch(next);
});

router.get('/:characterId', (req, res, next) => {
    Character.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next);
});

router.post('/', function (req, res, next) {
   Character.create({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        description: req.body.description,
        inventory:  req.body.inventory})
        //ratingId movieId??
        .then(character => res.status(201).send(character))
        .catch(next);
});


router.put('/:characterId', function (req, res, next) {
    Character.findById(req.params.characterId)
    .then(character => {
        if (!character) {res.sendStatus(404)}
        return character.update({
            name: req.body.name,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
            description: req.body.description,
            inventory:  req.body.inventory});
    })
    .then(character => {
        res.send(character);
    })
    .catch(next);
});

router.delete('/:characterId', function (req, res, next) {
    const id = req.params.characterId;

  Character.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
