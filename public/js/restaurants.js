//This function is to call the restaurants api and get all the restaurants
function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the restaurants records into our restaurants array        
        restaurant_array = JSON.parse(request.responseText);
        //Fetch the reviews as well        
        fetchReviews();
        console.log(restaurant_array) // output to console        
        //call the function so as to display all restaurant titles
        displayRestaurants(category);
    };
    //This command starts the calling of the restaurants web api    
    request.send();
}

function displayRestaurants(category) {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        var thumbnail = restaurant_array[count].restaurantPicture;
        var title = restaurant_array[count].restaurantName;
        var cell = '<div class = "col-lg-4">' +
            '<div class="card box text-center " style="width: 18rem;">' +
            '<img class="card-img-top" src=' + thumbnail + ' alt="Card image cap">' +
            '<div class="card-body">' +
            '<p class="card-text">' + title + '</p>' +
            '<a class = "btn btn-info" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' + count + '> Details </a>' +
            '<a class = "btn btn-info" data-toggle="modal" data-target="#reviewModal" class="card-title" onClick="showReviews(this)" item=' + count + '> Reviews </a>' +
            '</div>' +
            '</div>'
        '</div>';
        table.insertAdjacentHTML('beforeend', cell);
        restaurantCount++;
    }

    message = restaurantCount + " Restaurants " + category;
    document.getElementById("summary").textContent = message;
    // document.getElementById("parent").textContent = "";

}

//This function is to display the "home" page
function home() {
    category = "Home";
    displayMovies(category);
    document.getElementById("home").classList.add("active");
    document.getElementById("about").classList.remove("active");
    document.getElementById("register").classList.remove("active");
    document.getElementById("login").classList.remove("active");
}

function about() {
    category = "About";
    displayMovies(category);
    document.getElementById("home").classList.remove("active");
    document.getElementById("about").classList.add("active");
    document.getElementById("register").classList.remove("active");
    document.getElementById("login").classList.remove("active");
}

function register() {
    category = "Register";
    displayMovies(category);
    document.getElementById("home").classList.remove("active");
    document.getElementById("about").classList.remove("active");
    document.getElementById("register").classList.add("active");
    document.getElementById("login").classList.remove("active");
}

function login() {
    category = "Login";
    displayMovies(category);
    document.getElementById("home").classList.remove("active");
    document.getElementById("about").classList.remove("active");
    document.getElementById("register").classList.remove("active");
    document.getElementById("login").classList.add("active");
}

function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurantName").textContent = restaurant_array[item].restaurantName;
    document.getElementById("restaurantPicture").src = restaurant_array[item].restaurantPicture;
    document.getElementById("openingHour").textContent = restaurant_array[item].openingHour;
    document.getElementById("location").textContent = restaurant_array[item].location;
    document.getElementById("address").textContent = restaurant_array[item].address;
    document.getElementById("telehponeNumber").textContent = restaurant_array[item].telephoneNumber;
    document.getElementById("description").textContent = restaurant_array[item].description;
    document.getElementById("map").src = restaurant_array[item].map;
}

function searchRestaurants() {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        if (restaurant_array[count].restaurantName.toLowerCase().includes(document.getElementById("restaurantSearch").value.toLowerCase())) {
            var thumbnail = restaurant_array[count].restaurantPicture;
            var title = restaurant_array[count].restaurantName;
            var cell = '<div class = "col-lg-4">' +
                '<div class="card box text-center " style="width: 18rem;">' +
                '<img class="card-img-top" src=' + thumbnail + ' alt="Card image cap">' +
                '<div class="card-body">' +
                '<p class="card-text">' + title + '</p>' +
                '<a class = "btn btn-info" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' + count + '> Details </a>' +
                '<a class = "btn btn-info" data-toggle="modal" data-target="#reviewModal" class="card-title" onClick="showReviews(this)" item=' + count + '> Reviews </a>' +
                '</div>' +
                '</div>'
            '</div>';
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;

        }
    }
    message = "Restaurants";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

function displayChinese() {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    const chineseCheck = document.querySelector("#filterChinese");
    console.log(chineseCheck.checked);

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    if (chineseCheck.checked == true) {
        for (var count = 0; count < totalRestaurants; count++) {
            if (restaurant_array[count].categories == "Chinese") {
                var thumbnail = restaurant_array[count].restaurantPicture;
                var title = restaurant_array[count].restaurantName;
                var cell = '<div class = "col-lg-4">' +
                    '<div class="card box text-center " style="width: 18rem;">' +
                    '<img class="card-img-top" src=' + thumbnail + ' alt="Card image cap">' +
                    '<div class="card-body">' +
                    '<p class="card-text">' + title + '</p>' +
                    '<a class = "btn btn-info" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' + count + '> Details </a>' +
                    '<a class = "btn btn-info" data-toggle="modal" data-target="#reviewModal" class="card-title" onClick="showReviews(this)" item=' + count + '> Reviews </a>' +
                    '</div>' +
                    '</div>'
                '</div>';
                table.insertAdjacentHTML('beforeend', cell);
                restaurantCount++;

            }
        }
        message = "Restaurants";
        document.getElementById("summary").textContent = message;
        document.getElementById("parent").textContent = "";
    }
    else {
        table.innerHTML = "";
        totalRestaurants = restaurant_array.length;
        for (var count = 0; count < totalRestaurants; count++) {
            var thumbnail = restaurant_array[count].restaurantPicture;
            var title = restaurant_array[count].restaurantName;
            var cell = '<div class = "col-lg-4">' +
                '<div class="card box text-center " style="width: 18rem;">' +
                '<img class="card-img-top" src=' + thumbnail + ' alt="Card image cap">' +
                '<div class="card-body">' +
                '<p class="card-text">' + title + '</p>' +
                '<a class = "btn btn-info" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' + count + '> Details </a>' +
                '<a class = "btn btn-info" data-toggle="modal" data-target="#reviewModal" class="card-title" onClick="showReviews(this)" item=' + count + '> Reviews </a>' +
                '</div>' +
                '</div>'
            '</div>';
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;

        }
        message = "Restaurants";
        document.getElementById("summary").textContent = message;
        document.getElementById("parent").textContent = "";
    }
}

function displayWestern() {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    const westernCheck = document.querySelector("#filterWestern");
    console.log(westernCheck.checked);

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    if (westernCheck.checked == true) {
        for (var count = 0; count < totalRestaurants; count++) {
            if (restaurant_array[count].categories == "Western") {
                var thumbnail = restaurant_array[count].restaurantPicture;
                var title = restaurant_array[count].restaurantName;
                var cell = '<div class = "col-lg-4">' +
                    '<div class="card box text-center " style="width: 18rem;">' +
                    '<img class="card-img-top" src=' + thumbnail + ' alt="Card image cap">' +
                    '<div class="card-body">' +
                    '<p class="card-text">' + title + '</p>' +
                    '<a class = "btn btn-info" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' + count + '> Details </a>' +
                    '<a class = "btn btn-info" data-toggle="modal" data-target="#reviewModal" class="card-title" onClick="showReviews(this)" item=' + count + '> Reviews </a>' +
                    '</div>' +
                    '</div>'
                '</div>';
                table.insertAdjacentHTML('beforeend', cell);
                restaurantCount++;

            }
        }
        message = "Restaurants";
        document.getElementById("summary").textContent = message;
        document.getElementById("parent").textContent = "";
    }
    else {
        table.innerHTML = "";
        totalRestaurants = restaurant_array.length;
        for (var count = 0; count < totalRestaurants; count++) {
            var thumbnail = restaurant_array[count].restaurantPicture;
            var title = restaurant_array[count].restaurantName;
            var cell = '<div class = "col-lg-4">' +
                '<div class="card box text-center " style="width: 18rem;">' +
                '<img class="card-img-top" src=' + thumbnail + ' alt="Card image cap">' +
                '<div class="card-body">' +
                '<p class="card-text">' + title + '</p>' +
                '<a class = "btn btn-info" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' + count + '> Details </a>' +
                '<a class = "btn btn-info" data-toggle="modal" data-target="#reviewModal" class="card-title" onClick="showReviews(this)" item=' + count + '> Reviews </a>' +
                '</div>' +
                '</div>'
            '</div>';
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;

        }
        message = "Restaurants";
        document.getElementById("summary").textContent = message;
        document.getElementById("parent").textContent = "";
    }
}

function displayNorth() {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    const northCheck = document.querySelector("#filterNorth");
    console.log(northCheck.checked);

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    if (northCheck.checked == true) {
        for (var count = 0; count < totalRestaurants; count++) {
            if (restaurant_array[count].compass == "North") {
                var thumbnail = restaurant_array[count].restaurantPicture;
                var title = restaurant_array[count].restaurantName;
                var cell = '<div class = "col-lg-4">' +
                    '<div class="card box text-center " style="width: 18rem;">' +
                    '<img class="card-img-top" src=' + thumbnail + ' alt="Card image cap">' +
                    '<div class="card-body">' +
                    '<p class="card-text">' + title + '</p>' +
                    '<a class = "btn btn-info" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' + count + '> Details </a>' +
                    '<a class = "btn btn-info" data-toggle="modal" data-target="#reviewModal" class="card-title" onClick="showReviews(this)" item=' + count + '> Reviews </a>' +
                    '</div>' +
                    '</div>'
                '</div>';
                table.insertAdjacentHTML('beforeend', cell);
                restaurantCount++;

            }
        }
        message = "Restaurants";
        document.getElementById("summary").textContent = message;
        document.getElementById("parent").textContent = "";
    }
    else {
        table.innerHTML = "";
        totalRestaurants = restaurant_array.length;
        for (var count = 0; count < totalRestaurants; count++) {
            var thumbnail = restaurant_array[count].restaurantPicture;
            var title = restaurant_array[count].restaurantName;
            var cell = '<div class = "col-lg-4">' +
                '<div class="card box text-center " style="width: 18rem;">' +
                '<img class="card-img-top" src=' + thumbnail + ' alt="Card image cap">' +
                '<div class="card-body">' +
                '<p class="card-text">' + title + '</p>' +
                '<a class = "btn btn-info" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' + count + '> Details </a>' +
                '<a class = "btn btn-info" data-toggle="modal" data-target="#reviewModal" class="card-title" onClick="showReviews(this)" item=' + count + '> Reviews </a>' +
                '</div>' +
                '</div>'
            '</div>';
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;

        }
        message = "Restaurants";
        document.getElementById("summary").textContent = message;
        document.getElementById("parent").textContent = "";
    }
}

function displayEast() {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    const eastCheck = document.querySelector("#filterEast");
    console.log(eastCheck.checked);

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    if (eastCheck.checked == true) {
        for (var count = 0; count < totalRestaurants; count++) {
            if (restaurant_array[count].compass == "East") {
                var thumbnail = restaurant_array[count].restaurantPicture;
                var title = restaurant_array[count].restaurantName;
                var cell = '<div class = "col-lg-4">' +
                    '<div class="card box text-center " style="width: 18rem;">' +
                    '<img class="card-img-top" src=' + thumbnail + ' alt="Card image cap">' +
                    '<div class="card-body">' +
                    '<p class="card-text">' + title + '</p>' +
                    '<a class = "btn btn-info" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' + count + '> Details </a>' +
                    '<a class = "btn btn-info" data-toggle="modal" data-target="#reviewModal" class="card-title" onClick="showReviews(this)" item=' + count + '> Reviews </a>' +
                    '</div>' +
                    '</div>'
                '</div>';
                table.insertAdjacentHTML('beforeend', cell);
                restaurantCount++;

            }
        }
        message = "Restaurants";
        document.getElementById("summary").textContent = message;
        document.getElementById("parent").textContent = "";
    }
    else {
        table.innerHTML = "";
        totalRestaurants = restaurant_array.length;
        for (var count = 0; count < totalRestaurants; count++) {
            var thumbnail = restaurant_array[count].restaurantPicture;
            var title = restaurant_array[count].restaurantName;
            var cell = '<div class = "col-lg-4">' +
                '<div class="card box text-center " style="width: 18rem;">' +
                '<img class="card-img-top" src=' + thumbnail + ' alt="Card image cap">' +
                '<div class="card-body">' +
                '<p class="card-text">' + title + '</p>' +
                '<a class = "btn btn-info" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' + count + '> Details </a>' +
                '<a class = "btn btn-info" data-toggle="modal" data-target="#reviewModal" class="card-title" onClick="showReviews(this)" item=' + count + '> Reviews </a>' +
                '</div>' +
                '</div>'
            '</div>';
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;

        }
        message = "Restaurants";
        document.getElementById("summary").textContent = message;
        document.getElementById("parent").textContent = "";
    }
}

function notification(){

    var notification = new XMLHttpRequest();
    console.log("please work")
    notification.open("POST", "https://hjgkflrqu8.execute-api.us-east-1.amazonaws.com/default/SNS",true);
    notification.setRequestHeader("Content-Type", "application/json");

    userid = sessionStorage.getItem("userid");
    username = sessionStorage.getItem("username");
    reviewmessage = document.getElementById("reviewBody").value;

    notification.onload = function () {
        log = JSON.parse(notification.responseText);
        console.log(log);
    };
    
    var payload = {userid:userid,username:username,reviewmessage:reviewmessage};
    console.log(payload)
    notification.send(JSON.stringify(payload));

}

