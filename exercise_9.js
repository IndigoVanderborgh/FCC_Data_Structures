// Combine Arrays with the Spread Operator

// Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index. 
// With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. 
// Spread syntax makes the following operation extremely simple:

// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

// thatArray would have the value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

// Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. 
// We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, 
// and false if it does not.
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // change this line
  return sentence;
}
// do not change code below this line
console.log(spreadOut());

// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence; // Change this line
//   return sentence;
// }

// console.log(spreadOut());
// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
