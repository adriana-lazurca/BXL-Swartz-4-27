/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  document.getElementById("run").addEventListener("click", () => {
    function generateRandomNr() {
      var randomNum = Math.floor(Math.random() * 100) + 1;
      return randomNum;
    }

    function writeRandomNr(randomNum, id) {
      var tdElement = document.getElementById("n-" + id);
      tdElement.innerHTML = randomNum;
    }

    var allNumbers = [];
    for (let i = 1; i <= 10; i++) {
      var randomNum = generateRandomNr();
      writeRandomNr(randomNum, i);
      allNumbers.push(randomNum);
    }


    console.log(allNumbers);
    console.log(Math.max(...allNumbers));

    var min = document.getElementById("min");
    min.innerText = Math.min(...allNumbers);

    var max = document.getElementById("max");
    max.innerText = Math.max(...allNumbers);

    var suma = allNumbers.reduce((a, b) => a + b, 0);
    
    var sum = document.getElementById("sum");
    sum.innerText = suma;

    var average = document.getElementById("average");
    average.innerText = suma / allNumbers.length;

  });




})();

//exercise outside

// do {
//   let wrongAnswer = response > 3 || response < 1;
//   var response = prompt("Please write a number between 1-3");
// } while (wrongAnswer);

