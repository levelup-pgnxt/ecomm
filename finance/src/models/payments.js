'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payments.hasOne(models.Invoices, {
        foreignKey: 'paymentId'
      })
    }
  }
  Payments.init({
    valor: {
      type: DataTypes.DECIMAL(10,2),
      notNull: true,
      validate: {
        min: 0
      }
    },
    nome: {
      type: DataTypes.STRING,
      notNull: true
    },
    numeroCartao: {
      type: DataTypes.STRING,
      notNull: true,
      isCreditCard: true
    },
    expiracaoCartao: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        dataExpiracaoCartao(data) {
          if(!/^\d{4}-\d{2}$/.test(data)) {
            throw new Error('O formato da data de expiração do cartão é yyyy-MM')
          }
        }
      }
    },
    cvvCartao: {
      type: DataTypes.INTEGER,
      notNull: true,
      len: [3]
    },
    status: {
      type: DataTypes.STRING,
      notNull: true,
      isIn: {
        args: [["CRIADO", "CONFIRMADO", "CANCELADO"]],
        msg: 'Dado do tipo status inválido'
      }
    }
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};