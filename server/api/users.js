const router = require('express').Router()
const {User, Order, OrderItems, Character} = require('../db/models');
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

  const userId = Number(req.params.userId);
    Order.findOrCreate({
      where:{
        status: 'pending',
        userId: userId
      }
    })
    .spread((order) => {
      /*
      Check if a orderItem for a particular order exists:
        yes: update price and qty
        no: create orderItem
      */
       OrderItems.findOne({
         where:{
           characterId: req.body.characterId,
           orderId: order.id
         }
       })
       .then((orderItem) => {
         if(orderItem !== null){
          OrderItems.update({
             quantity: req.body.quantity + orderItem.quantity,
             subtotal: req.body.subTotal + orderItem.subtotal
           },
          {
            where: {
              characterId: req.body.characterId,
              id: orderItem.id
            },
            returning: true,
            plain: true
          })
          .then(updatedItem => res.send(updatedItem));
         }
         else {
           OrderItems.create({
             characterId: req.body.characterId,
             quantity: req.body.quantity,
             subtotal: req.body.subTotal,
             orderId: order.id
           })
          .then(createdOrderItem => res.send(createdOrderItem));
         }
       })
    })
    .catch(next)
})


/*
Get all user orderItems(Cart Items)
*/
router.get('/orders/', function (req, res, next) {
    Order.findOne(
      {
        where:{
          status: 'pending',
          userId: req.user.id
        }
    })
    .then( order => {
        return OrderItems.findAll(
          {   where: {
              orderId: order.id
            },
            include: [{ all: true }]
          })
      })
    .then(orderItems => {
      res.send(orderItems)
    })
    .catch(next);
});

/*
when checkout is clicked
 check if user has shipping address
  yes: use it
  no: add shipping address to user table.
*/
