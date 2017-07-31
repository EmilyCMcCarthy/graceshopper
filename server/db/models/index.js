const User = require('./user')
const Order = require('./order')
const OrderItems = require('./orderItems')
const Category = require('./category')
const ProductCategory = require('./productCategory')

const Review = require('./review')
const Movie = require('./movie')

const Character = require('./character.js');
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Order);
Order.hasMany(OrderItems);
Movie.hasMany(Character);
Character.belongsTo(Movie);
Review.belongsTo(User);
Review.belongsTo(Character);
Character.belongsToMany(Category, { through: ProductCategory})
Category.hasMany(Character)

module.exports = {
  User,
  Order,
  OrderItems,
  Character,
  Review,
  Movie,
  Category,
  ProductCategory
}
