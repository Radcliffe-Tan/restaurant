var mysql = require('mysql');

var connection = mysql.createConnection
({

    host:'184.73.134.236',

    port: '3306',

    user:'root',

    password:'cdev',

    database: 'restaurant_review'

});



connection.connect(err => {  // test out connection and console.log error if there is one

    if (err) throw err;

    console.log('Connected To DB');

});

module.exports = connection;
