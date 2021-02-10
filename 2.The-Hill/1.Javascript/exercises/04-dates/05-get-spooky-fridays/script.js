/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {

    for (let month = 0; month <= 11; month++) {
      var inputYear = parseInt(document.getElementById("year").value);
      var date = new Date(inputYear, month, 13);

      if (isFriday13(date)) {
        var longMonth = date.toLocaleString("en-US", { month: "long" });
        var months = document.getElementById("months");
        months.value += longMonth + " ";
        
      }
    }
  });
})();

function isFriday13(date) {
  let isFriday = date.getDay() === 5;
  let is13 = date.getDate() === 13;
  return isFriday && is13;
}

