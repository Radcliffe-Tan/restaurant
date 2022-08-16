function encode(){

    var selectedfile = document.getElementById("myinput").files; //Get the file/picture that the user has selected
    if (selectedfile.length > 0){ // When selected one file/picture this loop will run
        var imagefile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent){ //After reading the file, this function will run
            profilePicture = fileLoadedEvent.target.result; //Get the based-64 image
            document.getElementById('profilepictureProfile').src = profilePicture; //Add the file/picture to the profile page
        }
    }
    fileReader.readAsDataURL(imagefile); //When this code is executed, the function above will run
}

function updatedProfile(){

    var updateUser = new XMLHttpRequest();

    updateUser.open("PUT", "http://ec2-3-85-51-19.compute-1.amazonaws.com:8080/profiles", true)
    updateUser.setRequestHeader("Content-Type", "application/json")
    updateUser.onload = function () 
        {
        $('#successModal').modal('hide');
        }

    firstName = document.getElementById("firstnameProfile").value
    lastName = document.getElementById("lastnameProfile").value
    userName = document.getElementById("usernameProfile").value
    gender = document.getElementById("genderProfile").value
    phoneNumber = document.getElementById("phonenumberProfile").value
    emailAddress = document.getElementById("emailaddressProfile").value
    profilePicture = document.getElementById("profilepictureProfile").src 
    homeAddress = document.getElementById("homeaddressProfile").value
    password = document.getElementById("passwordProfile").value

    var payload = {
                    token: token,
                    firstName: firstName,
                    lastName:lastName,
                    userName: userName,
                    gender: gender,
                    phoneNumber: phoneNumber,
                    emailAddress: emailAddress,
                    profilePicture: profilePicture,
                    homeAddress: homeAddress,
                    password:password,
                  };
            
    updateUser.send(JSON.stringify(payload))

    console.log(payload)

}
