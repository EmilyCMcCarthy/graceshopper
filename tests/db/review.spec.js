import db from '../../server/db/db';
const Review = db.model('review');
var Sequelize = require('sequelize');

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const Promise = require('bluebird');

describe('Review Model Tests', () => {

    beforeEach('Synchronize and clear database', () => db.sync({force: true}));


    describe('Sequelize models', function () {

        describe('Review Model', () => {
             var ReviewData = {content: "Be Dumbledore."
            };

            it('has the expected schema definition', () => {
                expect(Review.attributes.content).to.be.an('object');

            });

            it('Validation for content can not be more then 200 characters', () => {
                 return Review.create(ReviewData)
                .then(function (buildReview){
                    // return buildReview.validate()
                 throw new Error('Validation error')
                })
                .catch( function(error){
                     expect(error).to.be.an.instanceOf(Error);
                    expect(error.message).to.contain('Only 200 characters allowed!')
                })


        });
    });
});
});
