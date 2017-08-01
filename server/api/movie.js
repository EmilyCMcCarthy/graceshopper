const router = require('express').Router();
const {Movie, Character} = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Movie.findAll({})
    .then(movie => res.json(movie))
    .catch(next);
});

router.get('/:movieId', (req, res, next) => {
    Movie.findById(req.params.movieId)
    .then(user => res.json(user))
    .catch(next);
});

router.get('/:movieId/characters', function (req, res, next) {
const movieId = req.params.movieId;

  Character.findAll({ where: { movieId } })
    .then(characters => res.json(characters))
    .catch(next);
});

router.post('/', function (req, res, next) {
   Movie.create({
        name: req.body.name,
        genre: req.body.genre})
        .then(movie => res.status(201).send(movie))
        .catch(next);
});

router.put('/:movieId', function (req, res, next) {
    Movie.findById(req.params.movieId)
    .then(movie => {
        if (!movie) {res.sendStatus(404)}
        return movie.update({
            name: req.body.name,
            genre: req.body.genre});
    })
    .then(movie => {
        res.send(movie);
    })
    .catch(next);
});

router.delete('/:movieId', function (req, res, next) {
    const id = req.params.movieId;

  Movie.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
