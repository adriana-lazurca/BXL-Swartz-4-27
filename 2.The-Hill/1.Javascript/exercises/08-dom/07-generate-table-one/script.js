/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var targetElement = document.getElementById("target");
    var table = document.createElement("table");
    targetElement.appendChild(table);

    for (let i = 1; i <= 10; i++) {
        var row = table.insertRow();
        var cell = row.insertCell();
        var textCell = document.createTextNode("row" + i);
        cell.appendChild(textCell);
    }
})();
