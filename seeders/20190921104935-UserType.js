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
   const data = [
     {id:"1",label:"admin",description:"administrator",createdAt:"2019-09-20 00:00:00",updatedAt:"2019-09-20 00:00:00"},
     {id:"2",label:"org",description:"organization",createdAt:"2019-09-20 00:00:00",updatedAt:"2019-09-20 00:00:00"},
     {id:"3",label:"user",description:"android user",createdAt:"2019-09-20 00:00:00",updatedAt:"2019-09-20 00:00:00"},
   ];
   return queryInterface.bulkInsert('UserTypes',data,{});
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
