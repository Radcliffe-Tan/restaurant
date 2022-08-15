"use strict";

var db = require('../db-connection');
const restaurant = require("./Restaurant");

class RestaurantinfoDB{
    getAllRestaurantInfo(callback){
        var sql = "SELECT * from restaurant_review.restaurantinfo";
        db.query(sql, callback);
    }
    addRestaurantInfo(restaurant, callback){
        var sql = "INSERT INTO restaurantinfo (restaurantName, restaurantPicture, openingHour, location, address, telephoneNumber, ratings, numberOfReview, description, map) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [restaurant.getRestaurantName(), restaurant.getRestaurantPicture(), restaurant.getOpeningHour(), restaurant.getLocation(), restaurant.getAddress(), restaurant.getTelephoneNumber(), restaurant.getRatings(), restaurant.getNumberOfReview(), restaurant.getDescription(), restaurant.getMap()], callback);
    }
}

module.exports = RestaurantinfoDB;