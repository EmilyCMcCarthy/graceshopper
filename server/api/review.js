const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Review = models.Review;


router.get('/', (req, res, next) => {
 Review.findAll({})
  .then(review => res.send(review))
  .catch(next);
});


router.get('/:reviewId', (req, res, next) => {
    Review.findById(req.params.reviewId)
		.then(review => res.send(review))
        .catch(next);
});


router.get('/:characterId/reviews', (req, res, next) => {
    const characterId = req.params.characterId;

        Review.findAll({
            where: {
              characterId
            }
    })
       .then(review => {res.send(review);
            })
       .catch(next);

});

router.post('/:characterId/reviews', (req, res, next) => {
	Review.create({
        content: req.body.content,
        rating: req.body.rating,
      })
	.then(review => res.status(201).send(review))
    .catch(next);
});



router.put('/:reviewId', function (req, res, next){
  Review.update({
        content: req.body.content,
        rating: req.body.rating })
  .then(review => res.send(review))
  .catch(next);
});


router.delete('/:reviewId', function (req, res, next){
  Review.destroy({
		where: {
			id: req.params.reviewId
		}
	})
  .then(() => res.status(204).end())
  .catch(next);
});


module.exports = router;
