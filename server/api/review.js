const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Review = models.Review;
const User = models.User;
const Character = models.Character;

// router.get('/', (req, res, next) => {
//  Review.findAll({})
//   .then(review => res.send(review))
//   .catch(next);
// });

router.get('/', function (req, res, next) {
    if (req.query.userId){
        Review.findAll({where: {userId: req.query.userId}})
            .then(review => {res.json(review);
            })
            .catch(next);
    }
    else {
        Review.findAll({
      include: {
        model: User,
        as: 'user'
      }
    })
       .then(review => {res.json(review);
            })
       .catch(next);
    }
});


router.get('/:reviewId', (req, res, next) => {
    Review.findById(req.params.reviewId)
		.then(review => res.send(review))
        .catch(next);
});


router.get('/:characterId', (req, res, next) => {
    const characterId = req.params.characterId;

        Review.findAll({
            where: {
              characterId
            },
            include: {
            model: Character,
             as: 'character'
      }
    })
       .then(review => {  console.log("FROM PROMIS", review )
       res.send(review);

            })
       .catch(next);

});

router.post('/', (req, res, next) => {
	Review.create(
        req.body
      )
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
