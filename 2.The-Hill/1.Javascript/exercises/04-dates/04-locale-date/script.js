/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
  // your code here

  var today = new Date();
  var fullDate = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  var hours = today.getHours();
  var min = today.getMinutes();
  var fullTime = hours + "h" + min;
  var todayFr = fullDate + ", " + fullTime;
  var element = document.getElementById("target");
  element.innerHTML = todayFr;
})();
