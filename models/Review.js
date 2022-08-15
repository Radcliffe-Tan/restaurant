"use strict";

class Review {

    constructor(reviewId, restaurantId, profileId, userName, ratings, comments, profilePicture, datePosted,) {

        this.reviewId = reviewId;

        this.restaurantId = restaurantId;

        this.profileId = profileId;

        this.userName = userName;

        this.ratings = ratings;

        this.comments = comments;

        this.profilePicture = profilePicture;

        this.datePosted = datePosted;

    }

    getReviewId() {

        return this.reviewId;

    }

    getRestaurantId() {

        return this.restaurantId;

    }

    getProfileId() {

        return this.profileId;

    }

    getComments() {

        return this.comments
    }

    getUsername(){

        return this.userName
    }
    
    getRatings(){

        return this.ratings
    }

    getDatePosted(){

        return this.datePosted
    }

    getProfilePicture(){
        
        return this.profilePicture
    }

    setreviewId(reviewId){

        this.reviewId = reviewId;
    }

    setRestaurantId(restaurantId) {

        this.restaurantId = restaurantId;

    }

    setProfileId(profileId) {

        this.profileId = profileId;

    }

    setComments(comments) {

        this.comments = comments;
    }

    setUsername(userName){

        this.userName = userName;
    }
    
    setRating(ratings){

        this.ratings = ratings;
    }

    setDatePosted(datePosted){

        this.datePosted = datePosted;
    }

    setProfilePicture(profilePicture){

        this.profilePicture = profilePicture;
    }
}

module.exports = Review;