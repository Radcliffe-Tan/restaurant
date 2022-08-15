"use strict";
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');

var reviewsDB = new ReviewsDB();

function getAllReviews(request, respond){
    reviewsDB.getAllReviews(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}
function addReview(request, respond){
    var now = new Date();
    var review = new Review(null, request.body.restaurant_id, request.body.profile_id, request.body.userName, request.body.ratings, request.body.comments, request.body.profilePicture, now.toString());
    reviewsDB.addReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function updateReview(request, respond){
    var now = new Date();
    var comment = new Review(parseInt(request.params.reviewId), request.body.restaurant_id, request.body.profile_id, request.body.userName, request.body.ratings, request.body.comments, request.body.profilepicture, now.toString());
    reviewsDB.updateReview(comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteReview(request, respond){
    var reviewId = request.params.id;
    reviewsDB.deleteReview(reviewId, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllReviews, addReview, updateReview, deleteReview};
