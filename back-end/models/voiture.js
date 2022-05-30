'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voiture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Voiture.belongsTo(models.Login, {
        foreignKey: {
          allowNull : false
        }
      })
    }
  };
  Voiture.init({
    marque: DataTypes.STRING,
    serie_number: DataTypes.STRING,
    person_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Voiture',
  });
  return Voiture;
};