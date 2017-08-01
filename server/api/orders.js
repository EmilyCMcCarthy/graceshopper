const router = require('express').Router();
const {Order, OrderItems} = require('../db/models');

/*
when order is clicked: update cart table.
  change status: purchased
  put total
*/

// EI:
// a more RESTful URL would be:
// PUT /users/:userId/orders/:orderId/purchase
// or
// PUT /orders/:orderId/purchase
//
// A good example of a RESTful API is Paypal's:
// https://developer.paypal.com/docs/api/

router.put('/:orderId/purchase', (req, res, next) => {
  Order.update({
    status: 'purchased',
    total: req.body.total
  }, {
    where: {
      id: req.params.orderId,
    },
    returning: true
  })
  .then( result => {
    res.send("purchased")
  } )
})

module.exports = router;
