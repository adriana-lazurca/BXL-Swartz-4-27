/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
    // your code here
    var messageEl = document.getElementsByClassName("explain")[0];

    for (let i = 1; i <= 21; i++)
      if (i % 2 == 0) {
        let square = Math.pow(i, 2);
        messageEl.innerHTML = messageEl.innerHTML + square + " ";
      }
  });
})();
