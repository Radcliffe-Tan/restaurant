function notification(){

    var notification = new XMLHttpRequest();
    console.log("please work")
    notification.open("POST", "https://hjgkflrqu8.execute-api.us-east-1.amazonaws.com/default/SNS,true);
    notification.setRequestHeader("Content-Type", "application/json");

    userid = sessionStorage.getItem("userid");
    username = sessionStorage.getItem("username");
    reviewmessage = document.getElementById("reviewBody").value;

    var payload = {userid:userid,username:username,reviewmessage:reviewBody};
    console.log(payload)
    notification.send(JSON.stringify(payload));

}
