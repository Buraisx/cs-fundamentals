var totalChoices = 10; // number of times to run the loop
var maxValue = 100; // max value of the random value generated

// make two lists to keep track of an unknown number of items
var odds = new List(); // dynamically grow this for odd numbers!
var evens = new List(); // dynamically grow this for even numbers!

// Both these two lists are currently empty

// Loop 10 times
for (var i = 0; i < totalChoices; i++) {

  // generate random numbers
  var choice = Math.floor(Math.random() * maxValue);

  // append the number to the correct list - growing the list
  if (choices % 2 == 0) {
    evens.append(choice);  
  } else {
    odd.append(choice);
  }
}