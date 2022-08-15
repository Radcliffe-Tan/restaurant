"use strict";

class Restaurant {

    constructor(id, restaurantInfoId, restaurantName, restaurantPicture, openingHour, location, address, telephoneNumber, ratings, numberOfReview, description, map){
    

        this.id = id;

        this.restaurantInfoId = restaurantInfoId;

        this.restaurantName = restaurantName;

        this.restaurantPicture = restaurantPicture;

        this.openingHour = openingHour;

        this.location = location;

        this.address = address;

        this.telephoneNumber = telephoneNumber;

        this.ratings = ratings;
        
        this.numberOfReview = numberOfReview;

        this.description = description;

        this.map = map;
    }

    getId() {

        return this.id;

    }

    getRestaurantInfoId() {

        return this.restaurantInfoId;

    }

    getRestaurantName() {

        return this.restaurantName;

    }

    getRestaurantPicture() {

        return this.restaurantPicture
    }

    getOpeningHour(){

        return this.openingHour
    }
    
    getLocation(){

        return this.location
    }

    getAddress(){

        return this.address
    }

    getTelephoneNumber(){
        
        return this.telephoneNumber
    }

    getRatings(){

        return this.ratings
    }

    getNumberOfReview(){

        return this.numberOfReview
    }

    getDescription(){
        
        return this.description
    }

    getMap(){

        return this.map
    }

    setRestaurantId(restaurantId) {

        this.restaurantId = restaurantId;

    }

    setRestaurantInfoId(restaurantInfoId) {

        this.restaurantInfoId = restaurantInfoId;

    }

    setRestaurantName(restaurantName) {

        this.restaurantName = restaurantName;
    }

    setRestaurantPicture(restaurantPicture){

        this.restaurantPicture = restaurantPicture;
    }
    
    setOpeningHour(openingHour){

        this.openingHour = openingHour;
    }

    setLocation(location){

        this.location = location;
    }

    setAddress(address){

        this.address = address;
    }

    setTelephoneNumber(telephoneNumber){

        this.telephoneNumber = telephoneNumber
    }

    setRatings(ratings){

        this.ratings = ratings
    }

    setNumberOfReview(numberOfReview){

        this.numberOfReview = numberOfReview
    }

    setDescription(description){

        this.description = description
    }

    setMap(map){

        this.map = map
    }

}

module.exports = Restaurant;