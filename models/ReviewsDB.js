"use strict";

var db = require('../db-connection');

class ReviewsDB{
    getAllReviews(callback){
        var sql = "SELECT * from restaurant_review.review";
        db.query(sql, callback);
    }

    addReview(review, callback){
        var sql = "INSERT INTO review (restaurant_Id, profile_Id, userName, ratings, comments, profilePicture, datePosted) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getRestaurantId(), review.getProfileId(), review.getUsername(), review.getRatings(), review.getComments(), review.getProfilePicture(), review.getDatePosted()], callback);
    }
    updateReview(review, callback){
        var sql = "UPDATE review SET profile_id = ?, restaurant_id = ?, userName = ?, ratings = ?, comments = ?, profilePicture = ?, datePosted = ? WHERE reviewId = ?";
        return db.query(sql, [review.getProfileId(),review.getRestaurantId(), review.getUsername(), review.getRatings(), review.getComments(), review.getProfilePicture(), review.getDatePosted(), review.getReviewId(),], callback);
    }
    deleteReview(reviewID, callback){
        var sql = "DELETE from review WHERE reviewId = ?";
        return db.query(sql, [reviewID], callback);
    }
}

module.exports = ReviewsDB;