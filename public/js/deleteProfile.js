function deleteProfile() {
    var response = confirm("Are you sure you want to delete this Profile?");
    var profile_url = "/profiles";

    if (response == true) {
        var userID = sessionStorage.getItem("userid")
        var delete_profile_url = profile_url + "/" + userID;
        var deleteProfile = new XMLHttpRequest();
        deleteProfile.open("DELETE", delete_profile_url, true);

        deleteProfile.send();

        window.location.href="index.html"
        
        logoutMe();

    }
}