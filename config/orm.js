const connection = require('./connection.js');

const orm = {
  selectAll: function(table, cb) {
    const query = 'SELECT * FROM ??';
    connection.query(
      query,
      [table],
      function (err, allRows) {
        if (err) throw err;
        cb(allRows);
      }
    )
  },

  insertOne: function(table, columns, values, cb) {
    const query = 'INSERT INTO ?? (??) VALUES (?)';
    connection.query(
      query,
      [table, columns, values],
      function (err, res) {
        if (err) throw err;
        cb(res);
      }
    )
  },

  updateOne: function(table, columnsEqValues, value, cb) {
    const query = 'UPDATE ?? SET ? WHERE id = ?';
    connection.query(
      query,
      [table, columnsEqValues, value],
      function (err, res) {
        if (err) throw err;
        cb(res);
      }
    )
  }
};

module.exports = orm;