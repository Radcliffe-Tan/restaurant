function logoutMe(){

    $('#registerMenu').show();
    $('#loginMenu').show();
    $('#logoutMenu').hide();
    $('#profileMenu').hide();
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("userid")
    sessionStorage.removeItem("usernameName")
    location.reload();

    window.location.href="index.html"
}