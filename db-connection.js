var mysql = require('mysql');

var connection = mysql.createConnection
({

    host:'ubuntu@ec2-184-73-134-236.comput-1.amazonaws.com',

    port: '3306',

    user:'admin',

    password:'2101135H',

    database: 'restaurant_review'

});



connection.connect(err => {  // test out connection and console.log error if there is one

    if (err) throw err;

    console.log('Connected To DB');

});

module.exports = connection;
