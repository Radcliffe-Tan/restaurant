"use strict";

class Profile {

    constructor(profileId, firstName, lastName, userName, gender, phoneNumber, emailAddress, profilePicture, homeAddress, password) {

        this.profileId = profileId;

        this.firstName = firstName;

        this.lastName = lastName;

        this.userName = userName;

        this.gender = gender;

        this.phoneNumber = phoneNumber;

        this.emailAddress = emailAddress;

        this.profilePicture = profilePicture;

        this.homeAddress = homeAddress;

        this.password = password;

    }

    getProfileId(){

        return this.profileId

    }

    getFirstName(){

        return this.firstName

    }

    getLastName(){

        return this.lastName

    }

    getUserName(){

        return this.userName

    }

    getGender(){

        return this.gender

    }

    getPhoneNumber(){

        return this.phoneNumber

    }

    getEmailAddress(){

        return this.emailAddress

    }

    getProfilePicture(){

        return this.profilePicture

    }

    getHomeAddress(){

        return this.homeAddress

    }

    getPassword(){

        return this.password

    }

    // getToken(){
        
    //     return this.token
    // }
 
    setProfileId(profileId){

        this.profileId = profileId
    }

    setFirstName(firstName){

        this.firstName = firstName
    }

    setLastName(lastName){

        this.lastName = lastName

    }

    setUserName(userName){

        this.userName = userName

    }

    setGender(gender){

        this.gender = gender

    }

    setPhoneNumber(phoneNumber){

        this.phoneNumber = phoneNumber

    }

    setEmailAddress(emailAddress){

        this.emailAddress = emailAddress

    }

    setProfilePicture(profilePicture){

        this.profilePicture = profilePicture

    }

    setHomeAddress(homeAddress){

        this.homeAddress = homeAddress

    }

    setPassword(password){
    
        this.password = password

    }

}
module.exports = Profile;