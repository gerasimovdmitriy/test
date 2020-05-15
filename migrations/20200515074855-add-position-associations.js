'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'OrderPositions', // name of Source model
        'order_id', // name of the key we're adding
        {
          type: Sequelize.UUID,
          references: {
            model: 'Orders', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'OrderPositions', // name of Source model
        'order_id' // key we want to remove
    );
  }
};
