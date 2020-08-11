/* Andrés santos */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('task', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
            validate: {
                isInt: true
            }
        },
        title: {
            type: DataTypes.String,
            allowNull: false,
            field: 'title'
        },
        description: {
            type: DataTypes.String,
            allowNull: false,
            field: 'description'
        },
        finished: {
            type: DataTypes.String,
            allowNull: false,
            field: 'finished'
        },
        name: {
            type: DataTypes.String,
            allowNull: false,
            field: 'name'
        },
        date: {
            type: DataTypes.Date,
            allowNull: false,
            field: 'date'
        },

    }, {
        timestamps: false,
        tableName: 'task'
    });
};
