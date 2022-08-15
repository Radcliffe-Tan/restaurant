"use strict";

const RestaurantinfoDB = require('../models/RestaurantinfoDB');
const RestaurantsDB = require('../models/RestaurantsDB');
const Restaurant = require('../models/Restaurant');

var restaurantsDB = new RestaurantsDB();
var restaurantinfoDB = new RestaurantinfoDB();


function getAllRestaurants(request, respond){

    restaurantsDB.getAllRestaurants(function(error, result){

        if(error){

            respond.json(error);

        }

        else{

            respond.json(result);

        }

    });
}
function getAllRestaurantInfo(request, respond){

    restaurantinfoDB.getAllRestaurantInfo(function(error, result){

        if(error){

            respond.json(error);

        }

        else{

            respond.json(result);

        }

    });
}
function addRestaurantInfo(request, respond){
    var restaurant = new Restaurant(null, request.body.restaurantInfoId, request.body.restaurantName, request.body.restaurantPicture, request.body.openingHour, request.body.location, request.body.address, request.body.telephoneNumber, request.body.ratings, request.body.numberOfReview, request.body.description, request.body.map);
    restaurantinfoDB.addRestaurantInfo(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
function searchRestaurant(request, respond){
    var restaurantName = request.body.restaurantName;
    restaurantsDB.searchRestaurant(restaurantName, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
function chineseRestaurant(request, respond){
    restaurantsDB.chineseRestaurant(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function westernRestaurant(request, respond){
    restaurantsDB.westernRestaurant(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function northRestaurant(request, respond){
    restaurantsDB.northRestaurant(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function eastRestaurant(request, respond){
    restaurantsDB.eastRestaurant(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllRestaurants, getAllRestaurantInfo, addRestaurantInfo, searchRestaurant, chineseRestaurant, westernRestaurant, northRestaurant, eastRestaurant};