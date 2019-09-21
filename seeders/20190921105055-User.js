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
    {firstName:"dinso",middleName:"anna",lastName:"yadav",mobile:"9022072238",address:"gggg",dob:"2019-06-24",email:"dinesh.s@transfinite.one",password:"password",isDisabled:"0",gender:"Male",userTypeID:"1",qualificationID:"5",organizationID:"1",lastLoginTime:null,createdAt:"2019-06-24 17:50:23",updatedAt:"2019-06-24 17:50:23",deletedAt:null},
    {firstName:"Ramasankar1",middleName:"anna", lastName:"yadav",mobile:"9898929294",address:"kurl",dob:"1970-01-01",email:"s1234@gmai.com",password:"password",isDisabled:"0",gender:"Male",userTypeID:"1",qualificationID:"2",organizationID:"1",lastLoginTime:null,createdAt:"2019-06-24 17:39:41",updatedAt:"2019-06-24 17:39:41",deletedAt:null},
    {firstName:"Ramasankar2",middleName:"anna", lastName:"yadav",mobile:"9898929295",address:"kurl",dob:"1970-01-01",email:"s1235@gmai.com",password:"password",isDisabled:"0",gender:"Male",userTypeID:"1",qualificationID:"3",organizationID:"1",lastLoginTime:null,createdAt:"2019-06-24 17:39:41",updatedAt:"2019-06-24 17:39:41",deletedAt:null},
    {firstName:"Ramasankar3",middleName:"anna", lastName:"yadav",mobile:"9898929296",address:"kurl",dob:"1970-01-01",email:"s1236@gmai.com",password:"password",isDisabled:"0",gender:"Female",userTypeID:"1",qualificationID:"1",organizationID:"1",lastLoginTime:null,createdAt:"2019-06-24 17:39:42",updatedAt:"2019-06-24 17:39:42",deletedAt:null},
    {firstName:"rahul",middleName:"anna", lastName:"yadav",mobile:"1234543213",address:"gggg",dob:"2019-06-24",email:"s99@gmail.com",password:"password",isDisabled:"0",gender:"Male",userTypeID:"1",qualificationID:"2",organizationID:"1",lastLoginTime:null,createdAt:"2019-06-24 17:50:23",updatedAt:"2019-06-24 17:50:23",deletedAt:null}
   ];
   return queryInterface.bulkInsert('Users',data,{});
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
