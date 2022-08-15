var mysql = require('mysql');

var connection = mysql.createConnection
({

    host:'database-1.chpqgfxxbsc5.us-east-1.rds.amazonaws.com',

    port: '3306',

    user:'admin',

    password:'2101135H',

    database: 'database-1'

});



connection.connect(err => {  // test out connection and console.log error if there is one

    if (err) throw err;

    console.log('Connected To DB');

});

module.exports = connection;
