$(document).ready(function(){

    var getProfile = new XMLHttpRequest();

    getProfile.open("POST", "ec2-3-85-51-19.compute-1.amazonaws.com:8080/userinformation", true);
    getProfile.setRequestHeader("Content-Type", "application/json");
    getProfile.onload = function (){

        var profile = JSON.parse(getProfile.responseText);
        console.log(getProfile.responseText);

        id = profile[0].profileId
        firstName = profile[0].firstName;
        lastName = profile[0].lastName;
        userName = profile[0].userName;
        gender = profile[0].gender;
        phoneNumber = profile[0].phoneNumber;
        emailAddress = profile[0].emailAddress;
        picture = profile[0].profilePicture;
        homeAddress = profile[0].homeAddress;
        password = profile[0].password;

        //document.getElementById("id").value = id;
        document.getElementById("firstnameProfile").value = firstName;
        document.getElementById("lastnameProfile").value = lastName;
        document.getElementById("usernameProfile").value = userName;
        document.getElementById("genderProfile").value = gender;
        document.getElementById("phonenumberProfile").value = phoneNumber;
        document.getElementById("emailaddressProfile").value = emailAddress;
        document.getElementById("profilepictureProfile").src = picture;
        document.getElementById("homeaddressProfile").value = homeAddress;
        document.getElementById("passwordProfile").value = password;

        sessionStorage.setItem("userid", id)
    }

    var payload = {token:token};
    getProfile.send(JSON.stringify(payload));


})
