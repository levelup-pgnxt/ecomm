module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments', {
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    cardName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'card_name',
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'card_number',
      validate: {
        isCreditCard: true,
      }
    },
    expirationDate: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'expiration_date',
      validate: {
        is:  /^[2-9][0-9][2-9][3-9]-(0[1-9]|10|11|12)$/
      }
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[0-9]{3}$/
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'CRIADO',
      validate: {
        isIn: [['CRIADO', 'CONFIRMADO','CANCELADO']],
    }
    },
  }, {
    underscored: true,
    tableName: 'Payments',
    timestamps: false,
  });

  return Payments;
}
