// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const apple = "redDelicious"
const closure = () => {
  return apple;
}
console.log(closure());



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let counter = (function(n) {
  return function() {
    return n += 1;
  }
}(0));
console.log(counter()); // 1
console.log(counter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let counterFactory = (function(sum) {
  let counter = {
    "increment": function() {
      return sum += 1;
    },
    "decrement": function() {
      return sum -= 1;
    }
  } 
    return function() {
    return counter.increment();
}
  }(0));
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it

console.log(counterFactory());
console.log(counterFactory());
console.log(counterFactory());

