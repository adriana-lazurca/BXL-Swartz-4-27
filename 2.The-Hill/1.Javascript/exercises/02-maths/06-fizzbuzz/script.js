/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  for (let i = 1; i <= 100; i++) {
    let isMultipleOf3 = i % 3 == 0;
    let isMultipleOf5 = i % 5 == 0;

    if (isMultipleOf3 && isMultipleOf5) {
        console.log("fizzbuzz");
    } else if (isMultipleOf5) {
      console.log("buzz");
    } else if (isMultipleOf3) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
})();
