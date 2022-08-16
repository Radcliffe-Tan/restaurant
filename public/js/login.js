function loginMe(){

    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "http://ec2-54-234-197-49.compute-1.amazonaws.com:8080/login", true)
    loginUser.setRequestHeader("Content-Type", "application/json")
    loginUser.onload = function () 
        {
        $('#loginModal').modal('hide');

        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if((token.result != "Invalid") & (token.result != "Incorrect Username or Password"))
            {
                $('#successModal').modal('show');
                document.getElementById("registerMenu").style.display="none";
                document.getElementById("loginMenu").style.display="none";
                document.getElementById("logoutMenu").style.display="block";
                document.getElementById("profileMenu").style.display="block";
                sessionStorage.setItem("token", token.result);
            }
            else
            {
                $('#failModal').modal('show');
            }

        }
    var userName = document.getElementById("usernameLogin").value;
    sessionStorage.setItem("usernameName", userName)
    console.log(userName)
    var password = document.getElementById("passwordLogin").value;
    var payload = {
                    userName: userName,
                    password: password,
                  };
            
    loginUser.send(JSON.stringify(payload))

    
}
