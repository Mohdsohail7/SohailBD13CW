let express = require("express");
const { send } = require("process");
let app = express();

// Question 1:
// Create an endpoint that takes a number as a query parameter and returns if the number is positive or negative.
app.get('/check-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result = "";

  if(number >= 0) {
    result = "Number is Positive";
  } else {
    result = "Number is Negative";
  }

  res.send(result);
});

// Question 2:
// Create an endpoint that takes a number as a query parameter and returns if the number is even or odd.
app.get('/check-even-odd', (req, res) => {
  let number = parseFloat(req.query.number);
  let result = "";

  if(number % 2 === 0) {
    result = "Number is even";
  } else {
    result = "Number is odd";
  }

  res.send(result);
});

// Question 3:
// Create an endpoint that takes a boolean query parameter isLoggedIn and returns if the user is logged in.
app.get('/check-login', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === "true";
  console.log(typeof isLoggedIn);
  let result = "";

  if(isLoggedIn) {
    result = "User is Logged In";
  } else {
    result = "User is not Logged In";
  }

  res.send(result);
});

// Question 4:
// Create an endpoint that takes an age as a query parameter and returns if the user is eligible for a discount (age over 65).
app.get('/check-discount', (req, res) => {
  let age = parseInt(req.query.age);
  let result;

  if(age > 65) {
    result = "user is eligible for a discount";
  } else{
    result = "user is not eligible for a discount";
  }
  
  res.send(result);
});

// Question 5:
// Create an endpoint that takes a number as a query parameter and returns if the number is positive, negative, or zero.
app.get('/check-number-type', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;

  if(number > 0) {
    result = "number is positive";
  } else if(number < 0) {
    result = "number is negative";
  } else {
    result = "number is zero";
  }
  
  res.send(result);
});

// Question 6:
// Create an endpoint that takes a temperature as a query parameter and returns if the temperature is cold (below 15°C), warm (15°C to 25°C), or hot (above 25°C).
app.get('/check-temperature', (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result;

  if(temperature < 15) {
    result = "temperature is cold";
  } else if(temperature < 25) {
    result = "temperature is Warm";
  } else {
    result = "temperature is hot"
  }
  
  res.send(result);
});

// Question 7:
// Create an endpoint that takes a steps as a query parameter and returns if the user's activity level is low (below 5000), moderate (5000 to 10000), or high (above 10000).
app.get('/check-activity-level', (req, res) => {
  let steps = parseInt(req.query.steps);
  let result;

  if(steps < 5000) {
    result = "activity level is low";
  } else if(steps > 5000 & steps < 10000) {
    result = "activity level is moderate";
  } else {
    result = "activity level is high";
  }

  res.send(result);
});

// Question 8:
// Create an endpoint that takes likes as a query parameter and returns if a social media post has low (below 100), medium (100 to 500), or high engagement (above 500).
app.get('/check-engagement', (req, res) => {
  let likes = parseInt(req.query.likes);
  let result;

  if(likes < 100) {
    result = "Engagement level is low";
  } else if(likes > 100 & likes < 500) {
    result = "Engagement level is medium";
  } else {
    result = "Engagement level is high"
  }

  res.send(result);
});


// server start here
let port = 3000;
app.listen(port, () => {
  console.log("Server is Running on port number is " + port);
});