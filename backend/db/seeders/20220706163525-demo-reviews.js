'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Reviews', [
      {
        
        userId: 1,
        spotId: 1,
        firstName: 'John',
        lastName: 'Smith',
        review: 'This was an awesome spot!',
        stars: 5,
       },
       {
        firstName: 'john',
        lastName: 'doe',
        userId: 2,
        spotId: 2,
        review: 'Would not recomend, I saw rats',
        stars: 2,
       },
       
      
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
   
     const Op = Sequelize.Op;
     return queryInterface.bulkDelete('Reviews', {
       userId: { [Op.in]: [1, 2] }
     }, {});
  }
};
