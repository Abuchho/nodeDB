const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 8889,
    user     : 'root',
    password : '',
    database : 'node_db'
});
 
connection.connect();



let query = 'UPDATE fruit SET fruitName = "red delicious apple", quantity = 4 WHERE id = 1' ;

    connection.query(query, function(err,results) { 
        if ( err ) {
            console.error(err);
        }

        console.log(results);
});

connection.end();