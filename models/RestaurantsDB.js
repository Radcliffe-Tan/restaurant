"use strict";

//reference the connection file and make a connection to mysql
var db = require('../db-connection');

class RestaurantsDB{
    getAllRestaurants(callback){
        var sql = "SELECT * from restaurant_review.restaurant";
        db.query(sql, callback);
    }
    searchRestaurant(keyword, callback){
        var key = "%" + keyword + "%";
        var sql = "SELECT * from restaurant_review.restaurant where restaurantName like ?";
        return db.query(sql,[key],callback);
    }
    chineseRestaurant(callback){
        var sql = "SELECT * from restaurant_review.restaurant where categories like 'Chinese'";
        db.query(sql, callback);
    }
    westernRestaurant(callback){
        var sql = "SELECT * from restaurant_review.restaurant where categories = 'Western'";
        db.query(sql, callback);
    }
    northRestaurant(callback){
        var sql = "SELECT * from restaurant_review.restaurant where compass like 'North'";
        db.query(sql, callback);
    }
    eastRestaurant(callback){
        var sql = "SELECT * from restaurant_review.restaurant where compass like 'East'";
        db.query(sql, callback);
    }
}

module.exports = RestaurantsDB;
