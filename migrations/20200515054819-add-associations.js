'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Users', // name of Source model
        'role_id', // name of the key we're adding
        {
          type: Sequelize.UUID,
          references: {
            model: 'Roles', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Users', // name of Source model
        'role_id' // key we want to remove
    );
  }
};
