function fetchReviews() {
    var request = new XMLHttpRequest();

    request.open('GET', review_url, true);

    //This command starts the calling of the review api
    request.onload = function () {
        //get all the reviews records into our reviews array
        review_array = JSON.parse(request.responseText);
        console.log(review_array);
    };

    request.send();
}

//This function is to display all the reviews of the restaurants
//whenever the user click on the "reviews" button
function showReviews(element) {
    document.getElementById("emptyReview").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].restaurantName;
    document.getElementById("reviewBody").textContent = "";

    for (var i = 0; i < review_array.length; i++) {
        if (review_array[i].restaurant_id === restaurant_array[item].restaurantId) //Left side foreign key, right side primary key to compare restaurant Id -> To check if the name of the restaurant is correct
        {
            document.getElementById("emptyReview").innerHTML = "";
            selectedRestaurantId = restaurant_array[item].restaurantId;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + review_array[i].comments + "</p>               \
                                    <small>by " + review_array[i].userName + " @ " + review_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("reviewBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < review_array[i].ratings; j++) {
                console.log(i);
                star += "<img src='images/thumbsupcolor.png' style='width:50px' />";
            }
            star += "<i class='far fa-trash-alt fa-2x edit ' data-dismiss='modal' item='" + i + "' onClick='deleteReview(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editReviewModal' data-dismiss='modal' item='" + i + "' onClick='editReview(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}

function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userReviews").value = "";
    document.getElementById("username").value = "";
}

function addReview() {
    
    var token = sessionStorage.getItem("token"); //Check for session storage
    console.log(token);
   // if (token != null) {

        var review = new Object();
        review.restaurant_id = restaurant_array[currentIndex].restaurantId; // restaurant Id is required by server to create new review
        review.profile_id = 5;
        //review.restaurantName = restaurant_array[currentIndex].restaurantName; // restaurant name is required by server to create new review
        review.userName = document.getElementById("username").value; // Value from HTML input text
        review.ratings = rating;
        review.comments = document.getElementById("userReviews").value; // Value from HTML input text
        review.profilePicture = null;
        review.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;


        var postReview = new XMLHttpRequest(); // new HttpRequest instance to send review

        postReview.open("POST", review_url, true); //Use the HTTP POST method to send data to server

        postReview.setRequestHeader("Content-Type", "application/json");
        postReview.onload = function () {
            console.log("new review sent");
            fetchReviews(); // fetch all reviews again so that the web page can have updated reviews.     
        };
        // Convert the data in review object to JSON format before sending to the server.
        postReview.send(JSON.stringify(review));
//    }
//     else {
//         $('#reviewfailModal').modal('show')
//     }
}

//This function allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var popcorns = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let popcorn of popcorns) {
        popcorn.setAttribute("src", thumbsup);
    }
    changeThumbsupImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changeThumbsupImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", thumbsupcolor);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", thumbsupcolor);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", thumbsupcolor);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", thumbsupcolor);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", thumbsupcolor);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", thumbsupcolor);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", thumbsupcolor);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", thumbsupcolor);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", thumbsupcolor);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", thumbsupcolor);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", thumbsupcolor);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", thumbsupcolor);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", thumbsupcolor);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", thumbsupcolor);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", thumbsupcolor);
            rating = 5;
            break;
    }
}

function editReview(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("editnickname").value = review_array[item].userName;
    document.getElementById("edituserComments").value = review_array[item].comments;
    console.log(review_array[item].ratings);
    displayColorThumb('thumb', review_array[item].ratings);
}

//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorThumb(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", thumbsup);
    }
    changeThumbsupImage(num, classTarget);
}
//This function sends the reviews data to the server for updating
function updateReview() {
    var token = sessionStorage.getItem("token");  //Check for session storage
    console.log(token);
    if (token != null) {
        var response = confirm("Are you sure you want to update this review?");
        if (response == true) {
            var edit_review_url = review_url + "/" + review_array[currentIndex].reviewId;
            var updateReview = new XMLHttpRequest(); // new HttpRequest instance to send request to server
            updateReview.open("PUT", edit_review_url, true); //The HTTP method called 'PUT' is used here as we are updating data
            updateReview.setRequestHeader("Content-Type", "application/json");
            review_array[currentIndex].userName = document.getElementById("editnickname").value;
            review_array[currentIndex].comments = document.getElementById("edituserComments").value;
            review_array[currentIndex].ratings = rating;
            updateReview.onload = function () {
                fetchReviews();
            };
            updateReview.send(JSON.stringify(review_array[currentIndex]));
        }
    }
    else {
        $('#reviewfailModal').modal('show')
    }
}


function deleteReview(element) 
{

    var token = sessionStorage.getItem("token");  //Check for session storage
    console.log(token);
    if (token != null) 
    {
        var response = confirm("Are you sure you want to delete this review?");

        if (response == true) {
            var item = element.getAttribute("item"); //get the current item
            var delete_review_url = review_url + "/" + review_array[item].reviewId;
            var eraseReview = new XMLHttpRequest();
            eraseReview.open("DELETE", delete_review_url, true);
            eraseReview.onload = function () {
                fetchReviews();
            };
            eraseReview.send();
        }
    }
        else {
            $('#reviewfailModal').modal('show')
            }
}

function notification(){

    var notification = new XMLHttpRequest();
    console.log("please work")
    notification.open("POST", "https://hjgkflrqu8.execute-api.us-east-1.amazonaws.com/default/SNS",true);
    notification.setRequestHeader("Content-Type", "application/json");

    userid = sessionStorage.getItem("userid");
    username = sessionStorage.getItem("username");
    reviewmessage = document.getElementById("userReviews").value;

    notification.onload = function () {
        log = JSON.parse(notification.responseText);
        console.log(log);
    };
    
    var payload = {userid:userid,username:username,reviewmessage:reviewmessage};
    console.log(payload)
    notification.send(JSON.stringify(payload));
}
