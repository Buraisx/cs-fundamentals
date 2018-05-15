//basic example
var pointer1 = {name: "Batman"};
var pointer2 = {name: "Spiderman"}

pointer2 = pointer1;
pointer2.name = "Bruce Wayne";

console.log(pointer1.name) // now prints "Bruce Wayne"