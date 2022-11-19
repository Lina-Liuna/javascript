var mysql = require('mysql12');

var con = mysql.createConnection({
    host: "localhost",
    user: "lina",
    password: "lina"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

con.connect(function(err){
    if (err) throw err;
    console.log("connected!");
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("Result:" + result)
    });

});

