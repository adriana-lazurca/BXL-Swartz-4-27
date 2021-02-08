/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  var response = prompt("Tu veux du gâteau?");
  var messageEl = document.getElementById("myh2");

  if (response == "oui") {
    messageEl.innerHTML = "Très Bien";
  } else {
    messageEl.innerHTML = "du gâteau, ça ne se refuse pas !";
  }
})();
