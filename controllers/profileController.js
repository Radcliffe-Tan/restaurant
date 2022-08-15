"use strict";

const ProfilesDB = require('../models/ProfilesDB');
const Profile = require('../models/Profile');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var secret = "secretkey";

var profilesDB = new ProfilesDB();


function getAllProfiles(request, respond) {

    profilesDB.getAllProfiles(function (error, result) {

        if (error) {

            respond.json(error);

        }

        else {

            respond.json(result);

        }

    });

}

function signUp(request, respond) {
    var profiles = new Profile(request.body.profileId, request.body.firstName, request.body.lastName, request.body.userName, request.body.gender, request.body.phoneNumber, request.body.emailAddress, request.body.profilePicture, request.body.homeAddress, bcrypt.hashSync(request.body.password, 10));
    profilesDB.signUp(profiles, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}

function updateProfile(request, respond) {

    var token = request.body.token
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    var gender = request.body.gender;
    var phoneNumber = request.body.phoneNumber;
    var emailAddress = request.body.emailAddress;
    var profilePicture = request.body.profilePicture;
    var homeAddress = request.body.homeAddress;

    try {
        var decoded = jwt.verify(token, secret);
        profilesDB.updateProfile(decoded, firstName, lastName, gender, phoneNumber, emailAddress, profilePicture, homeAddress, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({ result: "Invalid Token" })
    }
}

function deleteProfile(request, respond) {
    
    var profileId = request.params.profileId;
    profilesDB.deleteProfile(profileId, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function loginProfile(request, respond) {
    var userName = request.body.userName;
    var password = request.body.password;
    profilesDB.loginProfile(userName, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            if (result.length > 0) {
                const hash = result[0].password;
                var flag = bcrypt.compareSync(password, hash);
                if (flag) {
                    var token = jwt.sign(userName, secret);
                    respond.json({ result: token });
                } else {
                    respond.json({ result: "Invalid" });
                }
            } else {
                respond.json({ result: "Incorrect Username or Password" })
            }
        }
    })
}

function getProfile(request, respond) {

    var token = request.body.token;

    try {
        var decoded = jwt.verify(token, secret);
        profilesDB.getProfile(decoded, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });

    } catch (error) {
        respond.json({ result: "Invalid token" });
    }

}

module.exports = { getAllProfiles, signUp, updateProfile, deleteProfile, loginProfile, getProfile };