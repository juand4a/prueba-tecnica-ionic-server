const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const TaskModel = sequelize.define("tasks", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    completed: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
    },
    synced: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
    }

},{
    tableName:"tasks",
    timestamps:false
})

module.exports=TaskModel