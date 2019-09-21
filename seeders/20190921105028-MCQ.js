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
    {id:"1",Q1:"test q1",Q2:"test q2",Q3:"test q3",A1:"test ans1",A2:"test ans2",A3:"test ans3",A1O1:"test ans1 op2",A1O2:"test ans1 op2",A2O1:"test ans2 op1",A2O2:"test ans2 op2",A3O1:"test ans3 op1",A3O2:"test ans3 op2",createdAt:"2019-09-20 00:00:00",updatedAt:"2019-09-20 00:00:00"}
   ];
   return queryInterface.bulkInsert('MCQs',data,{});
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
