'use strict';
export default (sequelize, DataTypes) => {
    const Video = sequelize.define('Video', {
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.STRING,
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    Video.associate = function(models) {
        // associations can be defined here
        Video.belongsTo(models.MCQ, {
            foreignKey: {
                name: "mcqId",
                allowNull: true
            }
        });
    };
    return Video;
};