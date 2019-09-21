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
    {id:"1",label:"SSC",description:"ssc",createdAt:"2019-09-20 00:00:00",updatedAt:"2019-09-20 00:00:00"},
    {id:"2",label:"HSC",description:"hsc",createdAt:"2019-09-20 00:00:00",updatedAt:"2019-09-20 00:00:00"},
    {id:"3",label:"Bachelors",description:"bachelors",createdAt:"2019-09-20 00:00:00",updatedAt:"2019-09-20 00:00:00"},
    {id:"4",label:"Masters",description:"masters",createdAt:"2019-09-20 00:00:00",updatedAt:"2019-09-20 00:00:00"},
    {id:"5",label:"Doctorate",description:"doctorate",createdAt:"2019-09-20 00:00:00",updatedAt:"2019-09-20 00:00:00"}
   ];
   return queryInterface.bulkInsert('Qualifications',data,{});
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
