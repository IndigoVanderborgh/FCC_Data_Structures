// Combine Arrays with the Spread Operator

// Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index. 
// With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. 
// Spread syntax makes the following operation extremely simple:

// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

// thatArray would have the value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

// Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].
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
// The spread operator ... can be used to combine two arrays together into one of the pre-existing arrays. let's look at the exercise and answer.
// We are given first an empty variable. 
// let sentence;

// From here we create a new array, and inject where we want the fragment to start in the array at the proper index. 

// let sentence = ["learning", ...fragment, "is", "fun"];