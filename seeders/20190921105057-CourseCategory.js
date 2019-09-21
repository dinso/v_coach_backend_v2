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
   let data = [
    {id:"1",name:"Main Category 1",description:"Main Description 1",containsVideo:"0",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-03-13 00:00:00",updatedAt:"2019-03-13 00:00:00",deletedAt:null},
    {id:"2",name:"Sub Category 1",description:"Parent Main Category 1",containsVideo:"0",organizationId:"1",parentCourseCategoryID:"1",videoId:null,createdAt:"2019-03-13 00:00:00",updatedAt:"2019-03-13 00:00:00",deletedAt:null},
    {id:"3",name:"Sub Category 2",description:"Parent Main Category 1",containsVideo:"1",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-03-13 00:00:00",updatedAt:"2019-03-13 00:00:00",deletedAt:null},
    {id:"4",name:"Sub Category 2",description:"Parent Main Category 7",containsVideo:"1",organizationId:"1",parentCourseCategoryID:null,videoId:"1",createdAt:"2019-05-20 00:00:00",updatedAt:"2019-03-13 00:00:00",deletedAt:null},
    {id:"5",name:"Sub Category 3",description:"Parent Main Category 1",containsVideo:"1",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-03-13 00:00:00",updatedAt:"2019-03-13 00:00:00",deletedAt:null},
    {id:"6",name:"Sub Category 1",description:"Parent Main Category 7",containsVideo:"1",organizationId:"1",parentCourseCategoryID:null,videoId:"1",createdAt:"2019-03-13 00:00:00",updatedAt:"2019-03-13 00:00:00",deletedAt:null},
    {id:"7",name:"Main Category 2",description:"Main Description 2",containsVideo:"0",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-05-20 00:00:00",updatedAt:"2019-03-13 00:00:00",deletedAt:null},
    {id:"8",name:"Main Category 3",description:"Main Description 3",containsVideo:"1",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-05-20 00:00:00",updatedAt:"2019-03-13 00:00:00",deletedAt:null},
    {id:"9",name:"Main Category",description:null,containsVideo:"0",organizationId:"1",parentCourseCategoryID:"1",videoId:null,createdAt:"2019-05-20 18:58:48",updatedAt:"2019-05-20 18:58:48",deletedAt:null},
    {id:"10",name:"Main Category",description:null,containsVideo:"0",organizationId:"1",parentCourseCategoryID:"1",videoId:null,createdAt:"2019-05-21 16:38:46",updatedAt:"2019-05-21 16:38:46",deletedAt:null},
    {id:"11",name:"Main Category",description:null,containsVideo:"0",organizationId:"1",parentCourseCategoryID:"1",videoId:null,createdAt:"2019-05-21 17:19:31",updatedAt:"2019-05-21 17:19:31",deletedAt:null},
    {id:"12",name:"Main Category1",description:null,containsVideo:"0",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-06-19 18:27:17",updatedAt:"2019-06-19 18:27:17",deletedAt:null},
    {id:"13",name:"Main Category",description:"asdasdasd",containsVideo:"0",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-06-19 18:28:51",updatedAt:"2019-06-19 18:28:51",deletedAt:null},
    {id:"14",name:"Main Category",description:"asdasdasd",containsVideo:"0",organizationId:"1",parentCourseCategoryID:"1",videoId:null,createdAt:"2019-06-19 18:36:37",updatedAt:"2019-06-19 18:36:37",deletedAt:null},
    {id:"15",name:"Main Category",description:"asdasdasd",containsVideo:"0",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-06-20 14:54:20",updatedAt:"2019-06-20 14:54:20",deletedAt:null},
    {id:"16",name:"Main Category sandy",description:"this is main Categorty",containsVideo:"0",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-06-20 14:54:54",updatedAt:"2019-06-20 14:54:54",deletedAt:null},
    {id:"17",name:"sUB Category sandy",description:"this is SUB Categorty",containsVideo:"0",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-06-20 14:55:41",updatedAt:"2019-06-20 14:55:41",deletedAt:null},
    {id:"18",name:"s1","description":"s1",containsVideo:"0",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-06-20 18:47:10",updatedAt:"2019-06-20 18:47:10",deletedAt:null},
    {id:"19",name:"s",description:"d",containsVideo:"0",organizationId:"1",parentCourseCategoryID:"4",videoId:null,createdAt:"2019-06-20 18:49:14",updatedAt:"2019-06-20 18:49:14",deletedAt:null},
    {id:"20",name:"d",description:"d",containsVideo:"0",organizationId:"1",parentCourseCategoryID:"4",videoId:null,createdAt:"2019-06-20 18:52:54",updatedAt:"2019-06-20 18:52:54",deletedAt:null},
    {id:"21",name:"sandeep",description:"sandeep",containsVideo:"0",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-06-20 18:53:30",updatedAt:"2019-06-20 18:53:30",deletedAt:null},
    {id:"22",name:"sandeep",description:"sandeep",containsVideo:"0",organizationId:"1",parentCourseCategoryID:"8",videoId:null,createdAt:"2019-06-20 18:53:50",updatedAt:"2019-06-20 18:53:50",deletedAt:null},
    {id:"23",name:"sandeep1",description:"sandeep1",containsVideo:"0",organizationId:"1",parentCourseCategoryID:"8",videoId:null,createdAt:"2019-06-20 18:54:21",updatedAt:"2019-06-20 18:54:21",deletedAt:null},
    {id:"24",name:"e",description:"e",containsVideo:"0",organizationId:"1",parentCourseCategoryID:null,videoId:null,createdAt:"2019-06-21 11:36:11",updatedAt:"2019-06-21 11:36:11",deletedAt:null},
    {id:"25",name:"t",description:"t",containsVideo:"0",organizationId:"1",parentCourseCategoryID:"24",videoId:null,createdAt:"2019-06-21 11:36:24",updatedAt:"2019-06-21 11:36:24",deletedAt:null},
    {id:"26",name:"sandeep",description:"sandeep",containsVideo:"0",organizationId:"1",parentCourseCategoryID:"24",videoId:null,createdAt:"2019-06-21 11:42:51",updatedAt:"2019-06-21 11:42:51",deletedAt:null}
    ]; 
    return queryInterface.bulkInsert('CourseCategories',data,{});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('CourseCategories',null,{});
  }
};
