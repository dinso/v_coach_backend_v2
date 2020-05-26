'use strict';
export default (sequelize, DataTypes) => {
    const Subscription = sequelize.define('Subscription', {
        expiryTime: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: DataTypes.DATE
    }, {});
    Subscription.associate = function(models) {
        // associations can be defined here
        Subscription.belongsTo(models.Users, {
            foreignKey: {
                name: "userId",
                allowNull: false
            }
        });
        Subscription.belongsTo(models.CourseCategory, {
            foreignKey: {
                name: "courseCategoryId",
                allowNull: false
            }
        });
        Subscription.belongsTo(models.Payment, {
            foreignKey: {
                name: "paymentId",
                allowNull: false
            }
        })
    };
    return Subscription;
};