
var Promise = require('bluebird');
var db = require('./server/db');
var Character = require('./server/db/models/character');
var Bluebird = require('bluebird')

// EI: don't forget to update character price levels
var characters = [

{   name: "Albus Dumbledore",
    price: "$$$",
    imageUrl: "https://vignette2.wikia.nocookie.net/harrypotter/images/0/04/Albus_Dumbledore_%28HBP_promo%29_1.jpg/revision/latest?cb=20090817194206",
    description: "Be Dumbledore. Live in the magical world of Harry Potter... Be the headmaster at Hogwarts",
    inventory: "1"
},
{   name: "Wonder Woman",
    price: "$$$$",
    imageUrl: "http://www.indiewire.com/wp-content/uploads/2016/07/wonder-woman.jpg",
    description: "Be Wonder Woman. Super Awesome",
    inventory: "3"
},
{   name: "Frodo Baggins",
    price: "$$",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4e/Elijah_Wood_as_Frodo_Baggins.png",
    description: "Live in the houses with the circle doors. Protect the world. Take the One ring to be destroyed?",
    inventory: "14"
},
{   name: "Hermione Granger",
    price: "$$$",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
    description: "The brightest witch of her Time. Enjoy the friendship of Ron and Harry",
    inventory: "17"
},
{   name: "Luke Skywalker",
    price: "$",
    imageUrl: "http://static.srcdn.com/wp-content/uploads/luke-skywalker-star-wars-a-new-hope.jpg",
    description: "The force will be with you if you choose Luke Skywalker",
    inventory: "7"
}


]




db.sync({force: true})
  .then(() => {
    return Bluebird.map(characters, character => {
      return Character.create(character)
  })})
  .then(() => {
    console.log('The database hase been seeded');
  })
  .catch(err => {
    console.log('There has been an error', err);
  })
  .finally(() => {
    db.close();
    console.log('connection to the database closed!')
  })





