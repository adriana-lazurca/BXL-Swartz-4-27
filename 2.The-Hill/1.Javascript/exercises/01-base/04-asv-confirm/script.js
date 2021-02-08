/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  do {
    var age = prompt("What is your age?");
    var gen = prompt("What is your gender?");
    var city = prompt("What city do you live in?");
    var confirmation = confirm(
      "Age: " + age +" Sex: " + gen +" City: " + city + "\n" + "Do you confirm this information?"
    );
  } while (confirmation == false);

  alert("Thanks for answering!");

})();
