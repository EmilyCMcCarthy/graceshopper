
import db from '../../server/db/db';
const Character = db.model('character');
var Sequelize = require('sequelize');

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const Promise = require('bluebird');

describe('Character Model Tests', () => {

    beforeEach('Synchronize and clear database', () => db.sync({force: true}));


    describe('Sequelize models', function () {

        describe('Character Model', () => {
             var CharacterData = {name: "Albus Dumbledore",
            price: 100,
            imageUrl: "./characters/albus.jpg",
            description: "Be Dumbledore. Live in the magical world of Harry Potter... Be the headmaster at Hogwarts",
            inventory: 15
            };

            
            it('has the expected schema definition', () => {
                expect(Character.attributes.name).to.be.an('object');
               
            });

            it('can create a character', () => {
                return Character.create(CharacterData)
                .then(function (savedCharacter){
                    expect(savedCharacter.price).to.equal(100);
                    expect(savedCharacter.imageUrl).to.equal("./characters/albus.jpg");
                    expect(savedCharacter.name).to.equal('Albus Dumbledore');
                    expect(savedCharacter.description).to.equal("Be Dumbledore. Live in the magical world of Harry Potter... Be the headmaster at Hogwarts");
                    expect(savedCharacter.inventory).to.equal(15);
                })
            })
            it('Instance method can reduce inventory', () => {
                 return Character.create(CharacterData)
                .then(function (savedCharacter){
                    expect(savedCharacter.inventory).to.equal(15);
                    savedCharacter.decreaseInventory(1);
                    expect(savedCharacter.inventory).to.equal(14);
                })
            })

            it('Instance method will not reduce inventory if you ask to remove too many', () => {
                 return Character.create(CharacterData)
                .then(function (savedCharacter){
                    expect(savedCharacter.inventory).to.equal(15);
                    expect(savedCharacter.decreaseInventory(16)).to.be.an.instanceOf(Error);
                })
            })

            it('Instance method increaseInventroy increase inventory', () => {
                 return Character.create(CharacterData)
                 .then(function (savedCharacter){
                    expect(savedCharacter.inventory).to.equal(15);
                    savedCharacter.increaseInventory(5);
                    expect(savedCharacter.inventory).to.equal(20);
                })
            })
        });
    });
});

