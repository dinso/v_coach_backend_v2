'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   const data=[
     {id:"1",label:"test",description:"this is a dummy video",url:"this is adummy url",mcqId:"1",createdAt:"2019-09-20 00:00:00",updatedAt:"2019-09-20 00:00:00"}
   ];
   return queryInterface.bulkInsert('Videos',data,{});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
