const orm = require('../config/orm.js');

const burger = {
  selectAll: function(cb) {
    console.log("selectAll");
    orm.selectAll(
      "burgers", 
      function(allRows) {
        cb(allRows);
      }
    );
  },

  insertOne: function(columns, values, cb) {
    console.log("insertOne");
    orm.insertOne(
      "burgers", 
      columns, 
      values, 
      function(result) {
        cb(result);
      }
    );
  },

  updateOne: function(columnsEqValues, value, cb) {
    console.log("updateOne");
    orm.updateOne(
      "burgers", 
      columnsEqValues,
      value, 
      function(result) {
        cb(result);
      }
    );
  },
};

module.exports = burger;