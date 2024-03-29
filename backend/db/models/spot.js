'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     
      //we need to add roomnumber and amenities 
      //and type of house 
     Spot.belongsTo(models.User, {
       foreignKey: 'ownerId', as: 'Owner'
     })
     Spot.hasMany(models.Review, {
       foreignKey: 'spotId'   , onDelete: 'CASCADE', hooks: true
     })
      Spot.hasMany(models.Image, {
        foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true
      })
      // Spot.hasMany(models.Image, {
      //   foreignKey: 'spotId', as: 'previewImage', onDelete: 'CASCADE', hooks: true
      // })
      

    }
  }
  Spot.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    ownerId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'Users',
      //   key: 'id'
      // }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    previewImage: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
     numReviews: {
      type: DataTypes.INTEGER,
    },
    avgStarRating: {
      type: DataTypes.DECIMAL(3, 2),
    },
  }, {
    sequelize,
    modelName: 'Spot',
    defaultScope: {
      attributes: {
        exclude: ['numReviews', 'avgStarRating']
      }
    }
  });
  return Spot;
};