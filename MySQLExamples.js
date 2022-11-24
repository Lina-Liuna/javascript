var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lina",
});

con.execute('select * from mysql.servers', function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available

    // If you execute same statement again, it will be picked from a LRU cache
    // which will save query preparation time and give better performance
  });
