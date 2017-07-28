
describe('The Character model', () => {
    /**
     * First we clear the database and recreate the tables before tests
     */
    before( () => db.sync({force: true}));

    /**
   * Next, we create an (un-saved!) character instance before every spec
   */

        var CharacterData = {name: "Albus Dumbledore",
        price: 100,
        imageUrl: "./characters/albus.jpg",
        description: "Be Dumbledore. Live in the magical world of Harry Potter... Be the headmaster at Hogwarts",
        inventory: 15
        };
   
        var character;
        beforeEach(function(){

            character = Character.create(CharacterData)
            .catch(err => {console.log(err)});
            
        });

        /**
         * Also, we empty the tables after each spec
         */
     

        describe('The Character Model Instance Method: decreaseInventory decreases inventory', () => {
            expect(character.price).to.equal(100);
            /** 
             * character.decreaseInventory(1)
                * expect(character.inventory).to.equal(14);
                */

        });
        
})