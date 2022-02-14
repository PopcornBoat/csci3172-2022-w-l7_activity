// Get the current time and hour
// HINT: you will have to first get the full date and then get the time and hour of the day
// You may explore the use of JS built-in functions





// Create a variable to store your greeting message 



// Based on the hour you get, you need to set the conditions you want your script to check
// in order to render a specific message
// for now we want to say 'Good Morning' if it is earlier than 12PM



// otherwise we want to check if it is earlier than 3PM and let the visitor know
// 'Hey! I think we are in class!'



// For any other time (i.e., later than 3PM, we just want to say 'Welcome'




// This is an example of an if statement, or a conditional statement
// the JS interpreter checks if a conditions is true, if it is then it executes the code
// If the condition is FALSE, then it skips the code and moves onto the next one (i.e., our else if conditional)
// If that second condition is also FALSE then it moves to our last conditional, our else statement
// IF statements always end in an ELSE statement, if you want to give options in-between we always use ELSE IF



// Then, we use the DOM, and calling the 'getElementById( )' method and its innerHTML property to add some HTML for us onto our webpage
// we basically want to show the return result in <h2 id="greeting"></h2>




// In this section of our script, we want to access the values the user entered into our form
// and add them together
// First we declare our variables for the two values


// Now, let's use the DOM now to access a value in our form and show it back to us in an alert( ) box
// First, we'll creatr a function to store the input values into the variables we declared
// We'll enclose that code block in a function, getNumbers( )

// Store the values from the form into the variables we declared above





// Call the getNumbers() function to import the values the user enteres into the form into 
// this function

// We perform our addition on the two values


// Display the result of the calculation

// retrieve the buttons
let form = document.querySelector("form");
let add_btn = document.querySelector("#add-btn");
let sub_btn = document.querySelector("#sub-btn");
let mul_btn = document.querySelector("#mul-btn");
let div_btn = document.querySelector("#div-btn");

// get the values from input box
function fetchVal() {
	let number_1 = document.querySelector('input[name="number1"]').value;
	let number_2 = document.querySelector('input[name="number2"]').value;
	return res = [number_1, number_2];
}

// show result on page
function show(result){
	let pResult = document.querySelector("#result");
	pResult.textContent = "result: " + result;
}

// listen to events
add_btn.addEventListener("click", function (e) {
	e.preventDefault();
	let num = fetchVal();
	let result = calculate(num[0], num[1], 'add');
	show(result);
}, false);

sub_btn.addEventListener("click", function (e) {
	e.preventDefault();
	let num = fetchVal();
	let result = calculate(num[0], num[1], 'subtract');
	show(result);
}, false);

mul_btn.addEventListener("click", function (e) {
	e.preventDefault();
	let num = fetchVal();
	let result = calculate(num[0], num[1], 'multiply');
	show(result);
}, false);

div_btn.addEventListener("click", function (e) {
	e.preventDefault();
	let num = fetchVal();
	let result = calculate(num[0], num[1], 'divide');
	show(result);
}, false);

// a simple calculator, get from my L5 activity
function calculate(a, b, c) {
	a = Number(a);
	b = Number(b);
	//	let a,b,c;
	if (c == 'add') {
		let addition = a + b;
		console.log(addition);
		return (addition);
	} else if (c == 'subtract') {
		let subtract = a - b;
		console.log(subtract);
		return (subtract);
	} else if (c == 'multiply') {
		let multiply = a * b;
		console.log(multiply);
		return (multiply);
	} else {
		let divide = a / b;
		console.log(divide);
		return (divide);
	}
}




