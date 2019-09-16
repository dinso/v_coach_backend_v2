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
    {firstName:"rahul",middleName:"anna",lastName:"yadav",mobile:"9022072238",address:"gggg",dob:"2019-06-24",email:"dinesh.s@transfinite.one",isDisabled:"0",gender:"Male",lastLoginTime:null,createdAt:"2019-06-24 17:50:23",updatedAt:"2019-06-24 17:50:23",deletedAt:null,userTypeID:"2",qualificationID:"5",organizationID:null},
    {firstName:"Ramasankar1",middleName:"anna", lastName:"yadav",mobile:"9898929294",address:"kurl",dob:"1970-01-01",email:"s1234@gmai.com",isDisabled:"0",gender:"Male",lastLoginTime:null,createdAt:"2019-06-24 17:39:41",updatedAt:"2019-06-24 17:39:41",deletedAt:null,userTypeID:"1",qualificationID:"2",organizationID:null},
    {firstName:"Ramasankar2",middleName:"anna", lastName:"yadav",mobile:"9898929295",address:"kurl",dob:"1970-01-01",email:"s1235@gmai.com",isDisabled:"0",gender:"Male",lastLoginTime:null,createdAt:"2019-06-24 17:39:41",updatedAt:"2019-06-24 17:39:41",deletedAt:null,userTypeID:"1",qualificationID:"3",organizationID:null},
    {firstName:"Ramasankar3",middleName:"anna", lastName:"yadav",mobile:"9898929296",address:"kurl",dob:"1970-01-01",email:"s1236@gmai.com",isDisabled:"0",gender:"Female",lastLoginTime:null,createdAt:"2019-06-24 17:39:42",updatedAt:"2019-06-24 17:39:42",deletedAt:null,userTypeID:"1",qualificationID:"1",organizationID:null},
    {firstName:"rahul",middleName:"anna", lastName:"yadav",mobile:"1234543213",address:"gggg",dob:"2019-06-24",email:"s99@gmail.com",isDisabled:"0",gender:"Male",lastLoginTime:null,createdAt:"2019-06-24 17:50:23",updatedAt:"2019-06-24 17:50:23",deletedAt:null,userTypeID:"1",qualificationID:"2",organizationID:null}
   ];
   return queryInterface.bulkInsert('user',data,{});
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
