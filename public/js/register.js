function registerMe() 
    {

    var registerUser = new XMLHttpRequest();

    registerUser.open("POST", "ec2-3-85-51-19.compute-1.amazonaws.com:8080/profiles", true)
    registerUser.setRequestHeader("Content-Type", "application/json")
    registerUser.onload = function () 
        {
        console.log("ok");
        $('registerModal').modal('hide');
        $('#successModal').modal('show');
        }

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var userName = document.getElementById("username123").value;
    var gender = document.getElementById("gender").value;
    var phoneNumber = document.getElementById("phonenumber").value;
    var emailAddress = document.getElementById("emailaddress").value;
    var homeAddress = document.getElementById("homeaddress").value;
    var password = document.getElementById("password").value;

    // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // if (firstName == '') {
    //     alert('Please enter your first name.');
    // }
    // else if (lastName == '') {
    //     alert('Please enter your last name.');
    // }
    // else if (userName == '') {
    //     alert('Please enter a username.');
    // }
    // else if (gender == '') {
    //     alert('Please enter male or female.');
    // }
    // else if (phoneNumber == '') {
    //     alert('Please enter a valid phone number.');
    // }
    // else if (emailAddress == '') {
    //     alert('Please enter your email.');
    // }
    // else if (!filter.test(emailAddress)) {
    //     alert('Invalid email.');
    // }
    // else if (homeAddress == '') {
    //     alert('Please enter your home address.');
    // }
    // else if (password == '') {
    //     alert('Please enter Password.');
    // }
        
    alert('Registration Successful!, redirecting you to the main page now!');
    // Redirecting to other page or webste code. 
    window.location = "index.html";

    var payload = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        gender: gender,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress,
        homeAddress: homeAddress,
        password: password,
    };
    registerUser.send(JSON.stringify(payload));
}
