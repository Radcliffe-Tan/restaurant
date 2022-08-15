"use strict";

var db = require("../db-connection");

const profiles = require("./Profile");

class ProfilesDB {
  getAllProfiles(callback) {
    var sql = "SELECT * from restaurant_review.profile";
    db.query(sql, callback);
  }

  getProfile(username, callback) {
    var sql = "SELECT distinct profileId, firstName, lastName, userName, gender, phoneNumber, emailAddress, profilePicture, homeAddress, password from restaurant_review.profile WHERE userName = ?";
    db.query(sql, [username], callback);
  }

  signUp(profiles, callback) {
    var sql = "INSERT INTO profile (firstName, lastName, userName, gender, phoneNumber, emailAddress, profilePicture, homeAddress, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [profiles.getFirstName(), profiles.getLastName(), profiles.getUserName(), profiles.getGender(), profiles.getPhoneNumber(), profiles.getEmailAddress(), profiles.getProfilePicture(), profiles.getHomeAddress(), profiles.getPassword()], callback);
  }
  
  updateProfile(userName, firstName, lastName, gender, phoneNumber, emailAddress, profilePicture, homeAddress, callback) {
    
    var sql = "UPDATE profile SET firstName = ?, lastName = ?, gender = ?, phoneNumber = ?, emailAddress = ?, profilePicture = ?, homeAddress = ? WHERE userName = ?";
    return db.query(sql, [firstName, lastName, gender, phoneNumber, emailAddress, profilePicture, homeAddress,userName], callback);
  }

  deleteProfile(ProfileId, callback) {
    
    var sql = "DELETE from profile WHERE profileId = ?";
    return db.query(sql, [ProfileId], callback);
  }

  loginProfile(username, callback) {
    
    var sql = "SELECT password from restaurant_review.profile WHERE userName = ?";
    db.query(sql, [username], callback);
  }
  
}

module.exports = ProfilesDB;