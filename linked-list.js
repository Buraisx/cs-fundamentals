// //basic example
// var pointer1 = {name: "Batman"};
// var pointer2 = {name: "Spiderman"}

// pointer2 = pointer1;
// pointer2.name = "Bruce Wayne";

// console.log(pointer1.name) // now prints "Bruce Wayne"


// these make the list

function ListNode(data) {
  this.data = data;
  this.next = undefined;
}

function LinkedList() {
  this.root = undefined;
}

LinkedList.prototype.toString = function() {
  if (this.root === undefined) {
    return "undefined";
  }

  var current = this.root;
  var result = "";
  while (current !== undefined) {
    result += " " + current.data;
    current = current.next;
  }

  return result;
}


// Problem A: Remove the first node. We've done this one!
// 1 2 3
// 2 3
var listA = makeList([1, 2, 3]);

listA.root = listA.root.next;

console.log("Problem A solution (should be 2 3) is done for you:" + listA.toString());

// problem 1
// 1 3 4
// 1 2 3 4
var list1 = makeList([1, 3, 4]);
console.log("Problem 1: before is: " + list1.toString());

node = new ListNode(2);
node.next = list1.root.next;
list1.root.next = node;

console.log("Problem 1 solution (should be 1 2 3 4) is:" + list1.toString());
console.log()

// problem 2
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8
var list2 = makeList([1, 2, 3, 4, 5, 6, 7]);
console.log("Problem 2: before is:" + list2.toString());


var hardCodedSolution = true;
node = new ListNode(8);
if (hardCodedSolution) {
  list2.root.next.next.next.next.next.next.next = node;
} else {
  // start a node pointing to the front of the list.
  var current = list2.root;
  // go until current points to the last node in the list, without stepping off.
  while (current.next !== undefined) {
    // step the current node always to the next node.
    current = current.next;
  }
  // assign the new node at the last node in the list.
  current.next = node;
}


console.log("Problem 2 solution (should be 1 2 3 4 5 6 7 8) is:" + list2.toString());



// problem 3
// 1 2 3 4 5 6 8
// 1 2 3 4 5 6 7 8
var list3 = makeList([1, 2, 3, 4, 5, 6, 8]);

console.log("Problem 3 starter is:" + list3.toString());


node = new ListNode(7);

// start a node pointing to the front of the list.
var current = list3.root;

// go until finding the second to last node in the list.
while (current.next.next !== undefined) {
  // step the current node always to the next node.
  current = current.next;
}

// point the new node to the last node in the list
node.next = current.next;

// point the second to last node at our new node.
current.next = node;


console.log("Problem 3 solution (should be 1 2 3 4 5 6 7 8) is:" + list3.toString());


// problem 4
// 1 2 3
// 2 3
var list4 = makeList([1, 2, 3]);
console.log("Problem 4 starting is:" + list4.toString());



list4.root = list4.root.next;

console.log("Problem 4 solution (should be 2 3) is:" + list4.toString());


// problem 5
// 34 45 78
// undefined
var list5 = makeList([34, 45, 78]);
console.log("Problem 5 starting is:" + list5.toString());


list5.root = undefined;

console.log("Problem 5 solution (should be empty/undefined) is: " + list5.toString());


// problem 6
// 23 17 8
// 23 23 17 17 8 8
var list6 = makeList([23, 17, 8]);
console.log("Problem 6 starting is:" + list6.toString());


current = list6.root;
while (current !== undefined) {
  // create a new node with the current data
  node = new ListNode(current.data);

  // point the new code to the next node
  node.next = current.next;
  
  // point the current node to the new node
  current.next = node;
  
  // take two steps to the next node, skipping over the new node.
  current = current.next.next;
}

console.log("Problem 6 solution (should be 23 23 17 17 8 8) is:" + list6.toString());



// problem 7
// 3 4 5 6
// 6 5 4 3
var list7 = makeList([3, 4, 5, 6]);
console.log("Problem 7 starting is:" + list7.toString());


var first = list7.root;
var second = list7.root.next;
var third = list7.root.next.next;
var fourth = list7.root.next.next.next;

list7.root = fourth;
fourth.next = third;
third.next = second;
second.next = first;
first.next = undefined;

console.log("Problem 7 solution (should be 6 5 4 3) is:" + list7.toString());
console.log();


// DO NOT MODIFY!!
// Helper functions to set up lists for each problem.

function makeList(a) {
  var list = new LinkedList();
  list.root = new ListNode(a[0]);

  var current = list.root;
  for (var i = 1; i < a.length; i++) {
    current.next = new ListNode(a[i]);
    current = current.next;
  }

  return list;
}