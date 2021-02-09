/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  document.getElementById("run").addEventListener("click", () => {
    var dayBirth = document.getElementById("dob-day").value;
    var monthBirth = document.getElementById("dob-month").value;
    var yearBirth = document.getElementById("dob-year").value;
    var currentDate = new Date();
    var birthDate = new Date(
      parseInt(yearBirth),
      parseInt(monthBirth - 1),
      parseInt(dayBirth)
    );

    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    alert(age);
  });
})();
