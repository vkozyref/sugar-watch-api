'use strict';
module.exports = function(app) {
  var values = require('../controllers/valuesController');

  // todoList Routes
  app.route('/values')
    .get(values.get_all_values)
    .post(values.create_a_value);


  app.route('/values/:valueId')
    .get(values.read_a_value)
    .put(values.update_a_value)
    .delete(values.delete_a_value);
};