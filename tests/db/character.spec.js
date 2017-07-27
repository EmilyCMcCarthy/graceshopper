import db from '../../server/db';
const Character = db.model('character');

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;

describe('Character Model Tests', () => {

    beforeEach('Synchronize and clear database', () => db.sync({force: true}));

    after('Synchronize and clear database', () => db.sync({force: true}));

    describe('Sequelize models', function () {

        describe('Character Model', () => {

            // *Assertion translation*:
            // This assertion expects that the Character model will
            // put an `email` column in the users table.
            it('has the expected schema definition', () => {
                expect(Character.attributes.name).to.be.an('object');
            });

            describe('validations', () => {

                // *Assertion translation*:
                // The `email` column should be a required field.
                it('requires name', () => {
                    const character = Character.build();
                    return user.validate()
                        .then(err => {
                            expect(err).to.be.an('object');
                            expect(err.errors).to.contain.a.thing.with.properties({
                                path: 'name',
                                type: 'notNull Violation'
                            });
                        });
                });

            });

        });
    });
});       

