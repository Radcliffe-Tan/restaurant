var express = require("express"); //using the express web framework

var reviewController = require('./controllers/reviewController'); // set reviewController to the reviewController class
var restaurantController = require('./controllers/restaurantController'); // set restaurantController to the restaurantController class
var profileController = require('./controllers/profileController'); // set userController to the userController class
var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

app.route('/restaurants').get(restaurantController.getAllRestaurants); // activate the getAllRestaurants method if the route is GET(method) /restaurants

app.route('/restaurantinfo').get(restaurantController.getAllRestaurantInfo);
app.route('/restaurantinfo').post(restaurantController.addRestaurantInfo);

app.route('/search').post(restaurantController.searchRestaurant);

app.route('/reviews').get(reviewController.getAllReviews); // activate the getAllReviews method if the route is GET(method) /reviews
app.route('/reviews').post(reviewController.addReview); // activate the addReviews method if the route is POST(method) /reviews
app.route('/reviews/:reviewId').put(reviewController.updateReview); // activate the updateReviews method if the route is PUT(method) /reviews/:id
app.route('/reviews/:id').delete(reviewController.deleteReview); // activate the deleteReview method if the route is DELETE(method) /reviews/:id

app.route('/profiles').get(profileController.getAllProfiles);
app.route('/profiles').post(profileController.signUp);
app.route('/profiles').put(profileController.updateProfile);
app.route('/profiles/:profileId').delete(profileController.deleteProfile);

app.route('/login').post(profileController.loginProfile);

app.route('/userinformation').post(profileController.getProfile);

app.route('/restaurant/western').get(restaurantController.westernRestaurant);
app.route('/restaurant/chinese').get(restaurantController.chineseRestaurant);
app.route('/restaurant/east').get(restaurantController.eastRestaurant);
app.route('/restaurant/north').get(restaurantController.northRestaurant);

app.listen(8080, "ec2-54-234-197-49.compute-1.amazonaws.com"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://ec2-54-234-197-49.compute-1.amazonaws.com:8080"); // output to console
