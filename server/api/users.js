const router = require('express').Router()
const {User, Order, OrderItems} = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next);
});

/*
when addToCart is clicked push item to cart table.
if cart is not created:
  create a cart for user.
  Push the characters to cartItem table
if cart is present for user
  push the items to cart
*/

// EI: in general, routes should look like this:
// /generalCategory/:idForThingInThatCategory
//
// a more RESTful route for adding to cart could be:
// POST /users/:userId/orders/:orderId/orderItems
// or
// PUT /users/:userId/orders/:orderId

router.post('/:userId/orders/current', (req, res, next) => {
    Order.findOrCreate({
      where:{
        userId: req.params.userId,
        status: 'pending'
      }
    })
    .spread ((userCart, created) => {
      OrderItems.create({
        characterId: req.body.characterId,
        quantity: req.body.quantity,
        subtotal: req.body.subtotal,
        orderId: userCart.id
      })
    })
    .then( cartItem => res.send(cartItem))
    .catch(next)
})


/*
when checkout is clicked
 check if user has shipping address
  yes: use it
  no: add shipping address to user table.
*/
