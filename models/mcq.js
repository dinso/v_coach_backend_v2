'use strict';
export default (sequelize, DataTypes) => {
    const MCQ = sequelize.define('MCQ', {
        Q1: DataTypes.STRING,
        Q2: DataTypes.STRING,
        Q3: DataTypes.STRING,
        A1: DataTypes.STRING,
        A2: DataTypes.STRING,
        A3: DataTypes.STRING,
        A1O1: DataTypes.STRING,
        A1O2: DataTypes.STRING,
        A2O1: DataTypes.STRING,
        A2O2: DataTypes.STRING,
        A3O1: DataTypes.STRING,
        A3O2: DataTypes.STRING
    }, {});
    MCQ.associate = function(models) {
        // associations can be defined here
    };
    return MCQ;
};