const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "family_guy",
});

connection.connect();

const mySQLQuery = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (results) resolve(results);

      reject(err);
    });
  });
};

module.exports = mySQLQuery;
