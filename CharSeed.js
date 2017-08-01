
var Promise = require('bluebird');
var db = require('./server/db');
var Character = require('./server/db/models/character');
var Bluebird = require('bluebird')

// EI: don't forget to update character price levels
var characters = [

    {
        name: "Albus Dumbledore",
        price: 1000,
        imageUrl: "/characters/albus.jpg",
        description: "Be Dumbledore. Live in the magical world of Harry Potter... Be the headmaster at Hogwarts",
        inventory: 10
    },
    {
        name: "Wonder Woman",
        price: 2000,
        imageUrl: "/characters/ww.jpg",
        description: "Be Wonder Woman. Super Awesome",
        inventory: 3
    },
    {
        name: "Frodo Baggins",
        price: 400,
        imageUrl: "/characters/frodo.jpg",
        description: "Live in the houses with the circle doors. Protect the world. Take the One ring to be destroyed?",
        inventory: 14
    },
    {
        name: "Hermione Granger",
        price: 6000,
        imageUrl: "/characters/hermione.jpg",
        description: "The brightest witch of her Time. Enjoy the friendship of Ron and Harry",
        inventory: 17
    },
    {
        name: "Luke Skywalker",
        price: 3000,
        imageUrl: "/characters/luke_sky.jpg",
        description: "The force will be with you if you choose Luke Skywalker",
        inventory: 7
    }


]




db.sync({ force: true })
    .then(() => {
        return Bluebird.map(characters, character => {
            return Character.create(character)
        })
    })
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

