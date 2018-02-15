const mysql = require('mysql');

const connection = mysql.createConnection(
  process.env.JAWSDB_URL
);

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to database as id: ' + connection.threadId);
});

module.exports = connection;