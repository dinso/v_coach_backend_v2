'use strict';
export default (sequelize, DataTypes) => {
    const UserType = sequelize.define('UserType', {
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.STRING
    }, {});
    UserType.associate = function(models) {
        // associations can be defined here
    };
    return UserType;
};