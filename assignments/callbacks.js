// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// TEST 1
const test1 = getLength(items, length => `I have ${length} items!`);
console.log(test1); // 'I have 4 items!'

// TEST 2
function purchasedNew(count) {
  return `I bought all ${count} items yesterday!`;
}
const test2 = getLength(items, purchasedNew);
console.log(test2); // 'I bought all 4 items yesterday!'


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
// TEST 3
const test3 = last(items, favorite => `I love ${favorite}!`);
console.log(test3); // 'I love Gum!'

// TEST 4
function purchasedToday(element) {
  return `I bought ${element} today!`;
}
const test4 = last(items, purchasedToday);
console.log(test4); // 'I bought Gum today!'


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
// TEST 5
const test5 = sumNums(1, 4, total => `We ate ${total} apples.`);
console.log(test5); // 'We ate 5 apples.'

// TEST 6
function classSchedule(credits) {
  return `I am taking ${credits} courses this semester.`
}
const test6 = sumNums(3, 1, classSchedule);
console.log(test6); // 'I am taking 4 courses this semester.'


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

// TEST 7
const test7 = multiplyNums(5, 2, product => `We have ${product} pairs of clean socks left.`);
console.log(test7); // 'We have 10 pairs of clean socks left.'

// TEST 8
function milesToGo(distance) {
  return `I have to run ${distance} miles tomorrow.`;
}
const test8 = multiplyNums(2, 3, milesToGo);
console.log(test8); // 'I have to run 6 miles tomorrow.'


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; ++i) {
    if (list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}

// TEST 9a
const test9a = contains('Gum', items, result => `${result}`);
console.log(test9a); // 'true'

// TEST 9b
const test9b = contains('gum', items, result => `${result}`);
console.log(test9b); // 'false'


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
