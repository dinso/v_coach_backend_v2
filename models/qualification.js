'use strict';
export default (sequelize, DataTypes) => {
    const Qualification = sequelize.define('Qualification', {
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.STRING
    }, {});
    Qualification.associate = function(models) {
        // associations can be defined here
    };
    return Qualification;
};