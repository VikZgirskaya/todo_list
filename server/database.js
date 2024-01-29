const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './todoitems_db.sqlite'
});

class ToDoItem extends Model {}
ToDoItem.init({
  title: DataTypes.STRING,
  actual: DataTypes.BOOLEAN
}, { sequelize, modelName: 'item' });

sequelize.sync();

module.exports = { ToDoItem };
