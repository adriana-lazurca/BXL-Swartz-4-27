/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var targetElement = document.getElementById("target");

    document.getElementById("run").addEventListener("click", displayHeroes);

    function displayHeroes() {
        fetch("http://localhost:3000/heroes")
            .then(result => {
                return result.json();
            })
            .then(list => {

                for (var i = 0; i < list.length; i++) {
                    // Create the list item:
                    var item = document.createElement('li');

                    // Set its contents:
                    var nameText = JSON.stringify(list[i]);
                    var textItem = document.createTextNode(nameText);
                    item.appendChild(textItem);

                    // Add it to the list:
                    targetElement.appendChild(item);
                }

                function displayHero(index) {
                    var template = document.querySelector('#tpl-hero');
                    var clone = document.importNode(template.content, true);
                    document.body.appendChild(clone);

                    var hero = list[index];

                    var nameElements = document.getElementsByClassName("name");
                    nameElements[index].innerText = hero.name;

                    var alterEgoElements = document.getElementsByClassName("alter-ego");
                    alterEgoElements[index].innerText = hero.alterEgo;

                    var powerElements = document.getElementsByClassName("powers");
                    powerElements[index].innerText = hero.abilities;
                }

                for (let i = 0; i < list.length; i++) {
                    displayHero(i);
                }

            })
    }

})();
